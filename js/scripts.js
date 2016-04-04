function Contact (first, last){
  this.firstName = first;
  this.lastName = last;
};

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

$('#contact').submit(function (event){
event.preventDefault();
 var firstName = $('#firstName').val();
 var lastName = $('#lastName').val();

 var newContact = new Contact(firstName, lastName);

$('ul').empty().append('<li>' + newContact.fullName() + '</li>');



});
