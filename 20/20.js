/*
    Create a function that, given a DOM Element on the page, 
    will visit the element itself and all of its descendents 
    (not just its immediate children). For each element visited, 
    the function should pass that element to a provided callback function.

    The arguments to the function should be:

    a DOM element
    a callback function (that takes a DOM element as its argument)
*/


const callback = (el) => {
    console.log(el)
}

const Traverse = (element, cb) => {
    cb(element);
    const list = element.children;
    for (let i = 0; i < list.length; i++) {
        Traverse(list[i], callback)
    }
}

let body = document.getElementsByTagName('body')[0];

Traverse(body, callback)
