//What is the output out of the following code? Explain your answer.

var a={},
    b={key:'b'},
    c={key:'c'};
a[b]=123;
a[c]=456;

console.log(a[b]);