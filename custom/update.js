function update()
	{
		//console.log(scene.children.length)
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