var btn = document.getElementById("go-button");

function buttonClicked()
{
    console.log("Buttton Clicked");
    btn.removeEventListener("click",buttonClicked);
    document.getElementById("text").innerHTML = "Dont Click it";
    console.log(document.getElementById("text").innerHTML);
}

btn.addEventListener("click",buttonClicked);

function backButton()
{
    console.log("Back Button");
}