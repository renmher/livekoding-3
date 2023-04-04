function calcByQuantity(quantity) {
  let price;
  if (quantity <= 35) {
    price = 650;
  } else {
    price = 600;
  }
  const total = price * quantity;
  return "jumlah uang yang harus dibayarkan untuk order ${quantity} adalah ${total}! ";
}

function calcByMoney(money) {
  let quantity = 0;
  let price;
  if (money < 650) {
    return `Uang sebesar ${money} tidak cukup untuk membeli barang!`;
  } else {
    quantity += Math.floor(money / 650);
    money = money % 650;
  }
  if (money > 0) {
    price = 600;
    quantity += Math.floor(money / price);
    money = money % price;
    if (money > 0) {
      return `Jumlah barang yang dapat dibeli adalah ${quantity}, sisa uang ${money}!`;
    }
  }
  return `Jumlah barang yang dapat dibeli adalah ${quantity}, uang habis!`;
}

function bulkOrderCalculator(type, data) {
  if (type === "money") {
    return calcByMoney(data);
  } else if (type === "quantity") {
    return calcByMoney(data);
  } else {
    return "Invalid type!";
  }
}

/* 
  example test case

  console.log(bulkOrderCalculator('money', 100000)); // Jumlah barang yang dapat dibeli adalah 163, sisa uang 450!
  console.log(bulkOrderCalculator('quantity', 100)); // Jumlah uang yang harus dibayarkan untuk order 100 adalah 61750!
  console.log(bulkOrderCalculator('money', 100)); // Uang sebesar 100 tidak cukup untuk membeli barang!
  console.log(bulkOrderCalculator('money', 1000)); // Jumlah barang yang dapat dibeli adalah 1, sisa uang 350!
  console.log(bulkOrderCalculator('money', 1300)); Jumlah barang yang dapat dibeli adalah 2, uang habis!
*/

module.exports = {
  bulkOrderCalculator,
  calcByQuantity,
  calcByMoney,
};
