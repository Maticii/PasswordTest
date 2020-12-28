var messagesVisible = false;
var settingNewPassword = false;
var previusPassword;
var correctPassword = "aabaa";

function getText(){  
    var password=document.getElementById("password").value; 
    var hiddenMessage=document.getElementById("hiddenMessage"); 
    var hiddenMessage2=document.getElementById("hiddenMessage2"); 


    if (password === correctPassword) {
        if (settingNewPassword === false) {
            if (messagesVisible === false) {
                alert("Access granted.");  
                hiddenMessage.style.visibility= "visible";
                waited();
                messagesVisible = true;
                clearInput();
            }
            else {
                alert("Hidden messages already shown. Hide them (type *hide*) and then try again.")
                clearInput();
            }
        }
        else {
            alert("Press the 'set new password' button.")
        }
    }

    else if (password === "*hide*") {
        if (settingNewPassword === false) {
            if (messagesVisible === true) {
                hiddenMessage.style.visibility= "hidden";
                hiddenMessage2.style.visibility= "hidden";
                alert("Messages Hidden Succesfully.")
                clearInput();
                messagesVisible = false;
            }
            else {
                alert("There are no messages to hide.")
            }
        }
        else {
            alert("Press the 'set new password' button.")
        }
    }

    else if (password === "*setNewPassword*") {
        alert("Enter your new password. Remember it!! When you're done press the Set new password button.")
        clearInput();
        document.getElementById("setPassword").style.visibility= "visible";
        settingNewPassword = true;
    }


    else {
        if (settingNewPassword === false) {
            alert("Wrong password. Try again.")
            clearInput();
        }
        else {
            alert("Press the 'set new password' button.")
        }
    }
}  

const delay = ms => new Promise(res => setTimeout(res, ms));


const waited = async () => {
  await delay(5000);
  hiddenMessage2.style.visibility= "visible";
};

function clearInput() {
    document.getElementById("password").value='';
}

function setNewPassword() {
    previusPassword = correctPassword;
    correctPassword = document.getElementById("password").value;
    if (correctPassword === previusPassword) {
        alert("Password cannot be the same. Try again.")
        clearInput();
        setNewPassword();
    }
    else {
        alert("New password set succesfully.")
        clearInput();
        document.getElementById("setPassword").style.visibility = "hidden";
        settingNewPassword=false;
    }
}
