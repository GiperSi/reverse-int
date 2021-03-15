module.exports = function reverse (n) {
    let stroka = n;
    if (n > 0) {
      stroka = n + '';
      return +stroka.split('').reverse().join('');
    } else {
      stroka = -n + '';
      return +stroka.split('').reverse().join('');
    };
}
