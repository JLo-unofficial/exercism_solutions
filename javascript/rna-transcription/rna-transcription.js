const rnaMapping = {
    'A': 'U',
    'C': 'G',
    'G': 'C',
    'T': 'A',
}
export const toRna = (dna) => dna.split('').map(letter => rnaMapping[letter]).join('');
