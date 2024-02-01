/* Lunch Generator Code Project
Generates a random message, suggesting what you should eat for lunch. Includes a main, and a drink. */
const lunchStatement = () => {
  let statementPicker = Math.floor(Math.random() * 2);

  if (statementPicker === 0) {
    return `Today, I suggest you should eat ${foodItem()} for lunch, accompanied by ${drinkItem()}!`
  } else {
    return `The Fates prophesy that you shall devour ${foodItem()} for lunch, along with ${drinkItem()}`
  }
}

console.log(lunchStatement());
