function auth()
{
 var email=document.getElementById("email").value;
 var password=document.getElementById("password").value;
 if(email=="ragul@gmail.com "&& password=="123")
 {
     window.open("student.html");
     alert("login Sucessfully");
 }
 else{
     alert("Invalid Information");
 }
}