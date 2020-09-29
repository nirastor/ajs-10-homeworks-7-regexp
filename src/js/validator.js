export default class Validator {
  static validateUsername(name) {
    const hasNotAllowedChars = /[^a-zA-Z\d_-]/.test(name);
    const hasMoreThreeDigitsTogether = /\d{4,}/.test(name);
    const startOrEndWithWrongChars = /^[\d_-]|[\d_-]$/.test(name);
    return !hasNotAllowedChars && !hasMoreThreeDigitsTogether && !startOrEndWithWrongChars;
  }
}
