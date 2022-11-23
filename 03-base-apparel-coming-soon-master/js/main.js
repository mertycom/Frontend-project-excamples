const form = document.getElementById('form');
const email = document.getElementById('email');


form.addEventListener('submit',(e)=> {
    e.preventDefault();
    const emailVal = email.value;
    console.log(emailVal)

    if(!isEmail(emailVal)){
        form.classList.add('error');
    }else{
        form.classList.remove('error');
    }
})


function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }