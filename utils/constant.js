const regexUrl = /https?:\/\/(www.)?[\w-]+\.[\w-._~:/?#[\]@!$&'()*+,;=]+/;
const regexEmail = /\w+@\w+\.\w+/;
const regexName = /^[A-Za-zА-Яа-яёЁ\s-]+$/;

module.exports = {
  regexUrl, regexEmail, regexName,
};
