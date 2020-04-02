function validate(){
  var d = parseInt(dd);
  var m = parseInt(mm);
  var y = parseInt(yy);
  var c = parseInt(cc);

  var math = ( ( (c/4) -2*c-1) + ((5*y/4) ) + ((26*(m+1)/10)) + d) % 7;
  var exact = Math.round(math);

  if(exact === 0 && op1.checked === true){
      swal("Your name is Kwasi");
  }
  else if(exact === 0 && op2.checked === true){
    swal("Your name is Akosua");
  }
  if(exact === 1 && op1.checked === true){
      swal("Your name is Kwadwo");
  }
  else if(exact === 0 && op2.checked === true){
    swal("Your name is Adwoa");
  }
  if(exact === 2 && op1.checked === true){
      swal("Your name is Kwabena");
  }
  else if(exact === 0 && op2.checked === true){
    swal("Your name is Abenaa");
  }
  if(exact === 3 && op1.checked === true){
      swal("Your name is Kwaku");
  }
  else if(exact === 0 && op2.checked === true){
    swal("Your name is Akua");
  }
  if(exact === 4 && op1.checked === true){
      swal("Your name is Yaw");
  }
  else if(exact === 0 && op2.checked === true){
    swal("Your name is Yaa");
  }
  if(exact === 5 && op1.checked === true){
      swal("Your name is Kofi");
  }
  else if(exact === 0 && op2.checked === true){
    swal("Your name is Afua");
  }
  if(exact === 6 && op1.checked === true){
      swal("Your name is Kwame");
  }
  else if(exact === 0 && op2.checked === true){
    swal("Your name is Ama");
  }

  if(dd === '' || mm === || yy === '' || cc == ''){
    swal ({
      title: "Error", 
      text: "You haven't filled all fields!",
      icon: "warning",
      });
  }
  else if(dd <=0 || dd>31){
    swal({
      title: "Error",
      text: "Invalid Date",
      icon: "warning"
      });
  }
  else if(mm <=0 || mm>12){
    swal({
      title: "Error",
      text: "Invalid Date",
      icon: "warning"
      });
  }

  event.preventDefault();
}
