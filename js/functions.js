function morphColorsToFaceColors( geometry ) 
				{

					if ( geometry.morphColors && geometry.morphColors.length ) {

						var colorMap = geometry.morphColors[ 0 ];

						for ( var i = 0; i < colorMap.colors.length; i ++ ) {

							geometry.faces[ i ].color = colorMap.colors[ i ];

						}

					}

				}


var lastKeyframe = 0, currentKeyframe = 0;
function loopMorphs(geometry,seconds,startKeyframe,endKeyframe,playbackDirection)
{
	var duration = seconds;
	var keyframes = endKeyframe - startKeyframe ;
	var interpolation = duration / keyframes;
	var time = Date.now() % duration;
	var keyframe = 0;
		keyframe = Math.floor( time / interpolation )+startKeyframe;
	if ( keyframe != currentKeyframe ) 
		{
		geometry.morphTargetInfluences[ lastKeyframe ] = 0;
		geometry.morphTargetInfluences[ currentKeyframe ] = 1;
		geometry.morphTargetInfluences[ keyframe ] = 0;
		lastKeyframe = currentKeyframe;
		currentKeyframe = keyframe;
		}
		if (keyframe != 0)
		{
		geometry.morphTargetInfluences[ keyframe ] = ( time % interpolation ) / interpolation;
		geometry.morphTargetInfluences[ lastKeyframe ] = 1 - ( time % interpolation ) / interpolation;
		}
	}

var lastKeyframe1 = 0, currentKeyframe1 = 0;
function loopMorphs1(geometry,seconds,startKeyframe,endKeyframe,playbackDirection)
{
	var duration = seconds;
	var keyframes = endKeyframe - startKeyframe ;
	var interpolation = duration / keyframes;
	var time = Date.now() % duration;
	var keyframe = 0;
		keyframe = Math.floor( time / interpolation )+startKeyframe;
	if ( keyframe != currentKeyframe1 ) 
		{
		geometry.morphTargetInfluences[ lastKeyframe1 ] = 0;
		geometry.morphTargetInfluences[ currentKeyframe1 ] = 1;
		geometry.morphTargetInfluences[ keyframe ] = 0;
		lastKeyframe1 = currentKeyframe1;
		currentKeyframe1 = keyframe;
		}
		if (keyframe != 0)
		{
		geometry.morphTargetInfluences[ keyframe ] = ( time % interpolation ) / interpolation;
		geometry.morphTargetInfluences[ lastKeyframe1 ] = 1 - ( time % interpolation ) / interpolation;
		}
	}

var lastKeyframe2 = 0, currentKeyframe2 = 0;
function loopMorphs2(geometry,seconds,startKeyframe,endKeyframe,playbackDirection)
{
	var duration = seconds;
	var keyframes = endKeyframe - startKeyframe ;
	var interpolation = duration / keyframes;
	var time = Date.now() % duration;
	var keyframe = 0;
		keyframe = Math.floor( time / interpolation )+startKeyframe;
	if ( keyframe != currentKeyframe2 ) 
		{
		geometry.morphTargetInfluences[ lastKeyframe2 ] = 0;
		geometry.morphTargetInfluences[ currentKeyframe2 ] = 1;
		geometry.morphTargetInfluences[ keyframe ] = 0;
		lastKeyframe2 = currentKeyframe2;
		currentKeyframe2 = keyframe;
		}
		if (keyframe != 0)
		{
		geometry.morphTargetInfluences[ keyframe ] = ( time % interpolation ) / interpolation;
		geometry.morphTargetInfluences[ lastKeyframe2 ] = 1 - ( time % interpolation ) / interpolation;
		}
	}
	
var lastKeyframe3 = 0, currentKeyframe3 = 0;
function loopMorphs3(geometry,seconds,startKeyframe,endKeyframe,playbackDirection)
{
	var duration = seconds;
	var keyframes = endKeyframe - startKeyframe ;
	var interpolation = duration / keyframes;
	var time = Date.now() % duration;
	var keyframe = 0;
		keyframe = Math.floor( time / interpolation )+startKeyframe;
	if ( keyframe != currentKeyframe3 ) 
		{
		geometry.morphTargetInfluences[ lastKeyframe3 ] = 0;
		geometry.morphTargetInfluences[ currentKeyframe3 ] = 1;
		geometry.morphTargetInfluences[ keyframe ] = 0;
		lastKeyframe3 = currentKeyframe3;
		currentKeyframe3 = keyframe;
		}
		if (keyframe != 0)
		{
		geometry.morphTargetInfluences[ keyframe ] = ( time % interpolation ) / interpolation;
		geometry.morphTargetInfluences[ lastKeyframe3 ] = 1 - ( time % interpolation ) / interpolation;
		}
	}


function genericLoader(path, asset, assetName){

		function genericHandler(geometry, materials){	
		var material = new THREE.MeshFaceMaterial( materials );
			if(asset.morphing)
			{
				material.materials[0].morphTargets = true;
			}
			if(asset.smoothing === true)
			{
				geometry.computeVertexNormals();
			}
			grphObj = new THREE.Mesh( geometry, material );
			grphObj = new THREE.Mesh( geometry, material);
			grphObj.visible = true;
			grphObj.name = assetName;

			if(asset.pos)
			{
				grphObj.position.x = asset.pos.x;
				grphObj.position.y = asset.pos.y;
				grphObj.position.z = asset.pos.z;
			}
			if(asset.rot)
			{
				grphObj.rotation.x = asset.rot.x;
				grphObj.rotation.y = asset.rot.y;
				grphObj.rotation.z = asset.rot.z;
			}
			if(asset.castShadows)
			{
				grphObj.castShadow = true;
			}
			if(asset.receiveShadows)
			{
				grphObj.receiveShadow = true;
			}
			if(asset.id)
			{
				grphObj.id = asset.id;
			}
			if(asset.visible)
			{
				grphObj.visible = false;
			}

		scene.add(grphObj)

		}
		jsonLoader.load( path ,genericHandler);
	}

function interpolate(x1,x2,x3,y1,y3){
	var y2 = (((x2 - x1)*(y3 - y1))/(x3 - x1)) + y1;
	return(y2);
}