export const isPangram = (candidate) => (new Set(candidate.toLowerCase().match(/[a-z]/))).size == 26;
