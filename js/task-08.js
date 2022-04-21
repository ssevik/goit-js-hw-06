// const form = document.querySelector('.login-form');


// form.addEventListener('submit', onForm);

// function onForm(event) {
//   event.preventDefault();

//   const loginForm = event.currentTarget.elements;
//   const email = loginForm.email.value;
//   const password = loginForm.password.value;
//   const formData = new FormData(event.currentTarget);

//   formData.forEach((email, password) => {
//     console.log(email, password);
//   })
  
//   if (email === '' || password === '') {
//     alert('все поля должны быть заполнены')
//   }

//   event.currentTarget.reset();
// }

const form = document.querySelector('.login-form');

form.addEventListener('submit', onForm);

function onForm(event) {
    event.preventDefault();

    const loginForm = event.currentTarget.elements;
    const email = loginForm.email.value;
    const password = loginForm.password.value;

    if(form.elements.email.value === '' || form.elements.password.value === '') {
        return alert('все поля должны быть заполнены')
    }

    const formData = {
        email,
        password,
    };

    console.log(formData);

    form.reset();

};