function validate(){
  var DD = parseInt(document.forms["myForm"]["bd"].value);
  var MM = parseInt(document.forms["myForm"]["mnth"].value);
  var YY = parseInt(document.forms["myForm"]["yr"].value);
  var CC = parseInt(document.forms["myForm"]["yr"].value);

  console.log(`${DD},${MM},${YY},${CC}`);
  

  var day = ( ( (CC/4)-2*CC-1) + ((5*YY/4)) + ((26*(MM+1)/10)) + DD) % 7;
  var dayName = Math.round(day);

  console.log(`${dayName}`);
  

  if(dayName === 0 && op1.checked === true){
      swal("Your name is Kwasi");
  }
  else if(dayName === 0 && op2.checked === true){
    swal("Your name is Akosua");
  }
  if(dayName === 1 && op1.checked === true){
      swal("Your name is Kwadwo");
  }
  else if(dayName === 1 && op2.checked === true){
    swal("Your name is Adwoa");
  }
  if(dayName === 2 && op1.checked === true){
      swal("Your name is Kwabena");
  }
  else if(dayName === 2 && op2.checked === true){
    swal("Your name is Abenaa");
  }
  if(dayName === 3 && op1.checked === true){
      swal("Your name is Kwaku");
  }
  else if(dayName === 3 && op2.checked === true){
    swal("Your name is Akua");
  }
  if(dayName === 4 && op1.checked === true){
      swal("Your name is Yaw");
  }
  else if(dayName === 4 && op2.checked === true){
    swal("Your name is Yaa");
  }
  if(dayName === 5 && op1.checked === true){
      swal("Your name is Kofi");
  }
  else if(dayName === 5 && op2.checked === true){
    swal("Your name is Afua");
  }
  if(dayName === 6 && op1.checked === true){
      swal("Your name is Kwame");
  }
  else if(dayName === 6 && op2.checked === true){
    swal("Your name is Ama");
  }

  if(DD === '' || MM === '' || YY === '' || CC == ''){
    swal ({
      title: "Error", 
      text: "You haven't filled all fields!",
      icon: "warning",
      });
  }
  else if(DD <=0 || DD>31){
    swal({
      title: "Error",
      text: "Invalid Date",
      icon: "warning"
      });
  }
  else if(MM <=0 || MM>12){
    swal({
      title: "Error",
      text: "Invalid Date",
      icon: "warning"
      });
  }

  event.preventDefault();
}
