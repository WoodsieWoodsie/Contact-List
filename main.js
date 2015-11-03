'use strict';

(function(){

  $('.add').click(addContact);

  var entries = JSON.parse(localStorage.entries || "[]");

  function addContact() {
    
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    console.log('name:', name)
    nameInput.value = '';

    var emailInput = document.getElementById('email');
    var email = emailInput.value;
    console.log('email:', email);
    emailInput.value = '';

    var phoneInput = document.getElementById('phone');
    var phone = phoneInput.value;
    console.log('phone:', phone);
    phoneInput.value = '';

    var twitterInput = document.getElementById('twitter');
    var twitter = twitterInput.value;
    console.log('twitter:', twitter);
    twitterInput.value = '';
  }











})();