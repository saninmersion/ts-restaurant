type User = {
    id: number
    username: string
    role: UserRole
}

type UpdatedUser = {
    id?: number
    username?: string
    role?: UserRole
}

type UserRole = "guest" | "member" | "admin"

let nextUserId: number = 1

const users: User[] = [
    {id: nextUserId++, username: "john_doe", role: "admin"},
    {id: nextUserId++, username: "jane_doe", role: "guest"},
    {id: nextUserId++, username: "alice", role: "member"},
    {id: nextUserId++, username: "simon_hard", role: "member"},
]

const fetchUserDetails = (username: string): User => {
    const user = users.find(user => user.username === username)

    if (!user) {
        throw new Error(`User with username ${username} not found.`)
    }

    return user
}

const updateUser = (id: number, updates: Partial<User>): void => {
    const user = users.find(user => user.id === id)

    if (!user) {
        throw new Error(`User with id: ${id} not found.`)
    }

    Object.assign(user, updates)
}

const addUser = (newUser: Omit<User, 'id'>): User => {
    const user = {
        id: nextUserId++,
        ...newUser
    }

    users.push(user)

    return user
}

// console.log(fetchUserDetails("alice"))
addUser({username: "simran_khatiwada", role: "member"});

updateUser(1, {username: "new john"});
updateUser(4, {role: "guest"});

console.log(users)