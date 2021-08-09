
var guess = Math.floor(Math.random()*100) +1 
// multiply by limit that means 100 here
//alert(guess)

function calc()
{
    if (document.getElementById("number").value === '')
    {
        document.getElementById("ans").innerHTML = "Given an number"
        return false

    }

    var n= parseInt( document.getElementById("number").value)
    
    if ( n > 100 && n <=0)
    {
    document.getElementById("ans").innerHTML = "Give an valid number bw 1 and 100"
        return false
    }
    else if (n === guess)
    document.getElementById("ans").innerHTML = "Awesome ! You got an lucky number  &#128526"
    else if (n > guess)
    document.getElementById("ans").innerHTML = "So close ! Try giving lesser number &#128517"
    else if (n < guess)
    document.getElementById("ans").innerHTML = "So close ! Try giving greater number"

    else
    document.getElementById("ans").innerHTML = "It ok , Don't Give Up."



    return false
}