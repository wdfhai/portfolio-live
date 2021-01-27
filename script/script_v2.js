$("#buttonAboutMe").on('click', runAboutMe)
$("#buttonConnectWithMe").on('click', runConnectWithMe)
$("#buttonViewMyPortfolio").on('click', runViewMyPortfolio)
$("#buttonExtraStuff").on('click', runExtraStuff)

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