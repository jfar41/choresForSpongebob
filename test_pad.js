// Your web app's Firebase configuration
// Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 var firebaseConfig = {
  apiKey: "AIzaSyAaNFwcji14luq7WDvPVcbejPvh_jwWxxo",
  authDomain: "jaychorelist.firebaseapp.com",
  databaseURL: "https://jaychorelist-default-rtdb.firebaseio.com",
  projectId: "jaychorelist",
  storageBucket: "jaychorelist.appspot.com",
  messagingSenderId: "501634188709",
  appId: "1:501634188709:web:135c1c8c19e2534583544c",
  measurementId: "G-0QX7SSND16"
};
 
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
 
// Paste the web app's configuration above this line
// Our code starts below

//Get a ROOT reference to issue here (called rooRef bc it's 
//refering to root node at start of data tree)
const rootRef = firebase.database().ref("chores/");

// Task 3 ------------------------------------------
//#1 test with launchpad (test_pad.html) to see if below two get added to firebase

// rootRef.push ({
//   description: "Logo does not show up on screen 5",
//   resolved: "yes",
//   severity: "minor"
// });

// rootRef.push ({
//   description: "Screen flashes uh huh honney",
//   resolved: "no",
//   severity: "moderate"
// });
//Once succesful, can comment out above 2 push


// Task 6 ------------------------------------------

// var recordRef = firebase.database().ref("issues/change-me");
//
// recordRef.update ({
//    "resolved": "yes"
// });

// Task 7 ------------------------------------------

// var recordRef = firebase.database().ref("issues/delete-me");

// recordRef.remove()
//   .catch(function(error) {
//     alert("Delete failed: " + error.message)
//   });
