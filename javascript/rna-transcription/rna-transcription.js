const rnaMapping = {
    'A': 'U',
    'C': 'G',
    'G': 'C',
    'T': 'A',
}

// convert string to array of strings in order to apply map
export const toRna = (dna) => dna.split('').map(letter => rnaMapping[letter]).join('');
