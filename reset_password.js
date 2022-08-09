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

document.getElementById("Forgot").addEventListener("submit", reset_password);

//reset password
function reset_password(e) {
  e.preventDefault();

  //get email and password
  const email = document.getElementById("email").value;


  firebase
    .auth()
    .sendPasswordResetEmail(email)
    .then(() => {
      // Password reset email sent!
      alert(
        "please check your mail we have sent u link for reset your password..! Thank you."
      );
      window.location.assign('https://kanojiya9768.github.io/vishalportfolio.com/index.html')
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
      alert('There is no user record corresponding to this email id. pls Enter correct email id..!')
      console.log(errorMessage);
    });
}
