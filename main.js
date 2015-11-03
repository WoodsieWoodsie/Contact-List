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

    var inputValues = {
      'name': name, 'email': email, 'phone': phone, 'twitter': twitter
    };
    
    console.log('input values:', inputValues);

    storeLocal(inputValues);
    postContact(inputValues);
  }

  function postContact(inputValues) {
    var $tr = $('<tr>');
    
    var $nameTd = $('<td>').addClass('nameOfContact');
    $nameTd.text(inputValues.name);
    console.log('name td:', $nameTd);

    var $emailTd = $('<td>').addClass('emailOfContact');
    $emailTd.text(inputValues.email);
    console.log('email td:', $emailTd);  

    var $phoneTd = $('<td>').addClass('phoneOfContact');
    $phoneTd.text(inputValues.phone);
    console.log('phone td:', $phoneTd); 

    var $twitterTd = $('<td>').addClass('twitterOfContact');
    $twitterTd.text(inputValues.twitter);
    console.log('twitter td:', $twitterTd);  

    $tr.append($nameTd, $emailTd, $phoneTd, $twitterTd);      
    console.log($tr);

    $('#contactList').append($tr);

  }

  function storeLocal(inputValues) {
    var informationEntry = inputValues;
    entries.push(informationEntry);
    var informationEntryStr = JSON.stringify(entries);
    localStorage.entries = informationEntryStr;
  }








})();