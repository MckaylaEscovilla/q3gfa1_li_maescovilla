var person = prompt("Input name: ", person);
var height = prompt("Input height: ", height);
var weight = prompt("Input weight: ", weight);
var conheight = Math.floor(height/12);
var conheight1 = height % 12;
var conweight = weight * 2.205;

if(conheight1>0)
    alert('Name: ' + person + '\nHeight: ' + conheight + '\''+ conheight1 +'\"' + '\nWeight: ' + conweight + 'lbs');
else    
    alert('Name: ', + person + '\nHeight: ' + conheight + '\'' + '\nWeight: ' + conweight + 'lbs');