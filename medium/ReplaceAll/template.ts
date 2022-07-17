type ReplaceAll<S extends string, From extends string, To extends string> = From extends '' ? S : S extends `${infer left}${From}${infer Rest}` ? `${left}${To}${ReplaceAll<`${Rest}`, From, To>}` : S
