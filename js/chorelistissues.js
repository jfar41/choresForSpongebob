//Your web app's firebase configuration
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

//Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//Code down below
const rootRef = firebase.database().ref("chores/");

// Task 4 ---------------
//on is an event listener and "value" is the name of this event
//two callbacks in 'on' function. One when they give you 'snapshot'
//of entire data tree

rootRef.on("value",

    (snapshot) => {
        const listTableBody = document.getElementById("list-table-body");

        //clear all table rows first
        listTableBody.textContent = ""

        snapshot.forEach((child) => {
            issue = child.val();
            console.log(issue);
            var row = document.createElement("tr");
            row.innerHTML = "<td>" + issue.importance + "</td><td>" + issue.description + "</td><td>" + 

               "<select onchange='updateIssue(\"" + child.key + "\", this.value)'>" +
        "<option value='no'" + (issue.resolved=="no" ? " selected" : "") + ">no</option>" +
        "<option value='yes'" + (issue.resolved=="yes" ? " selected" : "") + ">yes</option>" +
      "</select>"

            + "</td>" +
            "<td><input type='button' class='btn btn-danger' value='X' onclick='deleteIssue(\"" + child.key + "\")'/></td>";

            listTableBody.append(row);
            //#2 line 34-46 commented out when testing getting val
        });
    },

    (error) => {
        console.log("Error: " + error.code);
    }
);


// Task 5 ------------------------------------------

function addNewChore() {
    const importance = document.getElementById("importance-dropdown").value;
    const description = document.getElementById("description-textfield").value;
    const resolved = document.getElementById("resolved-dropdown").value;
  
    if (description.length == 0) {
      alert("Description cannot be blank!");
      return;
    }
  
    rootRef.push ({
      description: description,
      resolved: resolved,
      importance: importance
    });
  
    document.getElementById("description-textfield").value="";
}
  
// Task 6 ------------------------------------------

//For testing
// function updateIssue(issueKey, newResolvedValue) {
//   alert("update function for issue key: " + issueKey + "newResolveValue: " + newResolvedValue);
// }

//To actually change databaseURL
function updateIssue(issueKey, newResolvedValue) {
var recordRef = firebase.database().ref("chores/" + issueKey);

recordRef.update ({
    "resolved": newResolvedValue
})
}


// Task 7 ------------------------------------------

function deleteIssue(issueKey) {
    if (confirm("Are you sure?")) {
      var recordRef = firebase.database().ref("chores/" + issueKey);
  
      recordRef.remove()
         .catch(function(error) {
           alert("Delete failed: " + error.message)
         });
    }
}

// Utility function to encode special HTML characters so that the
// web browser does not treat them as HTML tags
// but as literal characters

function encodeHtml(str) {
str = str.replace(/&/g, '&amp;');
str = str.replace(/</g, '&lt;');
str = str.replace(/>/g, '&gt;');
str = str.replace(/ /g, '&nbsp;');
return str;
}
