const gameScores = [14, 21, 33, 43, 59]
const favouriteThings = ["raindrops on rose", "whiskers on kittens", "warm mittens", "copper kettles"];
const voters = [{name: "Alice", age: 32}, {name: "Bob", age: 45}]
const gibberish = [{name: "Alice", age: 32}, "Dylan", 400]

const getLastItem= <Type> (array: Type[]): Type | undefined => {
    return array[array.length - 1]
}

console.log(getLastItem(gameScores))
console.log(getLastItem(favouriteThings))
console.log(getLastItem(voters))
console.log(getLastItem(gibberish))