
time_start = new Date();
var day = true;
var time_now = 0;
gradient = new gradient('#F7F8E0', '#071418', 300);
console.log(gradient.length)
setInterval(function(){
	if(time_now<300 && day === true)
		time_now ++
	else
	{
		day = false;
	}
	if(time_now>0 && day === false)
	{
		time_now --
	}
	else
	{
		day = true;
	}

sky.material.materials[0].opacity = EasingFunctions.easeInOutQuad(time_now/300) ;
//background_color = gradient[time_now]
spotLight.color.setHex( gradient[time_now] );
scene.fog.color.setHex( gradient[time_now] );

if(time_now<233)
{
ambientLight.color.setHex( gradient[time_now] );
ambientLight2.color.setHex( gradient[time_now] );
}
//	console.log(time_now)
},100);

function update()
	{

sky.rotation.y += 0.0001;
		/*
	time_now = new Date();

	timer = (time_now.getTime() - time_start.getTime())/30; //seconds elapsed from begining
	tempo = Math.round(timer%255)
	if(tempo>254)
		tempo = Math.abs(255 - Math.round(timer%255))
	else
		tempo = Math.round(timer%255)
	console.log(tempo)*/
	/*
	timed_negative = Math.abs(50000 - timed)
//console.log(uu)



	if(timed<50000 && day === true)
	{
	tempo = Math.round(interpolate(0,timed,50000,0,255))
	}
		else
		{
			day = false;
		}
	if(timed>0 && day === false)
	{
	tempo = Math.round(interpolate(50000,timed_negative,0,255,0))
	}
		else
		{
			day = true;
		}
console.log(tempo);
//background_color = rgbToHex(tempo, tempo, tempo);
spotLight.color.setHex( background_color );
scene.fog.color.setHex( background_color );
ambientLight.color.setHex( background_color );
ambientLight2.color.setHex( background_color );
	//console.log(timed, timed_negative);
	*/
if(test === true)
{
if(scene.children.length >= 2)
	{
document.getElementById("loading").style.zIndex= '-1';
document.getElementById("ready").style.zIndex= '666';
test = false;
	}
}
		/*if ( frustum.contains( paznic )) {
}
   console.log("prezent")
		}*/
		if(iepure){
		iepure_date_start++;
		if(iepure_date_start/5000>0.99)
			iepure_date_start = 0;
iepure.position = iepure_spline.getPointAt( iepure_date_start/5000 );	
iepure.lookAt(iepure_spline.getPointAt( iepure_date_start/5000 +0.01 ));
}
		//	console.log(iepure_date_start/1000)
if(iepure)
	loopMorphs3(iepure,500,0,10,1);
if(paznic)
	loopMorphs2(paznic,4000,0,10,1);
		
if(praslea){

	//light.position.x = praslea.position.x;
	//light.position.y = praslea.position.y + 150;
	//light.position.z = praslea.position.z;
if(praslea.position.distanceTo(water_dummy1.position)<=1100)
	audio3.volume = interpolate(0,praslea.position.distanceTo(water_dummy1.position),1100,0.06,0);
if(praslea.position.distanceTo(water_dummy2.position)<=800)
	audio3.volume = interpolate(0,praslea.position.distanceTo(water_dummy2.position),800,0.06,0);
if(praslea.position.distanceTo(paznic.position)<=200)
	document.getElementById("dialog").style.display= 'block';
	else
	document.getElementById("dialog").style.display= 'none';

	spotLight.target.position = praslea.position;
	spotLight.position.x = praslea.position.x - 892;
	spotLight.position.z = praslea.position.z + 1000;
	controls.target.x = praslea.position.x;
	controls.target.y = praslea.position.y + 90;
	controls.target.z = praslea.position.z;
	/*
	if(praslea.position.distanceTo(zmeu.position)<=500)
	{
		loopMorphs1(zmeu,7000,11,50,1);
		zmeu.lookAt(praslea.position);
	}
	else
	{
		loopMorphs1(zmeu,2000,0,11,1);
	}*/
	if(spline)
	{
		timp = lungime_traseu / viteza;
		if(seconds_more < timp)
		{
			is_moving = true
			seconds_timed = new Date(); 
			seconds_more = ((seconds_timed.getTime() - seconds_now.getTime()));	
			t_interp = interpolate(0,seconds_more,timp,0,1);
			praslea.position = spline.getPointAt( t_interp );	
		}
		else
		{
			is_moving = false;
		}		
	}

		if(is_moving === true)
		{
			 //audio2.volume = 0.06;
			loopMorphs(praslea,walk_speed,0,9);
			var origin = new THREE.Vector3(praslea.position.x, 2000 ,praslea.position.z)
			pos_ray.set(origin,pos_vector)
			pos_intersects = pos_ray.intersectObjects(scene.children,true); 
			if(pos_intersects.length>0)
			{
				for(i=0;i<pos_intersects.length;i++)
				{
					if(pos_intersects[i].object.id === 10000)
					{
						praslea.position.y = pos_intersects[i].point.y ;
					}
				}
			}
		}
		else
		{
			audio2.volume = 0.0;
			loopMorphs(praslea,8611,9,41,1);	
		}
	}
}