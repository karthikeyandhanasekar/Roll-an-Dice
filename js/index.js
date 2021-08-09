
// multiply by limit that means 100 here
//alert(guess)
var count= parseInt(0)
var target = 30
function calc()
{
    
    count+=1

    player1 = document.getElementById("player1")
    player2 = document.getElementById("player2")
    //player2
    if (count%2 == 0)
    {
        var dice2 = Math.floor(Math.random()*6) +1 

        //alert("even player2")
        player2.value =  parseInt(player2.value)+  dice2
        if (player2.value  >= target)
        {
            document.getElementById("ans").innerHTML = "Player 2 Wins"
            docu
        }
    }
    if (count%2 != 0)
    {
        //alert("odd player1")
        var dice1 = Math.floor(Math.random()*6) +1 

        player1.value =  parseInt(player1.value)+  dice1
        if (player2.value  >= target)
        {
            document.getElementById("ans").innerHTML = "Player 1 Wins"
        }


    }


    






    return false
}