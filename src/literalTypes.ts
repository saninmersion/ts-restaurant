// Union Types
type User = {
    username: string
    role: UserRole
}

type UserRole = "guest" | "member" | "admin"

let userRole: UserRole = "admin"

const users: User[] = [
    { username: "john_doe", role: "admin" },
    { username: "jane_doe", role: "guest" },
    { username: "alice", role: "member" },
    { username: "simon_hard", role: "member" },
]

const fetchUserDetails = (username: string): User => {
    const user = users.find(user => user.username === username)

    if (!user) {
        throw new Error(`User with username ${username} not found.`)
    }

    return user
}

console.log(fetchUserDetails("alice"))