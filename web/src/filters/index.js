const capitalize = (str) => {
  if (!str || typeof str !== 'string') {
    return '';
  }
  const stringSplitted = str.split(' ')
    .map(name => name.charAt(0).toUpperCase() + name.substring(1).toLowerCase());
  return stringSplitted.join(' ');
};

const trimLetters = (str, amount) => `${str.slice(0, amount)}...`;

export {
  capitalize,
  trimLetters,
}
