export default class Validator {
  constructor(name) {
    this.userName = name;
    this.validateUsername(this.userName);
  }

 validateUsername(name) {
    if (/^[0-9.\-_]/.test(name) || /[0-9.\-_]$/.test(name) || /([0-9])\1{3}/.test(name)) { //   /^[0-9\.\-\_]/.test(name) || /[0-9\.\-\_]$/.test(name) || /([0-9])\1{3}/.test(name)
      throw new Error('Неподходящий nickname');
    }
  }
}
