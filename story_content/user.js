window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script11 = function()
{
  let player = GetPlayer();


setTimeout( actionMotion , 2600);

var count = player.GetVar("Open_FB");

function actionMotion () {
count++;
	player.SetVar("Open_FB",count);
	
}

console.log(count);
}

};
