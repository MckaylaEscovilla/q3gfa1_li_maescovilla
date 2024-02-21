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
let question = "Do you agree to share your personal information with the site?";
    if(confirm(question) == true){
        if(conheight1>0){
            document.write('Name: ' + person + '<br>Height: ' + conheight + '\''+ conheight1 +'\"' + '<br>Weight: ' + conweight + 'lbs');
        }
        else{
            document.write('Name: ', + person + '<br>Height: ' + conheight + '\'' + '<br>Weight: ' + conweight + 'lbs');
        }
    }
    else{
        document.write("User does not wish to share his/her information.");
    }
