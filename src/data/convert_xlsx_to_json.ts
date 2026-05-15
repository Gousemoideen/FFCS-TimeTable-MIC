import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as XLSX from 'xlsx';

type ConversionJob = {
    inputFile: string;
    outputFile: string;
};

type JsonRow = Record<string, unknown>;

const DATA_DIR = path.dirname(fileURLToPath(import.meta.url));

const conversionJobs: ConversionJob[] = [
    {
        inputFile: 'report_chennai.xlsx',
        outputFile: 'output_chennai.json',
    },
];

const readFirstWorksheet = (filePath: string): JsonRow[] => {
    const workbook = XLSX.readFile(filePath);
    const firstSheetName = workbook.SheetNames[0];

    if (!firstSheetName) {
        throw new Error(`No worksheets found in ${path.basename(filePath)}`);
    }

    const worksheet = workbook.Sheets[firstSheetName];
    return XLSX.utils.sheet_to_json<JsonRow>(worksheet);
};

const writeJsonFile = async (filePath: string, data: JsonRow[]) => {
    await fs.writeFile(filePath, JSON.stringify(data));
};

const fileExists = async (filePath: string) => {
    try {
        await fs.access(filePath);
        return true;
    } catch {
        return false;
    }
};

const run = async () => {
    for (const job of conversionJobs) {
        const inputPath = path.join(DATA_DIR, job.inputFile);
        const outputPath = path.join(DATA_DIR, job.outputFile);

        if (!(await fileExists(inputPath))) {
            console.warn(`Skipped ${job.inputFile} because the file was not found.`);
            continue;
        }

        const rows = readFirstWorksheet(inputPath);
        await writeJsonFile(outputPath, rows);
        console.log(`Updated ${job.outputFile}`);
    }
};

run().catch((error: unknown) => {
    const message = error instanceof Error ? error.message : 'Failed to convert spreadsheets';
    console.error(message);
    process.exitCode = 1;
});