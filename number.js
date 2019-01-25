window.onload =function(){
	document.getElementById('result').style.display = "none";
};
var url="http://numbersapi.com/";

async function get(){
var searchBox =document.getElementById("searchBox");

var num=searchBox.value+"?json";
var res=await fetch(url+num);
var resu=await res.json();
console.log(resu.text);

document.getElementById('result').innerHTML='<h1 style="text-align:center">'+resu.text+"</h1>";
document.getElementById('result').style.display="block";

}
