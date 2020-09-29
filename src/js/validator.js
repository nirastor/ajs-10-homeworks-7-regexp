export default class Validator {
  static validateUsername(name) {
    const hasNotAllowedChars = /[^a-zA-Z\d_-]/.test(name);
    const hasMoreThreeDigintsTogether = /\d{4,}/.test(name);
    const startAndEndWithWrongChars = /^[\d_-]|[\d_-]$/.test(name);
    return !hasNotAllowedChars && !hasMoreThreeDigintsTogether && !startAndEndWithWrongChars;
  }
}
