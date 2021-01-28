$("#submitButton").on('click', runContactForm)

function runContactForm (event) {
    event.preventDefault();
    const name = $("#name")[0].value;
    const company = $("#company")[0].value;
    const email = $("#email")[0].value;
    const text = $("#textarea")[0].value;
    if (name === null || name === ""){
        alert("You have not entered a name");
        return;
    } else if (email === null || email === ""){
        alert("You have not entered an email");
        return;
    } else if (text === null || text === ""){
        alert("You have not entered a message");
        return;
    };
    openContactFormModal(name, company, email, text);
}

function openContactFormModal (name, company, email, text){
    $("#modalName")[0].textContent = name;
    $("#modalCompany")[0].textContent = company || "n/a";
    $("#modalEmail")[0].textContent = email;
    $("#modalMessage")[0].textContent = text;
    $('#contactFormModal').modal('show')
    clearContactForm();
}

function clearContactForm (){
    $("#name")[0].value = null;
    $("#company")[0].value = null;
    $("#email")[0].value = null ;
    $("#textarea")[0].value = null;
}