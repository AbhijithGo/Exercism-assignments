//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const codon = {
  'AUG': 'Methionine',
  'UUU': 'Phenylalanine',
  'UUC': 'Phenylalanine',
  'UUA': 'Leucine',
  'UUG': 'Leucine',
  'UCU': 'Serine',
  'UCC': 'Serine',
  'UCA': 'Serine',
  'UCG': 'Serine',
  'UAU': 'Tyrosine',
  'UAC': 'Tyrosine',
  'UGU': 'Cysteine',
  'UGC': 'Cysteine',
  'UGG': 'Tryptophan',
  'UAA': 'STOP',
  'UAG': 'STOP',
  'UGA': 'STOP'
};

export const translate = (input) => {
  const length = (input || '').length;
  let result = [];

  for(let i=0; i<length; i+=3){
    const name = codon[input.slice(i, i+3)];

    if (name == 'STOP'){
      break;
    }

    if (!name) {
      throw 'Invalid codon'
    }

    result.push(name);
  }

  return result;
};
