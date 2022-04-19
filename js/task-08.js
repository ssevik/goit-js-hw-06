const form = document.querySelector('.login-form');


form.addEventListener('submit', onForm);

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


function onForm(event) {
  event.preventDefault();

  const loginForm = event.currentTarget.elements;
  const email = loginForm.email.value;
  const password = loginForm.password.value;
  const formData = {
    email,
    password
  };

   console.log(formData)
  
  if (email !== "" && password !== "")  {
    event.currentTarget.reset()
  } else {
    alert('все поля должны быть заполнены')
  }

  
  
}
