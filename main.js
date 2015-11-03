'use strict';

(function(){

  $('.add').click(addContact);
  $('tbody').on('click', '.editContact', saveEdits);
  $('tbody').on('click', '.deleteContact', deleteContact);

  var entries = JSON.parse(localStorage.entries || "[]");
  redrawList();
  
  function redrawList() {
    $('#contactList').empty();

    var entryElements = entries.map(function(entries) {
      var $tr = $('<tr>');

      var $nameTd = $('<td>').text(entries.name).prop('contenteditable', true).attr('id', 'inputName').addClass('inputName');
      var $emailTd = $('<td>').text(entries.email).prop('contenteditable', true).attr('id', 'inputEmail').addClass('inputEmail');
      var $phoneTd = $('<td>').text(entries.phone).prop('contenteditable', true).attr('id', 'inputPhone').addClass('inputPhone');
      var $twitterTd = $('<td>').text(entries.twitter).prop('contenteditable', true).attr('id', 'inputTwitter').addClass('inputTwitter');
      
      var $saveTd = $('<td><a href="#">save edits</a></td>');
      $saveTd.children().addClass('editContact');
      
      var $deleteTd = $('<td><a href="#">delete entry</a></td>');
      $deleteTd.children().addClass('deleteContact');
      
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
    
    var $nameTd = $('<td>').addClass('nameOfContact').prop('contenteditable', true).addClass('inputName');
    $nameTd.text(inputValues.name).attr('id', 'inputName');
    console.log('name td:', $nameTd);

    var $emailTd = $('<td>').addClass('emailOfContact').prop('contenteditable', true).addClass('inputEmail');
    $emailTd.text(inputValues.email).attr('id', 'inputEmail');
    console.log('email td:', $emailTd);  

    var $phoneTd = $('<td>').addClass('phoneOfContact').prop('contenteditable', true).addClass('inputPhone');
    $phoneTd.text(inputValues.phone).attr('id', 'inputPhone');
    console.log('phone td:', $phoneTd); 

    var $twitterTd = $('<td>').addClass('twitterOfContact').prop('contenteditable', true).addClass('inputTwitter');
    $twitterTd.text(inputValues.twitter).attr('id', 'inputTwitter');
    console.log('twitter td:', $twitterTd); 

    var $saveTd = $('<td><a href="#">save edits</a></td>')
    $saveTd.children().addClass('editContact')

    var $deleteTd = $('<td><a href="#">delete entry</a></td>');
    $deleteTd.children().addClass('deleteContact');

    $tr.append($nameTd, $emailTd, $phoneTd, $twitterTd, $saveTd, $deleteTd);      

    $('#contactList').append($tr);
  }

  function storeLocal(inputValues) {
    var informationEntry = inputValues;
    entries.push(informationEntry);
    var informationEntryStr = JSON.stringify(entries);
    localStorage.entries = informationEntryStr;
  }

  function saveEdits(event) {
    console.log("saving edits");

    var entries = JSON.parse(localStorage.entries);

    var $target = $(event.target);
    var $targetRow = $target.closest('tr');
    console.log("target row", $targetRow);

    var index = $targetRow.index(); 

    var inputValues = {
      'name': $targetRow.find($('.inputName')).text(), 'email': $targetRow.find($('.inputEmail')).text(), 'phone': $targetRow.find($('.inputPhone')).text(), 'twitter': $targetRow.find($('.inputTwitter')).text()
    };
    entries[index] = inputValues;
    console.log('inputValues', inputValues);
    var informationEntryStr = JSON.stringify(entries);
    localStorage.entries = informationEntryStr;
  }
  

  function deleteContact() {
    console.log('deleting contact');
    var entries = JSON.parse(localStorage.entries);

    var $target = $(event.target);
    var $targetRow = $target.closest('tr');
    console.log("target row", $targetRow);

    var index = $targetRow.index(); 
    $targetRow.remove();
    entries.splice(index, 1);
    var informationEntryStr = JSON.stringify(entries);
    localStorage.entries = informationEntryStr;

  }







})();