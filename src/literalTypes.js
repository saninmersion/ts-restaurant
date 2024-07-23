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
var nextUserId = 1;
var users = [
    { id: nextUserId++, username: "john_doe", role: "admin" },
    { id: nextUserId++, username: "jane_doe", role: "guest" },
    { id: nextUserId++, username: "alice", role: "member" },
    { id: nextUserId++, username: "simon_hard", role: "member" },
];
var fetchUserDetails = function (username) {
    var user = users.find(function (user) { return user.username === username; });
    if (!user) {
        throw new Error("User with username ".concat(username, " not found."));
    }
    return user;
};
var updateUser = function (id, updates) {
    var user = users.find(function (user) { return user.id === id; });
    if (!user) {
        throw new Error("User with id: ".concat(id, " not found."));
    }
    Object.assign(user, updates);
};
var addUser = function (newUser) {
    var user = __assign({ id: nextUserId++ }, newUser);
    users.push(user);
    return user;
};
// console.log(fetchUserDetails("alice"))
addUser({ username: "simran_khatiwada", role: "member" });
updateUser(1, { username: "new john" });
updateUser(4, { role: "guest" });
console.log(users);
