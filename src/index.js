var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var cashInRegister = 100;
var nextOrderId = 1;
var nextPizzaId = 1;
var menu = [
    { id: nextPizzaId++, name: "Margherita", price: 8 },
    { id: nextPizzaId++, name: "Pepperoni", price: 10 },
    { id: nextPizzaId++, name: "Hawaiian", price: 7 },
    { id: nextPizzaId++, name: "Veggie", price: 14 },
];
var orderQueue = [];
var addToArray = function (array, item) {
    array.push(item);
    return array;
};
// utility function "addNewPizza" that takes a pizza object and adds it to the menu
var addNewPizza = function (pizza) {
    var newPizza = __assign({ id: nextPizzaId++ }, pizza);
    menu.push(newPizza);
    return newPizza;
};
// utility function to place order that takes a pizza name parameter
var placeOrder = function (pizzaName) {
    var pizza = getPizzaDetail(pizzaName);
    if (!pizza) {
        console.error('We don\'t sell that pizza.');
        return;
    }
    cashInRegister += pizza.price;
    var newOrder = { pizza: pizza, id: nextOrderId++, status: "ordered" };
    orderQueue.push(newOrder);
    return newOrder;
};
// utility function completeOrder
var completeOrder = function (orderId) {
    var selectedOrder = orderQueue.find(function (x) { return x.id === orderId; });
    if (!selectedOrder) {
        console.error("".concat(orderId, " was not found"));
        return;
    }
    if (selectedOrder.status !== "completed") {
        selectedOrder.status = "completed";
    }
    return selectedOrder;
};
var getPizzaDetail = function (identifier) {
    if (typeof identifier === "string") {
        return menu.find(function (pizza) { return pizza.name.toLowerCase() == identifier.toLowerCase(); });
    }
    else if (typeof identifier === "number") {
        return menu.find(function (pizza) { return pizza.id == identifier; });
    }
    else {
        throw new Error('Parameter identifier needs to be string or a number.');
    }
};
console.log("Before", menu);
addNewPizza({ name: "Chicken Salami", price: 9 });
addNewPizza({ name: "Chicken Bacon Ranch", price: 14 });
addNewPizza({ name: "Spicy Sausage", price: 12 });
addToArray(menu, { id: nextPizzaId++, name: "BBQ Chicken", price: 11 });
console.log("After", menu);
console.log("=======================================");
console.log("Before", orderQueue);
placeOrder("Chicken Salami");
addToArray(orderQueue, { id: nextOrderId++, pizza: menu[2], status: "ordered" });
console.log("After", orderQueue);
console.log("=======================================");
console.log("Before", orderQueue);
completeOrder(1);
console.log("After", orderQueue);
console.log("=======================================");
console.log("Total Cash", cashInRegister);
