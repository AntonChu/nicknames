export default class Validator {
  constructor(name) {
    this.userName = name;
    this.validateUsername(this.userName);
  }

  validateUsername(name) { // eslint-disable-line
    if (/([0-9])\1{3}/.test(name) || /[^\w_/-]/.test(name) || /^[0-9.\-_]|[0-9.\-_]$/.test(name)) {
      throw new Error('Неподходящий формат имени');
    }
  }
}
