import { auth,signInWithEmailAndPassword,onAuthStateChanged } from "../firebase.js"

let loginEmail = document.getElementById('email')
let loginPass = document.getElementById('password')
let loginbtn = document.getElementById('loginBtn')

const login = ()=> {
    signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    const user = userCredential.user;
    alert('Login Successfully')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
}

loginbtn.addEventListener('click', login)

onAuthStateChanged(auth, (user) => {
    if (user) {
        window.location.href = '../dashboard/dashboard.html'
    }
  });

  