type MyReadonly2<T, K extends keyof T = keyof T> = Omit<T, K> & {
  readonly [P in K]: T[P]
}

// Ts 4.5 -> title & readonly title -> reonly title

// interface Todo {
//   title: string
//   description: string
//   completed: boolean
// }

// interface Todo2 {
//   readonly title: string
//   readonly description: string
//   readonly completed: boolean
// }