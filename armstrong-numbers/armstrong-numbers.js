//
// This is only a SKELETON file for the 'Armstrong numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const validate = (input) => {
  const exponent = input.toString().length;

  const digits = input.toString().split('');

  const result = digits.reduce((acc, current) => acc + Math.pow(current, exponent), 0);

  return input === result;
};