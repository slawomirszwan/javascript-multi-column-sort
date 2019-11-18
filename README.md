# javascript-multi-column-sort
closure &amp; decorator pattern

multi-column-sort javascript


function to prepare sort method for javascript sort method for array

multiColumnSort.js - file with functions
```javascript
let array = [1,5,8]
const sortMethod = sortMethodAsc
const result = array.sort(sortMethod)
```

```javascript
let array = [1,5,8]
const direction ="desc"
const sortMethod = sortMethodWithDirection(direction)
const result = array.sort(sortMethod)
```

```javascript
let array = [
  { column1: 1, name: "Adam", columnName: "value"}
  { column1: 5, name: "Zosia", columnName: "value2"}
]
const columnName = "name"
const direction = "desc"
const sortMethod = sortMethodWithDirectionByColumn(columnName, direction)
const result = array.sort(sortMethod)
```

```javascript
let array = [
  { column1: 1, name: "Adam", columnName: "value"}
  { column1: 5, name: "Zosia", columnName: "value2"}
]
//order sorting
let sortArray = [
    { column: "name", direction: "desc" },
    { column: "column1", direction: "asc" }
]
const sortMethod = sortMethodWithDirectionMultiColumn(sortArray)
const result = array.sort(sortMethod)
```
