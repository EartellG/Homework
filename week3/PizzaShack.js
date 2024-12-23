const Toppings = ["sausage", "pepperoni", "pineapple", "ham", "bacon"];

function greetCustomer() {
  let greet = "Welcome to the Pizza Shack, our toppings are:";
  for (let Topping of Toppings) {
    greet += `${Topping},`;
  }
  console.log(greet);
}
greetCustomer();

function getPizzaOrder(size, crust, ...toppings) {
  let order = `One ${size} ${crust} crust pizza with `;
  for (let topping of toppings) {
    order += `${topping},`;
  }
  order += "...coming up";
  console.log(order);
  return [size, crust, toppings];
}

function preparePizza([size, crust, ...toppings]) {
  console.log("Order is being made");
  return {
    size: size,
    crust: crust,
    toppings: toppings
  };
}

function servePizza(pizza) {
  let message = `Order up! Here's your ${pizza.size} ${pizza.crust} crust pizza with `;
  for (let topping of pizza.toppings) {
    message += `${topping},`;
  }
  message += "...Enjoy!";
  console.log(message);
  return pizza;
}
servePizza(preparePizza(getPizzaOrder("large", "thin", "ham", "sausage")));
