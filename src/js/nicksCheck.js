export default class Validator {
  constructor(name) {
    this.userName = name;
    this.validateUsername(this.userName);
  }

  validateUsername(name) { // eslint-disable-line
    if (/([0-9])\1{3}/.test(name)) {
      throw new Error('Недопустимо использовать в имени более 3-х цифр подряд');
    }
    if (/[^\w_/-]/.test(name)) {
      throw new Error('Имя может состоять из латинского алфавита, цифр, символов "-" и "_"');
    }
    if (/^[0-9.\-_]|[0-9.\-_]$/.test(name)) {
      throw new Error('Недопустимо использование цифр, "-", "." и "_" в качестве первого и последнего символов');
    }
  }
}
