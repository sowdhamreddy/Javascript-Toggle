var count=1;
document.getElementById("outer-div").addEventListener("click",function(e)
{
    if(count%2!=0)
    {
    document.getElementById("body").style.backgroundColor="black";
	document.getElementById("heading").style.color="white";
	document.getElementById("inner-div").style.transition = "0.4s";
	document.getElementById("inner-div").style.marginLeft = "30px";
    }

    else 
    {
    	document.getElementById("body").style.backgroundColor="white";
		document.getElementById("heading").style.color="black";
		document.getElementById("inner-div").style.transition = "0.4s";
		document.getElementById("inner-div").style.margin = "0px";
    }

    ++count;

});