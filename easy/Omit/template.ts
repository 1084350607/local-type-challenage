type MyOmit2<T, K extends keyof T> = {
    [P in keyof T as P extends K ? never : P]: T[P]
}

type MyExclude<T, K> = T extends K ? never : T

type MyOmit<T, K extends keyof T> = {
    [P in MyExclude<keyof T, K>]: T[P]
}
