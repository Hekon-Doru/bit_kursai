import axios from 'axios';

console.log('Cookies');


const loginForm = document.querySelector('[data-login]');

console.log(loginForm);

if (loginForm) {

  const emailInput = loginForm.querySelector('[name="email"]');
  const pswInput = loginForm.querySelector('[name="password"]');
  const loginButton = loginForm.querySelector('#login');
  const signupButton = loginForm.querySelector('#signup');


  loginButton.addEventListener('click', _ => {
    console.log('clicking', emailInput.value, pswInput.value)
    axios.post('http://localhost/login',
      {
        email: emailInput.value,
        psw: pswInput.value
      },
      { withCredentials: true }
    )
      .then(res => {
        console.log(res.data)
      })
  });

  signupButton.addEventListener('click', _ => {
    console.log('clicking', emailInput.value, pswInput.value)
    axios.post('http://localhost/login',
      {
        email: emailInput.value,
        psw: pswInput.value
      },
      { withCredentials: false }
    )
      .then(res => {
        console.log(res.data);
        window.location.href = 'signup.html';
      })
  });


}


const signupForm = document.querySelector('[data-signup]');

if (signupForm) {

  const usernameInput = signupForm.querySelector('[name="username"]');
  const emailInput = signupForm.querySelector('[name="email"]');
  const pswInput1 = signupForm.querySelector('[name="password1"]');
  const pswInput2 = signupForm.querySelector('[name="password2"]');
  const loginButton = signupForm.querySelector('#login');
  const signupButton = signupForm.querySelector('#signup');

  loginButton.addEventListener('click', _ => {
    window.location.href = 'login.html';
  });


  let pswInput;

  signupButton.addEventListener('click', _ => {
    //validationas ar abu laukai vienodi.

    let allInputsFilled;

    if (
      usernameInput.value &&
      emailInput.value &&
      pswInput1.value &&
      pswInput2.value
    ) 
    {
      console.log(usernameInput.value);
      console.log(emailInput.value);
      console.log(pswInput1.value);
      console.log(pswInput2.value);
      console.log('Užpildyti visi laukai');
      allInputsFilled = true;
    } else {
      allInputsFilled = false;
      console.log('Užpildyti ne visi laukai');
    }

    if (pswInput1.value === pswInput2.value) {
      pswInput = pswInput1.value;
      console.log(`Pirmas laukas: ${pswInput1.value}, Antras laukas: ${pswInput1.value}, galutinė reikšmė: ${pswInput}`)
    }

    console.log('clicking', usernameInput.value, emailInput.value, pswInput)

    if (allInputsFilled === true) {
      axios.post('http://localhost/signup',
        {
          name: usernameInput.value,
          email: emailInput.value,
          psw: pswInput

        },
        { withCredentials: false }
      )
        .then(res => {
          console.log(res.data);
          /* window.location.href = 'login.html'; */
        });
    }

  });

}