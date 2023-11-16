var btn = document.getElementById("go-button");

function buttonClicked()
{
    console.log("Buttton Clicked");
    var customText = document.getElementsByClassName("my-input");
    var textArea = document.getElementsByClassName("my-textarea");

    var results = document.getElementById("text");


    results.innerHTML = "Hello! " + customText[0].value + "<br />";

    results.innerHTML += "Message : " + textArea[0].value;
}

btn.addEventListener("click",buttonClicked);