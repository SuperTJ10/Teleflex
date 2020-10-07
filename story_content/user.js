function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5r4q96aPz4t":
        Script1();
        break;
      case "5hdLN3NYEmN":
        Script2();
        break;
      case "5Vo7HNyNC9b":
        Script3();
        break;
      case "6GXMniwJIbM":
        Script4();
        break;
      case "6nfOiJ7rxTO":
        Script5();
        break;
      case "5nmhEcDkPRw":
        Script6();
        break;
      case "5zB5hS1MMIW":
        Script7();
        break;
      case "66fFAbqlaP0":
        Script8();
        break;
      case "6FeRCAgm2nG":
        Script9();
        break;
  }
}

function Script1()
{
  var p=GetPlayer();
p.SetVar("Chosenword1", p.GetVar("Chosenword1").toUpperCase());
}

function Script2()
{
  var p=GetPlayer();
p.SetVar("Chosenword2", p.GetVar("Chosenword2").toUpperCase());
}

function Script3()
{
  var p=GetPlayer();
p.SetVar("Chosenword3", p.GetVar("Chosenword3").toUpperCase());
}

function Script4()
{
  var p=GetPlayer();
p.SetVar("Chosenword4", p.GetVar("Chosenword4").toUpperCase());
}

function Script5()
{
  var p=GetPlayer();
p.SetVar("Chosenword5", p.GetVar("Chosenword5").toUpperCase());
}

function Script6()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script7()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
 
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
},
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

function Script8()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycby0HOgttuGvcZAfUREYDOGmJ3CU5f34FdWywRgUrr6xjtK9Cpg/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Chosenword1" : player.GetVar("Chosenword1")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "Language" : player.GetVar("Language"),
 "Chosenword1" : player.GetVar("Chosenword1"),
 "Chosenword2" : player.GetVar("Chosenword2"),
 "Chosenword3" : player.GetVar("Chosenword3"),
 "Chosenword4" : player.GetVar("Chosenword4"),
 "Chosenword5" : player.GetVar("Chosenword5")
}
}

function Script9()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycby0HOgttuGvcZAfUREYDOGmJ3CU5f34FdWywRgUrr6xjtK9Cpg/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Chosenword1" : player.GetVar("Chosenword1")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "Language" : player.GetVar("Language"),
 "Chosenword1" : player.GetVar("Chosenword1"),
 "Chosenword2" : player.GetVar("Chosenword2"),
 "Chosenword3" : player.GetVar("Chosenword3"),
 "Chosenword4" : player.GetVar("Chosenword4"),
 "Chosenword5" : player.GetVar("Chosenword5")
}
}

