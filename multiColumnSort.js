function sortMethodAsc(a, b) {
    return a == b ? 0 : a > b ? 1 : -1;
}

function sortMethodWithDirection(direction) { 
    if (direction === undefined || direction == "asc") {
        return sortMethodAsc;
    } else {
        return function(a, b) {
            return -sortMethodAsc(a, b);
        } 
    }
}

function sortMethodWithDirectionByColumn(columnName, direction){   
    const sortMethod = sortMethodWithDirection(direction)
    return function(a, b){
        return sortMethod(a[columnName], b[columnName]);
    } 
}

function sortMethodWithDirectionMultiColumn(sortArray) {
    //sample of sortArray
    // sortArray = [
    //     { column: "column5", direction: "asc" },
    //     { column: "column3", direction: "desc" }
    // ]
    const sortMethodsForColumn = (sortArray || []).map( item => sortMethodWithDirectionByColumn(item.column, item.direction) );        
    return function(a,b) {
        let sorted = 0;
        let index = 0;
        while (sorted === 0 && index < sortMethodsForColumn.length) {
            sorted = sortMethodsForColumn[index++](a,b);
        }
        return sorted;
    }
} 
