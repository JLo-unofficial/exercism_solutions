const rnaMapping = {
    'A': 'U',
    'C': 'G',
    'G': 'C',
    'T': 'A',
}

// convert string to array of strings in order to apply map
// export const toRna = (dna) => [...dna].map(letter => rnaMapping[letter]).join('');

// use of reduce to append mapped values to an accumulating string
export const toRna = (dna) => [...dna].reduce((rnaStrand, letter) => rnaStrand += rnaMapping[letter], '')
