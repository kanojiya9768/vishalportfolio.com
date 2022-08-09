const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDnJTqyRaIao5oGAhP00HmZ2vE9CTCsBpU",
  authDomain: "vishalportfolio-e5d4b.firebaseapp.com",
  databaseURL: "https://vishalportfolio-e5d4b-default-rtdb.firebaseio.com",
  projectId: "vishalportfolio-e5d4b",
  storageBucket: "vishalportfolio-e5d4b.appspot.com",
  messagingSenderId: "547693392796",
  appId: "1:547693392796:web:2bc5657863517ac482ce59",
  measurementId: "G-NX05ZDMFBS",
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

document.getElementById("register").addEventListener("submit", signup);


//signup user
function signup(e) {
  e.preventDefault();

  //get email and password
  const email = document.getElementById("email").value;
  const password = document.getElementById("psw").value;
  const cpassword = document.getElementById("cpsw").value;

  if(password === cpassword){
    firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((result) => {
      // Signed up successfully
      alert("SIGN-UP successfull");
    window.location.assign('index.html')
      // ...
    })
    .catch((error) => {
      let errorMessage = error.message;
      console.log(errorMessage);
      alert(errorMessage);
    });
  }else{
    alert("Both Passwords Must be Same..!Try Again")
  }
}
