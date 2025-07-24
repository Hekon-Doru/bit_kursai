import axios from 'axios';

console.log('Login ready');

const loginForm = document.querySelector('[data-login]');
const logoutForm = document.querySelector('[data-logout]');
const signupForm = document.querySelector('[data-signup]');

//alertai
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

if (logoutForm) {

  const logoutButton = logoutForm.querySelector('#logout');

  logoutButton.addEventListener('click', _ => {
    axios.post(
      'http://localhost/logout',
      {},
      { withCredentials: true }
    )
      .then(res => {
        window.location.href = 'http://localhost';
      });
  });
}


if (loginForm) {

  const emailInput = loginForm.querySelector('[name="email"]');
  const pswInput = loginForm.querySelector('[name="password"]');
  const loginButton = loginForm.querySelector('#login');
  const signupButton = loginForm.querySelector('#signup');
  const alertTrigger = loginForm.getElementById('login')


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
      if (!res.data.success) {
        /* alertTrigger.innerText = res.data.message; */
        console.log('Didnt log in')
      } else {
        console.log('Did log in')
        /* alertTrigger.innerText = res.data.message; */
        setTimeout(_ => {
          window.location.href = 'http://localhost';
        }, 1000);
      }
    })
     /*  .then(res => {
      console.log('res.data neveikia', res.data)
      console.log(res.data.message, 'test');
      if (!res.data.success) {
        if (alertTrigger) {
          alertTrigger.addEventListener('click', () => {
            appendAlert(res.data.message, 'warning')
          });
        }

      } else {

        if (alertTrigger) {
          alertTrigger.addEventListener('click', () => {
            appendAlert(res.data.message, 'warning')
          })
        }
        console.log('res.data.message neveikia', res.data.message);
        window.location.href = 'http://localhost/profile';
      };
    }) */
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
        window.location.href = 'http://localhost/signup';
      })
  });


}



if (signupForm) {

  const usernameInput = signupForm.querySelector('[name="username"]');
  const emailInput = signupForm.querySelector('[name="email"]');
  const pswInput1 = signupForm.querySelector('[name="password1"]');
  const pswInput2 = signupForm.querySelector('[name="password2"]');
  const loginButton = signupForm.querySelector('#login');
  const signupButton = signupForm.querySelector('#signup');
  const alertTrigger = signupForm.getElementById('signup')


  //logino mygtukas
  loginButton.addEventListener('click', _ => {
    window.location.href = 'http://localhost/login';
  });

  //laikini letai

  let pswInput;

  signupButton.addEventListener('click', _ => {
    //validationas ar abu laukai vienodi.
    console.clear();
    // nuclearinam console kad matytume ką gaunam
    let allInputsFilledCorrect;
    let emailInputFilledCorrect;
    let email = emailInput.value;

    //emailo dalis
    let regex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;

    if (regex.test(email)) {
      emailInputFilledCorrect = true;
    } else {
      emailInputFilledCorrect = false;
    }
    console.log(`Emailas užpildytas teisingai: ${emailInputFilledCorrect}`)

    //pasitikrinam kas gaunasi praėjus koda

    if (usernameInput.value &&
      emailInput.value &&
      pswInput1.value &&
      pswInput2.value) {
      allInputsFilledCorrect = true;
    } else {
      allInputsFilledCorrect = false;
    }
    console.log(`Užpildyti visi laukai: ${allInputsFilledCorrect}`)


    if (pswInput1.value === pswInput2.value && pswInput1.value !== '' && pswInput2.value !== '') {
      pswInput = pswInput1.value;
      /* console.log(pswInput1.value); */
      console.log(`Slaptažodžia: sutampa`)
    } else {
      console.log(`Slaptažodžiai: neįvesti`)
    }



    if (allInputsFilledCorrect === true && emailInputFilledCorrect === true) {
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

        });
    } else {


      if (alertTrigger) {
        alertTrigger.addEventListener('click', () => {
          appendAlert(res.data.message, res.data.type)
        })
      }
    }

  });

}