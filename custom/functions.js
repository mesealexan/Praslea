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

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "0x" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function gradient(startColor, endColor, steps) {
             var start = {
                     'Hex'   : startColor,
                     'R'     : parseInt(startColor.slice(1,3), 16),
                     'G'     : parseInt(startColor.slice(3,5), 16),
                     'B'     : parseInt(startColor.slice(5,7), 16)
             }
             var end = {
                     'Hex'   : endColor,
                     'R'     : parseInt(endColor.slice(1,3), 16),
                     'G'     : parseInt(endColor.slice(3,5), 16),
                     'B'     : parseInt(endColor.slice(5,7), 16)
             }
             diffR = end['R'] - start['R'];
             diffG = end['G'] - start['G'];
             diffB = end['B'] - start['B'];

             stepsHex  = new Array();
             stepsR    = new Array();
             stepsG    = new Array();
             stepsB    = new Array();

             for(var i = 0; i <= steps; i++) {
                     stepsR[i] = start['R'] + ((diffR / steps) * i);
                     stepsG[i] = start['G'] + ((diffG / steps) * i);
                     stepsB[i] = start['B'] + ((diffB / steps) * i);
                     stepsHex[i] = '0x' + Math.round(stepsR[i]).toString(16) + '' + Math.round(stepsG[i]).toString(16) + '' + Math.round(stepsB[i]).toString(16);
             }
             return stepsHex;

         }