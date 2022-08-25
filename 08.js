/*
    (a) What gets logged to the console 
    when the user clicks on “Button 4” and why?

    (b) Provide one or more alternate implementations
    that will work as expected.
*/


for (var i = 0; i < 5; i++) {
    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode('Button ' + i));
    btn.addEventListener('click', (function(i) {
      return function() { console.log(i); };
    })(i));
    document.body.appendChild(btn);
}