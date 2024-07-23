type Address = {
    street: string
    city: string
    country: string
}

type Person = {
    name: string
    age: number
    isStudent: boolean
    address?: Address
}


const displayInfo = (person) => {
    console.log(`${person.name} lives at ${person.address?.street}`)
}

let person: Person = {
    name: "Joe",
    age: 22,
    isStudent: true,
    address: {
        street: "St. Louis",
        city: "New York",
        country: "US"
    }
}

let person2: Person = {
    name: "Billy",
    age: 42,
    isStudent: false,
    address: {
        street: "St. Louis",
        city: "New York",
        country: "US"
    }
}

let person3: Person = {
    name: "Joel",
    age: 42,
    isStudent: false
}

let people: Person[] = [person2, person3]

displayInfo(person3)