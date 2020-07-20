/**
 * 
 * Library for Google Firebase (HTML Javascript / Script)
 * Provided by GitHub User - wlw1106 [Email: wlwict2019@gmail.com]
 * 
 * Tips:
 * 
 *  1. All should be put in HTML tag - <script></script>;
 * 
 * 
 *  2. [x] indicate your firebase tag while [y] and "/" indicate your data under firebase tag [x];
 * 
 * 
 *  3. Need to included TWO firebase library and ONE JQuery cdn library (Provided below).
 *  
 *      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
 * 
 *      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
 * 
 * 	    <script src="https://www.gstatic.com/firebasejs/4.7.0/firebase.js"></script>
 *          
 *          (Place in anywhere in HTML Tag <html></html>)
 * 
 * 
 * Copyright© 2020 All rights reserved.
 * 
 */






// 0. firebase configuration (Personal)
var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};  // ** Copy your own and replace

firebase.initializeApp(config); // initialize the Firebase

var database = firebase.database(); // Set Variable to access easier
var firebaseCollection = database.ref().child(""); // ** Optional



// 1. Update

database.ref("/").update({[x]: "[y]"}); // A JSON String data



// 2. Get

database.ref("/").on('value', e => {
    var x = (e.val());  // Set a local variable (e.val = e.value = [y])
    // or
    document.getElementById("").innerHTML = (e.val());  // Use the data in HTML directly

    database.ref("/").off();    // Important !
});



// 3. Remove

database.ref("/").remove(); // Remember the data cannot be recovered !
