# @mnrendra/ts-types-merge
TypeScript utility type to merge base object type with a new one.

## Install
```
npm i -D @mnrendra/ts-types-merge
```

## Usage
```typescript
import type { Merge } from '@mnrendra/ts-types-merge'

interface Base {
  name: string
  age: number
  address: {
    city: string
    country: string
  }
}

type Person = Merge<Base, {
  age: string
  address: Merge<Base['address'], {
    city: number
  }>
  email: string
}>

const person: Person = {
  name: '',
  age: '',
  address: {
    city: 0,
    country: ''
  },
  email: ''
}
```

## Author
[@mnrendra](https://github.com/mnrendra/)
