

function CheckPassword(inputtxt) 
{ 
var paswd=  /^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/;
if(inputtxt.value.match(paswd)) 
{ 
 alert('Correct, try another...')
return true;
}
else
{ 
alert('Wrong...!')
return false;
}
}  