var welcome_msg = "this is the welcome msg";
var age = 12;
var exactAge = 12.1;
alert(welcome_msg);
alert(exactAge-age);
alert("This is the alert");
console.log("This is log");

var isPremiumUser = false;
if(isPremiumUser)
{
    console.log("Thanks for being our premium user");
}
else
{
    console.log("Please become our premium user");
}

var age =20;
if(age<1)
{
    console.log("You are a baby");
}
else if(age<10)
{
    console.log("You are a Kid");
}
else
{
    console.log("You are an adult");
}

for(var i = 0; i<2; i++)
{
    console.log("Hi this is your for loop" + i);
}

function myName(name,agee)
{
    console.log("Hello",name,"your age is ",agee);
}
myName("AA",18);
myName("BB",45);