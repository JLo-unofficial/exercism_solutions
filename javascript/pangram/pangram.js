export const isPangram = (candidate) => {
    const uniqueLetters = new Set(candidate.toUpperCase().match(/[A-Z]/g));
    return uniqueLetters.size === 26;
}
