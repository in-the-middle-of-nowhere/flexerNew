async function sendEmail(e){
  if (validateEmail(document.getElementById('emailInput').value)){
    await fetch('/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'email': document.getElementById('emailInput').value
      })
    }).then (function (res){
      //что-то делаем
    }).catch (function (err){
      console.log(err);
      alert('Sorry! Something went wrong.');
    });
  } else{
    alert('Enter correct email')
  }
}

function validateEmail(email){
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}