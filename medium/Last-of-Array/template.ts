type Last<T extends any[]> = T extends [...any, infer R] ? R : never

type A<T> = keyof T extends never ? true : false

const a: A<string> = true

// infer
// get return type

// 1. 类型推断

// 2. 代码切片
