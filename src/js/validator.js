export default class Validator {
  static validateUsername(name) {
    // better with \w and "i" flag
    // better use has
    const hasNotAllowedChars = /[^a-zA-Z\d_-]/.test(name);
    const hasMoreThreeDigitsTogether = /\d{4,}/.test(name);
    const startOrEndWithWrongChars = /^[\d_-]|[\d_-]$/.test(name);
    return !hasNotAllowedChars && !hasMoreThreeDigitsTogether && !startOrEndWithWrongChars;
  }
}

/*
// use \w for diapasones
// more humanic: invert 1st and 3rd conditions

static validateUsername(name) {
  const hasAllowedChars = /^[\w-]$/.test(name);
  const hasMoreThreeDigitsTogether = /\d{4,}/.test(name);
  const startOrEndAllowedChars = /^[a-z]|[a-z]$/i.test(name);
  return hasAllowedChars && !hasMoreThreeDigitsTogether && startAndEndAllowedChars;
}
*/
