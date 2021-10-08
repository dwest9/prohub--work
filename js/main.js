document.querySelector('#name').addEventListener('keypress', FullName);
document.querySelector('#email').addEventListener('keypress', Email);
document.querySelector('#address').addEventListener('keypress', Residence);
document.querySelector('#phone').addEventListener('keypress', Phone);
document.querySelector('#uname').addEventListener('keypress', Username);
document.querySelector('#pwd').addEventListener('keypress', Password);


function FullName(){
    const name = document.getElementById('name');
    const re = /^([a-zA-Z]+)(\s{1}[a-zA-Z]+)$/;

    if(re.test(name.value)){
      name.classList.add('is-valid')
      name.classList.remove('is-invalid')
    }else{
        name.classList.add('is-invalid')
        name.classList.remove('is-valid')
    }
}

function Email(){
    const email = document.getElementById('email');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{1,5})$/;

    if(re.test(email.value)){
        email.classList.add('is-valid')
        email.classList.remove('is-invalid')
      }else{
          email.classList.add('is-invalid')
          email.classList.remove('is-valid')
      }
}


function Residence(){
    const address = document.getElementById('address');
    const re = /^([a-zA-Z0-9,]+)(\s{1}[a-zA-Z0-9,]+)(\s{1}[a-zA-Z0-9.]+)$/;

    if(re.test(address.value)){
        address.classList.add('is-valid')
        address.classList.remove('is-invalid')
      }else{
          address.classList.add('is-invalid')
          address.classList.remove('is-valid')
      }
}


function Phone(){
    const phone = document.getElementById('phone');
    const re = /^([0-9]+)([0-9]+)$/;

    if(re.test(phone.value)){
        phone.classList.add('is-valid')
        phone.classList.remove('is-invalid')
      }else{
          phone.classList.add('is-invalid')
          phone.classList.remove('is-valid')
      }
}

function Username(){
    const uname = document.getElementById('uname');
    const re = /^([a-zA-Z]+)(\s{1}[a-zA-Z]+)$/;

    if(re.test(uname.value)){
        uname.classList.add('is-valid')
        uname.classList.remove('is-invalid')
      }else{
          uname.classList.add('is-invalid')
          uname.classList.remove('is-valid')
      }
}

function Password(){
    const pwd = document.getElementById('pwd');
    const re = /^([a-zA-Z0-9_\-\.]+)([a-zA-Z0-9_\-\.]+)$/;

    if(re.test(pwd.value)){
        pwd.classList.add('is-valid')
        pwd.classList.remove('is-invalid')
      }else{
          pwd.classList.add('is-invalid')
          pwd.classList.remove('is-valid')
      }
}