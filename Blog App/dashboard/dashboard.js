import { auth,signOut,onAuthStateChanged } from "../firebase.js";

let logoutbtn = document.getElementById('logout')

const logout = ()=> {
    signOut(auth).then(() => {
        alert('logout succesfully')
      }).catch((error) => {
      });
      
}

logoutbtn.addEventListener('click', logout)

onAuthStateChanged(auth, (user) => {
    if (!user) {
        window.location.href = '../login/login.html'
    }
  });