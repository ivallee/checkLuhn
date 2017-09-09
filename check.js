function reduceNumber(num) {
  var str = String(num).split('');
  return(Number(str[0]) + Number(str[1]));
}

function sumNumbers(numArr) {
  return numArr.reduce(function(sum, value) {
    return sum + value;
  });
}

var check = function(cc) {
  var num = cc.split('').map(Number);
  var products = [];
  for (var i = num.length - 1; i >= 0; i--) {
    if (i % 2 === 0) {
      var prod = num[i] * 2;
      if (prod >= 10) {
        products.push(reduceNumber(prod));
      } else {
        products.push(prod);
      }
    } else {
      products.push(num[i]);
    }
  }
  if (sumNumbers(products) % 10 === 0) {
    return true;
  } else {
    return false;
  }
};

module.exports = check;
