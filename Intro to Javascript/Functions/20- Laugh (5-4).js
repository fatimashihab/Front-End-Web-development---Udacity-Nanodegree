/*
 * Programming Quiz: Laugh (5-4)
 * Directions:
Write an anonymous function expression that stores a function in a variable called "laugh" and outputs 
the number of "ha"s that you pass in as an argument.

laugh(3);
Returns: hahaha!
 */

var laugh = function(num){
    var text="";
    for (num; num>0; num--){
        text +="ha";
    }
    text +="!";
    return text;
}

console.log(laugh(13));
