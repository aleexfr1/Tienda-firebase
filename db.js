import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyD-v1SJHuDURWeFkP5dQ66g00VpiVAHE44",
  authDomain: "vue-cli-tienda.firebaseapp.com",
  projectId: "vue-cli-tienda",
  storageBucket: "vue-cli-tienda.appspot.com",
  messagingSenderId: "186360982328",
  appId: "1:186360982328:web:de12639b481c064d2bafcd",
  measurementId: "G-0KZVD0KTHM"
  };


export const db = firebase
.initializeApp(firebaseConfig)
.firestore()


const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }


db.settings({ timestampsInSnapshots: true })

export default {
auth: firebase.auth(),

// Login con Google
loginGoogle() { 
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error){
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = error.credential;
    console.log(errorCode, errorMessage, email, credential);
    })
},

 // Login con Facebook
loginFacebook() {
  var provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider)
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error){
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = error.credential;
    console.log(errorCode, errorMessage, email, credential);
    })
},

logout() { // Cierre de sesion
  firebase.auth().signOut()
  .then(function() {
    console.log("Su sesion se ha cerrado correctamente");
  })
  .catch(function(error) {
    console.log(error)});
}
}