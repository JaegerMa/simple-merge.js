# simple-merge
  Merges two objects or variables

```shell
npm install --save simple-merge
```

## Examples

```js
var merge = require('simple-merge');

merge({a: 1}, {a: 2, b: 3});
// => {a: 2, b: 3}

merge({a: 1}, {a: 2}, {a: 3});
// => {a: 3}

merge({a: 1}, {a: undefined});
// => {a: 1}

merge({a: 1}, {a: null});
// => {a: null}

merge({a: {b: 1}, c: {d: 2}}, {a: 3, c: {e: 4}});
// => {a: 3, c:{d: 2, e: 4}}

merge(1, 2);
// => 2

merge({a: 1}, 'asdf');
// => 'asdf'

merge([1, 2, 3], [4, 5, 6]);
// => [4, 5, 6]

merge(1)
// => 1

merge()
// => undefined
```

## API

### `merge(values...)`

- Only objects are merged
- Every other element will be overridden
- If a value is undefined it will be treated as non-existent

#### arguments

- `values (any)`

#### returns

- `merged (any)`