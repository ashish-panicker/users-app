import { Id } from "./id"

// Extending from the type Id and creating a new type
export type Category = Id & {
    category: string
}