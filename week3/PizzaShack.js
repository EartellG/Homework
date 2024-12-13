function greetCustomer() {
  let greet = "Welcome to the Pizza Shack, our toppings are:";
  return greet;
}
console.log(greetCustomer());

const Toppings = ["sausage", "pepperoni", "pineapple", "ham", "bacon"];
for (let i in Toppings) {
  console.log(Toppings[i]);
}

function getPizzaOrder(size, crust) {
  let order = [size, crust, "sausage", "bacon"];
  return order;
}
console.log(`One ${"large"} ${"thin"} crust pizza with sausage and bacon.`);

const preparePizza = function(order) {
  const pizza = {
    size: order[0],
    crust: order[1],
    toppings: order.slice(2)
  };
  console.log("Order is being made");
  return pizza;
};

function servePizza(pizza) {
  console.log(
    `Your ${pizza.size}, ${pizza.crust}, crust pizza with ${pizza.toppings.join(
      " and "
    )} is ready.`
  );
  return pizza;
}

const pizzaOrder = getPizzaOrder("large", "thin");
const pizza = preparePizza(pizzaOrder);
servePizza(pizza);
