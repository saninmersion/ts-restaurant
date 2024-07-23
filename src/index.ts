const menu = [
    {name: "Margherita", price: 8},
    {name: "Pepperoni", price: 10},
    {name: "Hawaiian", price: 7},
    {name: "Veggie", price: 14},
]

let cashInRegister = 100;
let orderId = 1;

const orderQueue = []

// utility function "addNewPizza" that takes a pizza object and adds it to the menu
const addNewPizza = (pizza) => {
    const pizzaInMenuIndex = menu.findIndex(x => x.name === pizza.name)

    if (pizzaInMenuIndex !== -1) {
        menu[pizzaInMenuIndex] = pizza

        return
    }

    menu.push(pizza)
}

// utility function to place order that takes a pizza name parameter and
// 1. finds the pizza in menu
// 2. adds income in cashInRegister
// 3. pushes new order object into orderQueue
// 4. returns the new order object { pizza: pizzaObject, status: "ordered"}
const placeOrder = (pizzaName) => {
    const pizza = menu.find(x => x.name === pizzaName);

    if (!pizza) {
        console.error('We don\'t sell that pizza.');

        return;
    }

    cashInRegister += pizza.price;

    const newOrder = {pizza, id: orderId, status: "ordered"};
    orderId++;
    orderQueue.push(newOrder);

    return newOrder;
}

// utility function completeOrder
const completeOrder = (orderId) => {
    const selectedOrder = orderQueue.find(x => x.id === orderId);

    if (selectedOrder && selectedOrder.status !== "completed") {
        selectedOrder.status = "completed";
    }

    return selectedOrder;
}

console.log("Before", menu);
addNewPizza({name: "Chicken Salami", price: 9});
addNewPizza({name: "Chicken Bacon Ranch", price: 14});
addNewPizza({name: "Spicy Sausage", price: 12});
addNewPizza({name: "BBQ Chicken", price: 11});
console.log("After", menu);

console.log("=======================================");

console.log("Before", orderQueue);
placeOrder("Chicken Salami");
console.log("After", orderQueue);

console.log("=======================================");

console.log("Before", orderQueue);
completeOrder(1);
console.log("After", orderQueue);
