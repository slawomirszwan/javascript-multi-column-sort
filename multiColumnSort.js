function sortMethodAsc(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}

function sortMethodDesc(a, b) {
    return -sortMethodAsc(a, b);
}

function sortMethodWithDirection(direction = "asc") { 
    return direction === "asc" ? sortMethodAsc : sortMethodDesc
}

function sortMethodWithDirectionByColumn(columnName, direction){   
    const sortMethod = sortMethodWithDirection(direction)
    return function(a, b){
        return sortMethod(a[columnName], b[columnName]);
    } 
}

function sortMethodWithDirectionMultiColumn(sortArray = []) {
    //sample of sortArray
    // sortArray = [
    //     { column: "column5", direction: "asc" },
    //     { column: "column3", direction: "desc" }
    // ]
    const sortMethodsForColumn = sortArray.map( item => sortMethodWithDirectionByColumn(item.column, item.direction) );
    return function(a,b) {
        let sorted = 0;
        let index = 0;
        while (sorted === 0 && index < sortMethodsForColumn.length) {
            sorted = sortMethodsForColumn[index++](a,b);
        }
        return sorted;
    }
} 
