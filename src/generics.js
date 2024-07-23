var gameScores = [14, 21, 33, 43, 59];
var favouriteThings = ["raindrops on rose", "whiskers on kittens", "warm mittens", "copper kettles"];
var voters = [{ name: "Alice", age: 32 }, { name: "Bob", age: 45 }];
var getLastItem = function (array) {
    return array[array.length - 1];
};
console.log(getLastItem(gameScores));
console.log(getLastItem(favouriteThings));
console.log(getLastItem(voters));
