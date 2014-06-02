function onMouseMove( event_info ) 
		{
		event_info.preventDefault();  
	    mouse.x = ( event_info.clientX / window.innerWidth ) * 2 - 1;
	    mouse.y = - ( event_info.clientY / window.innerHeight ) * 2 + 1;	
	    mouse_vector.set( mouse.x, mouse.y, mouse.z );
    	projector.unprojectVector( mouse_vector, camera );
		var direction = mouse_vector.sub( camera.position ).normalize();
   		ray.set( camera.position, direction );
   		intersects = ray.intersectObjects(click_group.children, false );
   		    if(intersects.length>0)
   		    {
   		    	if(intersects[0].object.id === 10000)
   		    	{
   		    	 elementToChange.style.cursor = "url('http://www.aeche.eu/cursor/Arrow.cur'), auto";
   		    	}
   		    	else if(intersects[0].object.id === 666)
   		    		elementToChange.style.cursor = "url('http://www.aeche.eu/cursor/Help.cur'), auto";
   		    	else
   		    	{
   		    		 elementToChange.style.cursor =  "url('http://www.aeche.eu/cursor/NO.cur'), auto";
   		    	}
   		    }
   		    else
   		    	{
   		    	}
		}

var element = document.getElementById('ThreeJS');
var options = {	
				preventDefault: true
				}; //settings for gestures events

var drag = new Hammer(element, options);
drag.on("drag", function(ev)
	{
//controls.enabled = true;
 	});
var tap = new Hammer(element, options);
tap.on("tap", function(ev)
	{
	mouse.x = ( ev.gesture.touches[0].clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( ev.gesture.touches[0].clientY / window.innerHeight ) * 2 + 1;
	mouse_vector.set( mouse.x, mouse.y, mouse.z );
    projector.unprojectVector( mouse_vector, camera );
		var direction = mouse_vector.sub( camera.position ).normalize();
    ray.set( camera.position, direction );
    intersects = ray.intersectObjects( scene.children, true );
    var collector = [];
    if(intersects.length>0)
    {
    	for(i=0;i<intersects.length;i++)
    	{	

			if(intersects[0].object.id === 10000)
			{
				praslea.lookAt(new THREE.Vector3(intersects[0].point.x,praslea.position.y,intersects[0].point.z));
				if(path_points.length === 0)
				{
					seconds_now = new Date(); //Get seconds now
					seconds_more = 0; //Reset counter
					lungime_traseu = praslea.position.distanceTo(intersects[i].point)
					spline = new THREE.SplineCurve3();
					spline.points.push(praslea.position);
					spline.points.push(intersects[i].point);
					var numPoints =10;
					var splineMaterial = new THREE.LineBasicMaterial({color: 0xff00f0});
					var splineGeometry = new THREE.Geometry();
					var splinePoints = spline.getPoints(numPoints);
					for(var i = 0; i < splinePoints.length; i++)
					{
					    splineGeometry.vertices.push(splinePoints[i]);  
					}
					line = new THREE.Line(splineGeometry, splineMaterial);
				}

			}
			if(intersects[i].object.id === 666 && praslea.position.distanceTo(paznic.position)>300)
			{
				praslea.lookAt(new THREE.Vector3(intersects[i].point.x,praslea.position.y,intersects[i].point.z));
				if(path_points.length === 0)
				{
					seconds_now = new Date(); //Get seconds now
					seconds_more = 0; //Reset counter
					lungime_traseu = praslea.position.distanceTo(intersects[i].point)
					spline = new THREE.SplineCurve3();
					spline.points.push(praslea.position);
					spline.points.push(new THREE.Vector3(3958.44,2.13,1000));
					var numPoints =10;
					var splineMaterial = new THREE.LineBasicMaterial({color: 0xff00f0});
					var splineGeometry = new THREE.Geometry();
					var splinePoints = spline.getPoints(numPoints);
					for(var i = 0; i < splinePoints.length; i++)
					{
					    splineGeometry.vertices.push(splinePoints[i]);  
					}
					line = new THREE.Line(splineGeometry, splineMaterial);
				}

			}
    	}
	}

 	});