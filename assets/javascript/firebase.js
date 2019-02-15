var config = {
  apiKey: "AIzaSyASg0ra5CSbvY7aU7RyplRwRQQLd5Xek2Y",
  authDomain: "contact-me-e071e.firebaseapp.com",
  databaseURL: "https://contact-me-e071e.firebaseio.com",
  projectId: "contact-me-e071e",
  storageBucket: "contact-me-e071e.appspot.com",
  messagingSenderId: "1059651122846"
};
firebase.initializeApp(config);

var database = firebase.database();

$('#submitBtn').on('click', function () {
  event.preventDefault();

  var name = $('#exampleFormControlInput1').val();
  var email = $('#exampleFormControlInput2').val();
  var message = $('#exampleFormControlTextarea1').val();


  database.ref().push({
    name: name,
    email: email,
    message: message
  })

  alert('E-mail has been submitted.')

  $('#exampleFormControlInput1').val('');
  $('#exampleFormControlInput2').val('');
  $('#exampleFormControlTextarea1').val('');
})