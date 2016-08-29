var name = prompt ("What is your name?");
alert("Hello, " +name);
var a;
a = 5000;
alert (a);
var phrase = "This is a simple phrase.";
alert (phrase.length); //this gives the length of the variable phrase
var aa =100;
var bb = 50;
var result = var aa - var bb;
//these all same -> a = a + 1; a += 1; a++; add one to a variable

//now creating a simple array, zero based
var simplearray = [];
simplearray = [50, 60, 70, 80];
alert( simplearray.length);
simplearray.reverse (); //reversing the objects in the array
simplearray.sort(); //sorting the objects in the array
simplearray.join (); //joining the objects in an array

/* To see a Javascript reference guide go to
https://develper.mozilla.org/en/Javascript/Reference 
*/

//interate through all elements in an array is useful, but start index at zero
var i = 0;
while (i< simplearray.length) {
  alert ("the value is: simplearray [i]);
  i++;
}
//now lets total the array elements
var total =0;
for (var i=0; i = simpleArray.length; i++) {
  total = total + simpleArray [i];
}
alert("The Total is:" + total);
