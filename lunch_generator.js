/* Lunch Generator Code Project
Generates a random message, suggesting what you should eat for lunch. Includes a main, and a drink. */

const foodItem = ['pizza', 'pasta', 'ramen', 'sushi', 'steak', 'a sandwhich', 'fried chicken', 'a burger', 'curry and rice']

let foodPicker = Math.floor(Math.random() * foodItem.length)

const drinkItem = ['milk', 'coffee', 'lemonade', 'boba', 'tea', 'cola', 'juice']

let drinkPicker = Math.floor(Math.random() * drinkItem.length)


const lunchStatement = () => {
  let statementPicker = Math.floor(Math.random() * 2);

  if (statementPicker === 0) {
    return `Today, I suggest you should eat ${foodItem[foodPicker]} for lunch, accompanied by a delicious glass of ${drinkItem[drinkPicker]}!`
  } else {
    return `The Fates predict that you shall devour ${foodItem[foodPicker]} for lunch, along with a nice refreshing glass of ${drinkItem[drinkPicker]}.`
  }
}

console.log(lunchStatement());
