var userRole = "admin";
var users = [
    { username: "john_doe", role: "admin" },
    { username: "jane_doe", role: "guest" },
    { username: "alice", role: "member" },
    { username: "simon_hard", role: "member" },
];
var fetchUserDetails = function (username) {
    var user = users.find(function (user) { return user.username === username; });
    if (!user) {
        throw new Error("User with username ".concat(username, " not found."));
    }
    return user;
};
console.log(fetchUserDetails("alice"));
