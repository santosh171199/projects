function validate()
{
    var letter=/^[a-zA-Z\s]+$/;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const regex = /^[0-9]{10}$/;
    var dateRegex = /^(\d{4})(\/)(\d{1,2})(\/)(\d{1,2})$/;
    var fname=document.getElementById("fname").value;
var lname=document.getElementById("lname").value;
var email=document.getElementById("email").value;
var mob=document.getElementById("mob").value;
var dob=document.getElementById("dob").value;
var pass=document.getElementById("password");

var a=0;
    if(fname=='' || lname=='' || !letter.test(fname) || !letter.test(lname) )
    {
      
        alert("Invalid Name format");
        
    }
    else{
        a=a+1;

       

    }
    if (!emailRegex.test(email))
    {
        alert("Wrong Email Format")


    }
    else{
        a=a+1;
    }
    if(!regex.test(mob))
    {
        alert("Enter valid mob")

    }
    else{
       
        a=a+1;
    }
    
    if (!dateRegex.test(dob)) {
       alert("Enter Valid Date format")
      }
      else{
        a=a+1;
      }

      if(a==4){
        alert("Registration Sucessful");

    }
    else{
        alert("Registration Fail");
    }

}
function Back()
{
    location.href='web assignement 2.html'
}