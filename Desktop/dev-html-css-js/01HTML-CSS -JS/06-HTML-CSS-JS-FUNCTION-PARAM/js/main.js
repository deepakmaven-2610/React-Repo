function getPhrase(params) {
    var l = params.phrase.length;

    if (typeof params.another !== "undefined") {
        l += params.another.length;
    }

    return l;
}

var p1 = "This is long text";
var p2 = "This is a short text";

var computed = getPhrase({ phrase: p1, another: p2 });
console.log(computed);

function missingnum(numbers)
{
    var missing = -1;

    for(var i = 0; i<=numbers.length-1; i++)
    {
        if(numbers.indexOf(i) === -1)
        {
            missing=i;
        }

    }
    return missing;
}

var numbers=[3,5,6,7,8];
console.log(missingnum(numbers));