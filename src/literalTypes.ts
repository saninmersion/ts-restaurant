// literal Types

let myName: string = "Bob"
const myName2: "Dylan" = "Dylan"

// Union Types
type User = {
    name: string
    role: UserRole
}

type UserRole = "guest" | "member" | "admin"

let userRole: UserRole = "admin"