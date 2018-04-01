function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
}

$(document).ready(function(){
  $("form#new-contact").submit(function(event){
    event.preventDefault();
    var inputtedFirstname = $("input#new-first-name").val();
    var inputtedLastname = $("input#new-last-name").val();
    var newContact = new Contact(inputtedFirstname, inputtedLastname);
    $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
  });
});
