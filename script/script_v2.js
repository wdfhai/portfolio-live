$("#buttonAboutMe").on('click', runAboutMe)
$("#buttonConnectWithMe").on('click', runConnectWithMe)
$("#buttonViewMyPortfolio").on('click', runViewMyPortfolio)
$("#buttonExtraStuff").on('click', runExtraStuff)
$("#submitButton").on('click', runContactForm)

function runAboutMe (){
    $("#buttonAboutMe").addClass('pressed');
    $("#buttonConnectWithMe").removeClass('pressed');
    $("#buttonViewMyPortfolio").removeClass('pressed');
    $("#buttonExtraStuff").removeClass('pressed');
    $("#divWelcome").attr('style', 'display: none');
    $("#divAboutMe").attr('style', 'display: block');
    $("#divConnectWithMe").attr('style', 'display: none');
    $("#divViewMyPortfolio").attr('style', 'display: none');
    $("#divExtraStuff").attr('style', 'display: none');
};

function runConnectWithMe (){
    $("#buttonAboutMe").removeClass('pressed');
    $("#buttonConnectWithMe").addClass('pressed');
    $("#buttonViewMyPortfolio").removeClass('pressed');
    $("#buttonExtraStuff").removeClass('pressed');
    $("#divWelcome").attr('style', 'display: none');
    $("#divAboutMe").attr('style', 'display: none');
    $("#divConnectWithMe").attr('style', 'display: block');
    $("#divViewMyPortfolio").attr('style', 'display: none');
    $("#divExtraStuff").attr('style', 'display: none');
};

function runViewMyPortfolio (){
    $("#buttonAboutMe").removeClass('pressed');
    $("#buttonConnectWithMe").removeClass('pressed');
    $("#buttonViewMyPortfolio").addClass('pressed');
    $("#buttonExtraStuff").removeClass('pressed');
    $("#divWelcome").attr('style', 'display: none');
    $("#divAboutMe").attr('style', 'display: none');
    $("#divConnectWithMe").attr('style', 'display: none');
    $("#divViewMyPortfolio").attr('style', 'display: block');
    $("#divExtraStuff").attr('style', 'display: none');
};

function runExtraStuff (){
    $("#buttonAboutMe").removeClass('pressed');
    $("#buttonConnectWithMe").removeClass('pressed');
    $("#buttonViewMyPortfolio").removeClass('pressed');
    $("#buttonExtraStuff").addClass('pressed');
    $("#divWelcome").attr('style', 'display: none');
    $("#divAboutMe").attr('style', 'display: none');
    $("#divConnectWithMe").attr('style', 'display: none');
    $("#divViewMyPortfolio").attr('style', 'display: none');
    $("#divExtraStuff").attr('style', 'display: block');
};

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
