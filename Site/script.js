function getText(){  
    var password=document.getElementById("number").value; 
    var hiddenMessage=document.getElementById("hiddenMessage"); 
    var hiddenMessage2=document.getElementById("hiddenMessage2"); 


    if (password === "test") {
        alert("Correct");  
        hiddenMessage.style.visibility= "visible";
        waited();
    }

    else {
            alert("Wrong password. Try again.")
        
    }
}  

const delay = ms => new Promise(res => setTimeout(res, ms));


const waited = async () => {
  await delay(5000);
  hiddenMessage2.style.visibility= "visible";
};