type Last<T extends any> = T extends [...infer P, infer R] ? R : never

type a = Last<[3, 2, 1]>
