
var MY_APIKEY
var MY_DATABASEURL
// require('dotenv').config()

// export default async (request, context) => {
//     MY_APIKEY = Netlify.env.get("MY_APIKEY");
//     MY_DATABASEURL = Netlify.env.get("MY_DATABASEURL");

// // };


var deviceID = "000000001"
var firebaseConfig = {
    // apiKey: MY_APIKEY,
    databaseURL: "https://clicker-io-50ccb-default-rtdb.firebaseio.com/",
    projectId: "clicker-io-64f27"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
function clickEvent() {
    console.log("click event");
    event.preventDefault();
    firebase.database().ref(deviceID).set({
        clickBool: true,

    });

    // var button = document.getElementById('#myButton');
    // button.setAttribute('disabled', '');
}
