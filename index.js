function instagram (){
    alert("Redirecting you to Instagram");
    location.href="https://www.instagram.com/mi_vedantkale/"
}

function telegram(){
    alert("Redirecting you to Telegram");
    location.href="https://web.telegram.org/k/#777000"
}

function youtube(){
    alert("Redirecting you to Youtube");
    location.href="https://www.youtube.com/channel/UC9-UQutoPne4vJIuPSDOyPA"
}

function SendMessage(){
    // var link = "mailto:vedantkale8114@example.com"
    // + "?cc=myCCaddress@example.com"
    // + "&subject=" + encodeURIComponent("This is my subject")
    // + "&body=" + encodeURIComponent(document.getElementById('HMP').value)

    // window.location.href=link;
    var name=document.getElementById("name").value;
    var hmp=document.getElementById("HMP").value;
    var mobile=document.getElementById("cont").value;
    var date=document.getElementById("date").value;
    var msg=document.getElementById("specialReq").value;
    if(name==""||hmp==""||mobile==""||date==""||msg==""){
        alert("Please enter data in all fields.")
    }
    else{
        alert("Message has been sent. We will notify you to your mobile number.");

    }
}