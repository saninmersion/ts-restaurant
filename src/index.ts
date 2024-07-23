type Pizza = {
    id: number
    name: string
    price: number
}

type OrderStatus = "ordered" | "completed" | "cancelled"

type Order = {
    id: number
    pizza: Pizza
    status: OrderStatus
}

const menu: Pizza[] = [
    {id: 1, name: "Margherita", price: 8},
    {id: 2, name: "Pepperoni", price: 10},
    {id: 3, name: "Hawaiian", price: 7},
    {id: 4, name: "Veggie", price: 14},
]

let cashInRegister = 100;
let orderId = 5;

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
    const selectedOrder: Order | null = orderQueue.find(x => x.id === orderId);

    if (!selectedOrder) {
        console.error(`${orderId} was not found`)
    }

    if (selectedOrder.status !== "completed") {
        selectedOrder.status = "completed";
    }

    return selectedOrder;
}

console.log("Before", menu);
addNewPizza({id: 5, name: "Chicken Salami", price: 9});
addNewPizza({id: 6, name: "Chicken Bacon Ranch", price: 14});
addNewPizza({id: 7, name: "Spicy Sausage", price: 12});
addNewPizza({id: 8, name: "BBQ Chicken", price: 11});
console.log("After", menu);

console.log("=======================================");

console.log("Before", orderQueue);
placeOrder("Chicken Salami");
console.log("After", orderQueue);

console.log("=======================================");

console.log("Before", orderQueue);
completeOrder(1);
console.log("After", orderQueue);
