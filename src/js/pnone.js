export default class Phone {
  static format(phone) {
    return phone.replace(/[\s()-]/g, '').replace(/^8/, '+7');
  }
}
