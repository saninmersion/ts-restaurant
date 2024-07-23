type OrderStatus = "ordered" | "completed" | "cancelled"

type Pizza = {
    id: number
    name: string
    price: number
}

type Order = {
    id: number | null
    pizza: Pizza
    status: OrderStatus
}

let cashInRegister: number = 100;
let nextOrderId: number = 1;
let nextPizzaId: number = 1;

const menu: Pizza[] = [
    {id: nextPizzaId++, name: "Margherita", price: 8},
    {id: nextPizzaId++, name: "Pepperoni", price: 10},
    {id: nextPizzaId++, name: "Hawaiian", price: 7},
    {id: nextPizzaId++, name: "Veggie", price: 14},
]

const orderQueue: Order[] = []

const addToArray = <T> (array: T[], item: T) => {
    array.push(item)

    return array
}

// utility function "addNewPizza" that takes a pizza object and adds it to the menu
const addNewPizza = (pizza: Omit<Pizza, "id">): Pizza => {
    const newPizza: Pizza = {
        id: nextPizzaId++,
        ...pizza
    }

    menu.push(newPizza)

    return newPizza;
}

// utility function to place order that takes a pizza name parameter
const placeOrder = (pizzaName: string): Order | undefined => {
    const pizza: Pizza = getPizzaDetail(pizzaName);

    if (!pizza) {
        console.error('We don\'t sell that pizza.');

        return;
    }

    cashInRegister += pizza.price;

    const newOrder: Order = {pizza, id: nextOrderId++, status: "ordered"};
    orderQueue.push(newOrder);

    return newOrder;
}

// utility function completeOrder
const completeOrder = (orderId: number): Order | undefined => {
    const selectedOrder: Order | null = orderQueue.find(x => x.id === orderId);

    if (!selectedOrder) {
        console.error(`${orderId} was not found`)

        return;
    }

    if (selectedOrder.status !== "completed") {
        selectedOrder.status = "completed";
    }

    return selectedOrder;
}

const getPizzaDetail = (identifier: string | number): Pizza | undefined => {
    if (typeof identifier === "string") {
        return menu.find(pizza => pizza.name.toLowerCase() == identifier.toLowerCase())
    } else if (typeof identifier === "number") {
        return menu.find(pizza => pizza.id == identifier)
    } else {
        throw new Error('Parameter identifier needs to be string or a number.')
    }
}

console.log("Before", menu);
addNewPizza({name: "Chicken Salami", price: 9});
addNewPizza({name: "Chicken Bacon Ranch", price: 14});
addNewPizza({name: "Spicy Sausage", price: 12});
addToArray<Pizza>(menu, {id: nextPizzaId++, name: "BBQ Chicken", price: 11})
console.log("After", menu);

console.log("=======================================");

console.log("Before", orderQueue);
placeOrder("Chicken Salami");
addToArray<Order>(orderQueue, {id: nextOrderId++, pizza: menu[2], status: "ordered"})
console.log("After", orderQueue);

console.log("=======================================");

console.log("Before", orderQueue);
completeOrder(1);
console.log("After", orderQueue);

console.log("=======================================");

console.log("Total Cash", cashInRegister);
