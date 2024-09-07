function showpassword(){
     var passWord = document.getElementById("password")
     if(passWord.type == "password"){
          passWord.setAttribute("type","text")
          document.getElementById("btn-visibility").value="Hide"
     }
     else if(passWord.type=="text"){
          passWord.setAttribute("type","password")
          document.getElementById("btn-visibility").value="Show"
     }
}

function validation(){
     var username = document.getElementById("username").value
     var email = document.getElementById("email").value
     var password = document.getElementById("password").value
     var usernameCheck = /^[a-zA-Z]+(?:[a-zA-Z\s]+)*$/
     var emailCheck = /^[a-zA-Z0-9.]+@[a-zA-Z]+\.[a-z]{2,3}$/
     var passwordCheck = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\W)(?=.*[0-9]).{7,}$/
     if(username==""||username.length<3){
          alert("Please check your Username")
          return false
     }
     if(!username.match(usernameCheck)){
          alert("Username Must Carry Alphabets")
          return false
     }
     if(!email.match(emailCheck)){
          alert("Please check your email ID")
          return false
     }
     if(password==''){
          alert("Password cannot be empty")
          return false
     }
     if(!password.match(passwordCheck)){
          alert("Password should we the combination of Uppercase, Lowercase, Special Characters and Numbers must be more than 6 characters")
          return false
     }
}