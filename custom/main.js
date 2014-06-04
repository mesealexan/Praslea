elementToChange = document.getElementsByTagName("body")[0];
elementToChange.style.cursor = "url('http://www.aeche.eu/cursor/Arrow.cur'), auto";
//document.body.style.cursor = "http://wiki-devel.sugarlabs.org/images/e/e2/Arrow.cur";
init();
function moveBar()
{
	if(reading === true)
	{
		document.getElementById("rightSide").style.right= '0px';
		document.getElementById("poveste").style.right= '0px';
		reading = false;
	}
	else
	{
		document.getElementById("rightSide").style.right= '-360px'
		document.getElementById("poveste").style.right= '-360px'
		reading = true;
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