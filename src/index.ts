type Pizza = {
    name: string
    price: number
}

type OrderStatus = "ordered" | "completed" | "cancelled"

type Order = {
    id: number
    pizza: Pizza
    status: OrderStatus
}

const menu = [
    {name: "Margherita", price: 8},
    {name: "Pepperoni", price: 10},
    {name: "Hawaiian", price: 7},
    {name: "Veggie", price: 14},
]

let cashInRegister = 100;
let orderId = 1;

const orderQueue: Order[] = []

// utility function "addNewPizza" that takes a pizza object and adds it to the menu
const addNewPizza = (pizza: Pizza) => {
    const pizzaInMenuIndex = menu.findIndex(x => x.name === pizza.name)

    if (pizzaInMenuIndex !== -1) {
        menu[pizzaInMenuIndex] = pizza

        return
    }

    menu.push(pizza)
}

// utility function to place order that takes a pizza name parameter
const placeOrder = (pizzaName: string) => {
    const pizza = menu.find(x => x.name === pizzaName);

    if (!pizza) {
        console.error('We don\'t sell that pizza.');

        return;
    }

    cashInRegister += pizza.price;

    const newOrder: Order = {pizza, id: orderId, status: "ordered"};
    orderId++;
    orderQueue.push(newOrder);

    return newOrder;
}

// utility function completeOrder
const completeOrder = (orderId: number) => {
    const selectedOrder = orderQueue.find(x => x.id === orderId);

    if (!selectedOrder) {
        console.error(`${orderId} was not found`)
    }

    if (selectedOrder.status !== "completed") {
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
