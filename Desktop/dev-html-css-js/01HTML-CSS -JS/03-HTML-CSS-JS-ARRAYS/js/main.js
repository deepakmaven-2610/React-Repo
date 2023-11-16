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

// Array
var hobbies = ["Travel","Music","Playing","Singing"]
console.log(hobbies);
hobbies.pop();
console.log(hobbies);
hobbies.push("Studying");
console.log(hobbies);

hobbies.forEach(function(item,index)
{
    console.log("Element - ", item,index);
});

if(hobbies.indexOf("Music")>-1)
{
    console.log("Music is there");
}