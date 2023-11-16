function saySomething(phrase)
{
    console.log("You said : ", phrase);
}

var p = "How are you";
saySomething(p);

function getSomething(phrase)
{
    var l = phrase.length;
    return l;
}

var thisLength = getSomething(p);
console.log(thisLength);

function multipleparam(phrase,another)
{
    var l = phrase.length;
    if(typeof another !== "undefined")
    {
        l+=another.length;
    }
    return l;
}

var a1 = "hello how are you aaff";
var paramlength = getSomething(p,a1);
console.log(paramlength);