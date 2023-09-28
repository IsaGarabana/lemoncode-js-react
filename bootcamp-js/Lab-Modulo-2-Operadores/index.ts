const totalTicket: number = 120;
const drinksTicket: number = 18;
const totalPeople: number = 6;
const foodTicket = totalTicket - drinksTicket;

const foodEachOne = foodTicket / totalPeople;
const whatIPay = foodEachOne + drinksTicket;

console.log((120 - 18) / 6 + '€ each');
console.log(
  `If we are 6 people in total, my friends pay ${foodEachOne}€ each for their food, and I pay ${whatIPay}€ for my food and all drinks`
);
