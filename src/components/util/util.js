export const replaceCamelCaseWithSpaces = (word = '') => {
  return word.replace(/\B([A-Z])\B/g, ' $1');
};
