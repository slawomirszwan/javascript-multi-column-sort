const sortMethodAsc = (a, b) => (a === b ? 0 : a > b ? 1 : -1);

const sortMethodDesc = (a, b) => -sortMethodAsc(a, b);

const sortMethodWithDirection = (direction = 'asc') =>
  direction === 'asc' ? sortMethodAsc : sortMethodDesc;

const sortMethodWithDirectionByColumn = (columnName, direction) => {
  const sortMethod = sortMethodWithDirection(direction);
  return (a, b) => sortMethod(a[columnName], b[columnName]);
};

const sortMethodWithDirectionMultiColumn = (sortArray = []) => {
  //sample of sortArray
  // sortArray = [
  //     { column: "column5", direction: "asc" },
  //     { column: "column3", direction: "desc" }
  // ]
  const sortMethodsForColumn = sortArray.map(item =>
    sortMethodWithDirectionByColumn(item.column, item.direction)
  );
  return (a, b) => {
    let sorted = 0,
      index = 0;
    while (sorted === 0 && index < sortMethodsForColumn.length) {
      sorted = sortMethodsForColumn[index++](a, b);
    }
    return sorted;
  };
};
