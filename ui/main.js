
//Submit Name


var submit = document.getElementById('submit_btn');
submit.onclick = function() {
    
        //Create a request object
      var request= new XMLHttpRequest();
      
    //Capture the response and store it in a variable
    request.onreadystatechange = function() {
      if(request.readyState === XMLHttpRequest.DONE)   {
          //Take some action
          if(request.status=== 200) {
               
    //make a req to the server and send the name.
    //capture a list of names and render it as list.
    
   console.log('user logged in');
   alert('Logged in succesfully');
             
          } else if(request.status === 403){
              alert(' Not correct');
          } else if(request.status === 500){
              alert('Something wron on server');
          }
      }
      //Not done yet
    };
    //Make a request
    var username= document.getElementById('username').value;
    var password= document.getElementById('password').value;
    console.log(username);
    console.log(password);
    request.open('POST', 'http://singhrishabh670.imad.hasura-app.io/login', true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify({username: username, password: password }));
   
};