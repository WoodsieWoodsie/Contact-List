'use strict';

(function(){

  $('.add').click(addContact);
  $('tbody').on('click', '.editContact', saveEdits);

  var entries = JSON.parse(localStorage.entries || "[]");
  redrawList();
  
  function redrawList() {
    $('#contactList').empty();

    var entryElements = entries.map(function(entries) {
      var $tr = $('<tr>');

      var $nameTd = $('<td>').text(entries.name).prop('contenteditable', true);
      var $emailTd = $('<td>').text(entries.email).prop('contenteditable', true);
      var $phoneTd = $('<td>').text(entries.phone).prop('contenteditable', true);
      var $twitterTd = $('<td>').text(entries.twitter).prop('contenteditable', true);
      
      var $saveTd = $('<td><a href="#">save edits</a></td>');
      $saveTd.children().addClass('editContact');
      
      var $deleteTd = $('<td><a href="#">delete entry</a></td>');
      $deleteTd.children().addClass('delete');
      
      $tr.append($nameTd, $emailTd, $phoneTd, $twitterTd, $saveTd, $deleteTd);
    
      return $tr;
    });

    $('#contactList').append(entryElements);  
  }
  
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
    
    var $nameTd = $('<td>').addClass('nameOfContact').prop('contenteditable', true);
    $nameTd.text(inputValues.name);
    console.log('name td:', $nameTd);

    var $emailTd = $('<td>').addClass('emailOfContact').prop('contenteditable', true);
    $emailTd.text(inputValues.email);
    console.log('email td:', $emailTd);  

    var $phoneTd = $('<td>').addClass('phoneOfContact').prop('contenteditable', true);
    $phoneTd.text(inputValues.phone);
    console.log('phone td:', $phoneTd); 

    var $twitterTd = $('<td>').addClass('twitterOfContact').prop('contenteditable', true);
    $twitterTd.text(inputValues.twitter);
    console.log('twitter td:', $twitterTd); 

    var $saveTd = $('<td><a href="#">save edits</a></td>')
    $saveTd.children().addClass('editContact')

    var $deleteTd = $('<td><a href="#">delete entry</a></td>');
    $deleteTd.children().addClass('delete');

    $tr.append($nameTd, $emailTd, $phoneTd, $twitterTd, $saveTd, $deleteTd);      

    $('#contactList').append($tr);
  }

  function storeLocal(inputValues) {
    var informationEntry = inputValues;
    entries.push(informationEntry);
    var informationEntryStr = JSON.stringify(entries);
    localStorage.entries = informationEntryStr;
  }

  function saveEdits() {
    console.log("saving edits");
    var $editedName = $('.name');
    var nameEdits = $editedName.text();
    entries.splice(0, 1, nameEdits);
    var userEditsStr = JSON.stringify(entries)
    localStorage.entries = userEditsStr;
  }

  function deleteEntry() {

  }







})();