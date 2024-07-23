var menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 7 },
    { name: "Veggie", price: 14 },
];
var cashInRegister = 100;
var orderId = 1;
var orderQueue = [];
// utility function "addNewPizza" that takes a pizza object and adds it to the menu
var addNewPizza = function (pizza) {
    var pizzaInMenuIndex = menu.findIndex(function (x) { return x.name === pizza.name; });
    if (pizzaInMenuIndex !== -1) {
        menu[pizzaInMenuIndex] = pizza;
        return;
    }
    menu.push(pizza);
};
// utility function to place order that takes a pizza name parameter
var placeOrder = function (pizzaName) {
    var pizza = menu.find(function (x) { return x.name === pizzaName; });
    if (!pizza) {
        console.error('We don\'t sell that pizza.');
        return;
    }
    cashInRegister += pizza.price;
    var newOrder = { pizza: pizza, id: orderId, status: "ordered" };
    orderId++;
    orderQueue.push(newOrder);
    return newOrder;
};
// utility function completeOrder
var completeOrder = function (orderId) {
    var selectedOrder = orderQueue.find(function (x) { return x.id === orderId; });
    if (!selectedOrder) {
        console.error("".concat(orderId, " was not found"));
    }
    if (selectedOrder.status !== "completed") {
        selectedOrder.status = "completed";
    }
    return selectedOrder;
};
console.log("Before", menu);
addNewPizza({ name: "Chicken Salami", price: 9 });
addNewPizza({ name: "Chicken Bacon Ranch", price: 14 });
addNewPizza({ name: "Spicy Sausage", price: 12 });
addNewPizza({ name: "BBQ Chicken", price: 11 });
console.log("After", menu);
console.log("=======================================");
console.log("Before", orderQueue);
placeOrder("Chicken Salami");
console.log("After", orderQueue);
console.log("=======================================");
console.log("Before", orderQueue);
completeOrder(1);
console.log("After", orderQueue);
