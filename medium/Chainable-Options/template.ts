type Chainable<T = {}> = {
  option<K extends string, V>(
    key: K extends keyof T ? (V extends T[K] ? never : K) : K,
    value: V
  ): Chainable<Omit<T, K> & { [P in K]: V }>
  get(): T
}

const a = [1,2,3]
const b = [...a, 2]

// <> -> ts 穿参  js ()

// option -> Chainable

// js -> Promise -> Promise.then().then() -> .then return promise
