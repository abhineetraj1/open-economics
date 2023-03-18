function predictValue(array) {
  const b0 = -5; 
  const b1 = 0.1;
  const predictedPrices = [];
  for (let i = 0; i < 10; i++) {
    const z = b0 + b1 * array[array.length - 1];
    const p = 1 / (1 + Math.exp(-z));
    const predictedPrice = Math.round(p * 100);
    predictedPrices.push(predictedPrice);
    array.push(predictedPrice);
  }

  return predictedPrices;
}

function predictData(oil_price, currency_value) {
  if (10 == oil_price.length && 10 == currency_value.length) {
    var arr = [predictValue(oil_price), predictValue(currency_value)];
    y = [];
    for (var i = 0; i < 10; i++) {
      y.push(arr[0][i]*arr[1][i]);
    }
    var data = {"data":y.indexOf(Math.min(...y)), "price" : Math.min(...y),"arr":arr};
    return data;

  } else {
    console.log("List value is incomplete");
  }
}