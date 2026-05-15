export function getShortCourseName(courseName: string): string {
    const normalized = courseName.replace(/\s+/g, ' ').trim();
    if (!normalized) return '';
    if (normalized.length <= 22) return normalized;

    const stripped = normalized.replace(/[()]/g, '');
    const words = stripped.split(' ').filter(Boolean);
    const stopWords = new Set(['and', 'of', 'the', 'to', 'for', 'with', 'in', 'on', 'an', 'a']);
    const significantWords = words.filter(word => !stopWords.has(word.toLowerCase()));

    const twoWordCandidate = (significantWords.length ? significantWords : words).slice(0, 2).join(' ');
    if (twoWordCandidate && twoWordCandidate.length <= 22) {
        return twoWordCandidate;
    }

    const acronymSource = significantWords.length ? significantWords : words;
    const acronym = acronymSource.map(word => word[0]).join('').toUpperCase();
    if (acronym.length >= 3) {
        return acronym;
    }

    return normalized.slice(0, 22).trim();
}
