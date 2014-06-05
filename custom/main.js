elementToChange = document.getElementsByTagName("body")[0];
elementToChange.style.cursor = "url('http://www.aeche.eu/cursor/Arrow.cur'), auto";
//document.body.style.cursor = "http://wiki-devel.sugarlabs.org/images/e/e2/Arrow.cur";
init();
var web = document.getElementById('buton_web');
var chat = document.getElementById('buton_chat');
var story = document.getElementById('buton_story');
var closer = document.getElementById('buton_close');

function openRightSidePanel()
{
	//if(document.getElementById("rightSide").style.right === '0px')
	if(reading === false)
	{
	document.getElementById("rightSide").style.right= '0px';
	reading = true;
	}
	if(reading === true)
	{
	web.onclick = function(){document.getElementById("iframe").src = "http://www.aeche.eu/Index.html"};
	chat.onclick = function(){document.getElementById("iframe").src = "https://kiwiirc.com/client/irc.kiwiirc.com/?nick=alex|?&theme=mini#aeche_game"};
	story.onclick = function(){document.getElementById("iframe").src = "http:www.aeche.eu/Praslea/page1.html"};
	story.onclick = function(){document.getElementById("iframe").src = "http:www.aeche.eu/Praslea/page1.html"};
	closer.onclick = function(){
		document.getElementById("rightSide").style.right= '-357px';
		setTimeout(function(){reading = false},1000)
		};
	}

}

function hide()
{
	document.getElementById("dialog").style.zIndex= '-1';
}
function hide2()
{
	audio.volume = 0.11;
	document.getElementById("welcome").style.zIndex= '-1';
	document.getElementById("ready").style.zIndex= '-1';
}
function animate() 
	{
	    requestAnimationFrame( animate );
		render();	
		update();
		TWEEN.update();	
		controls.update();
	}
animate();
function render() 
	{	
		renderer.render( scene, camera );
		//composer.render(0.1);
	}

function visible_switch()
{
	if(options === true)
	{
		document.getElementById("settings_window").style.display= 'block';
		options = false;
	}
	else
	{
		document.getElementById("settings_window").style.display= 'none';
		options = true;
	}
}