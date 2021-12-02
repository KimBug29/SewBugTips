//hambuger menu;
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

function contactUsFormValidate(form){

//var form1 = document.forms[form];
//alert("form1::"+form)
var contactName = document.getElementById("contactName").value;
var contactEmail = document.getElementById("contactEmail").value;

if(contactName == null || contactName == ''){
alert("Please provide your name");
return false;
}
if(contactEmail == null || contactEmail == ''){
alert("Please provide your Email");
return false;
}

return true;
//alert("Thank you "+contactName+" for contacting us. We will get back to you at "+contactEmail);

}

function thanksFunction() {
const queryString = window.location.search;
//console.log(queryString);
//alert("in Thanks");
const urlParams = new URLSearchParams(queryString);
var urlContactName = urlParams.get('name');
var urlContactEmail = urlParams.get('email');
document.getElementById("thanksText").innerHTML = "Thank you <strong>"+urlContactName+"</strong> for your message. We will get back to you at "+urlContactEmail;
}