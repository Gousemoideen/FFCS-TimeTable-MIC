# Course Data Structure & Import Guide

This document explains the course database format, directory layout, and how to import new course offerings into the FFCS Timetable Planner.

---

## 1. Directory Layout

The course catalog files are located under `src/data/`:

* **`output_chennai.json`**: The active source of truth JSON file containing the raw course entries. (Currently restricted to only EEE courses as requested).
* **`output_chennai_original.json`**: A preserved backup of the pre-existing Chennai courses before isolating EEE courses (ignored by git).
* **`all_data_chennai.ts`**: The compiled TypeScript data module containing all raw course slots, generated automatically by `convert_json_to_data.ts`.
* **`courses_chennai.ts`**: The compiled TypeScript module containing the list of unique courses, generated automatically by `convert_json_to_data.ts`.
* **`convert_json_to_data.ts`**: Rebuilds the TypeScript modules from `output_chennai.json`.
* **`import_courses.ts`**: The generic extraction and merge script used to import upcoming courses (ignored by git).

---

## 2. Course Entry Schema

Each item in `output_chennai.json` is a flat object representing a single offering (slot + faculty combination) of a course component:

```json
{
  "CODE": "BAEEE103",
  "TITLE": "Analog Electronics",
  "TYPE": "ETH",
  "CREDITS": 3,
  "SLOT": "F1+TF1",
  "FACULTY": "Dr. Binu Ben Jose D R"
}
```

### Fields

* **`CODE`**: The course code (e.g. `BAEEE103`).
* **`TITLE`**: The descriptive name of the course (e.g. `Analog Electronics`).
* **`TYPE`**: The component type:
  * **Theory**: `TH` or `ETH` (Embedded Theory).
  * **Lab**: `LO` or `ELA` (Embedded Lab).
  * **Soft Skills**: `SS`.
  * **Project**: `PJT`.
* **`CREDITS`**: Numeric credit value. For split courses:
  * Theory component typically gets $L + T$ credits.
  * Lab component typically gets $P / 2$ credits (usually $1$ credit).
* **`SLOT`**: Slot name(s) separated by `+` (e.g. `F1+TF1`, `L55+L56`).
* **`FACULTY`**: Faculty name (e.g. `Dr. Binu Ben Jose D R`).

### Handling Theory + Lab (Embedded) Courses

In VIT, a course offering that includes both theory and lab (e.g., Slot: `F1+TF1/L55+L56`) is split into **two distinct entries** sharing the same `CODE`, `TITLE`, and `FACULTY`:
1. One entry with `TYPE` = `ETH` (Theory) and its corresponding theory slot (e.g. `F1+TF1`).
2. One entry with `TYPE` = `ELA` (Lab) and its corresponding lab slot (e.g. `L55+L56`).

---

## 3. How to Import Upcoming Courses

When new courses or departments are released, you can import them from either a **JSON array** file or an **Excel sheet (`.xlsx`)**.

### Step 1: Create the Input File
Prepare a file (e.g., `new_courses.json` or `new_courses.xlsx` in your workspace) containing the new offerings with the same column headers/keys: `CODE`, `TITLE`, `TYPE`, `CREDITS`, `SLOT`, `FACULTY`.

### Step 2: Run the Import Command
Run the generic import script passing the path to your new file:

```bash
npx tsx src/data/import_courses.ts path/to/new_courses.json
# or
npx tsx src/data/import_courses.ts path/to/new_courses.xlsx
```

### What the script does:
1. Loads the new courses from your file.
2. Reads the existing `src/data/output_chennai.json`.
3. Merges them together, checking for duplicates across `(CODE, SLOT, FACULTY, TYPE)` to ensure safety.
4. Writes the merged list back to `output_chennai.json`.
5. Automatically runs `convert_json_to_data.ts` to rebuild the TypeScript files (`all_data_chennai.ts` and `courses_chennai.ts`).
