def predict_value(array)
  b0 = -5
  b1 = 0.1
  predicted_prices = []
  for i in 0..9 do
    z = b0 + b1 * array[array.length - 1]
    p = 1 / (1 + Math.exp(-z))
    predicted_price = (p * 100).round
    predicted_prices.push(predicted_price)
    array.push(predicted_price)
  end
  predicted_prices
end

def predict_data(oil_price, currency_value)
  if oil_consumption.length == 10 && oil_price.length == 10 && currency_value.length == 10
    arr = [predict_value(oil_price), predict_value(currency_value)]
    y = []
    for i in 10.downto(0) do
      y.push(arr[0][i] * arr[1][i])
    end
    data = {"data": y.index(y.min), "price": y.min, "arr":arr}
    data
  else
    puts "List value is incomplete"
  end
end
