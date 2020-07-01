function validateRegForm() {
  var fname = document.getElementById("firstname").value;
  var lname = document.getElementById("lastname").value;
  var uname = document.getElementById("username").value;               
var phone = document.getElementById("telephone").value;  
if (fname == "")                                  
{ 
window.alert("Please enter your first name."); 
fname.focus();
return false;
}
else if(isNaN(fname) /*"%d[10]"*/)
{
alert("First name confirmed");
}
else{ 
window.alert("please enter character"); 
}   

if (lname == "")                                  
{ 
window.alert("Please enter your last name."); 
lname.focus();
return false;
}
else if(isNaN(lname) /*"%d[10]"*/)
{
alert(" Last name confirmed");
}
else{ 
window.alert("please enter character"); 
}   

if (uname == "")                                  
{ 
window.alert("Please enter your user name."); 
uname.focus();
return false;
}
else if(isNaN(uname) /*"%d[10]"*/)
{
alert("User name confirmed");
}
else{ 
window.alert("please enter character"); 
}   
if (phone == "")                           
{ 
window.alert("Please enter your telephone number."); 
phone.focus();
return false; 
} 
else if(!isNaN(phone) /*phone.value == isNaN(phone.value)*/)
{
alert("number confirmed");
}
else{
window.alert("please enter numbers only");
}   
}

