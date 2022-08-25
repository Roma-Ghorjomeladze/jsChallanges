/*
    The following recursive code will cause 
    a stack overflow if the array list is too large. 
    How can you fix this and still retain the recursive pattern?
*/

var list = [1,2,3,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,]

var nextListItem = function() {
    var item = list.pop();
    console.log('item', item)
    if (item) {
        // process the list item...
        setTimeout(() => nextListItem(), 0)
    }
};

nextListItem()