import { auth,createUserWithEmailAndPassword,onAuthStateChanged } from "../firebase.js"


let signupEmail = document.getElementById('email')
let signupPass = document.getElementById('password')
let signupbtn = document.getElementById('signup-btn')

const signup = ()=> {
    createUserWithEmailAndPassword(auth, signupEmail.value, signupPass.value)
  .then((userCredential) => {
    const user = userCredential.user;
    alert('Successfully Signup')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
} 

signupbtn.addEventListener('click' , signup)


  onAuthStateChanged(auth, (user) => {
    if (user) {
        window.location.href = '../dashboard/dashboard.html'
    }
  });