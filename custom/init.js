function init() 
{
	// SCENE
	scene = new THREE.Scene();


	// CAMERA
	camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR);
	camera.position.set(350,350,350);
	scene.add(camera);

	// RENDERER
	renderer = new THREE.WebGLRenderer( {antialias:true, minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBFormat} );
	renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
	renderer.setClearColor( 0xE0F8F7, 1 );
	renderer.autoClear = true;
	renderer.gammaInput = true;
	renderer.gammaOutput = true;
	//renderer.shadowMapEnabled = true;
	//renderer.shadowMapType = THREE.PCFSoftShadowMap;
	//renderer.shadowMapSoft = true;


	container = document.getElementById( 'ThreeJS' );
	container.appendChild( renderer.domElement );

	controls = new THREE.OrbitControls(camera, renderer.domElement);
	controls.target = new THREE.Vector3(942,1.95,1043);
	controls.noPan = true;
	controls.minDistance = 256;
	controls.maxDistance = 310;
	controls.rotateSpeed = 1;
	controls.minPolarAngle = 1.047197551; // radians
	controls.maxPolarAngle = 1.396263402; // radians

	// EVENTS
	THREEx.WindowResize(renderer, camera);
	THREEx.FullScreen.bindKey({ charCode : 'm'.charCodeAt(0) });
	//renderer.domElement.addEventListener( 'mousedown', onMouseDown, false );
	renderer.domElement.addEventListener( 'mousemove', onMouseMove, false );

	//GEOEMTRY
	click_group = new THREE.Object3D();
	scene.add(click_group);

	//Parse all static objects
	for(i=0;i<content.length;i++)
	{
		var currentModel = content[i];
		var assetsPath = assetsFolder + content[i].toString() + ".js";
		genericLoader(assetsPath, assets[currentModel], currentModel)
	}
 	var cubeGeometry = new THREE.BoxGeometry(20,20,20);
 	var cubeMaterial = new THREE.MeshLambertMaterial({color:0xffffff });
 	mouse_helper = new THREE.Mesh(cubeGeometry, cubeMaterial);
 	mouse_helper.visible = false;
 	scene.add(mouse_helper);

	water_dummy1 = new THREE.Object3D();
	water_dummy1.position.set(1494,-23,3290);
	scene.add( water_dummy1 );

	water_dummy2 = new THREE.Object3D();
	water_dummy2.position.set(3784,102,2484);
	scene.add( water_dummy2 );

	//Add Praslea to Scene
	jsonLoader.load( "art/anticlick.js",addAntiClickToScene);
	function addAntiClickToScene( geometry, materials ) 
	{	
	var material = new THREE.MeshFaceMaterial( materials );
	anticlick = new THREE.Mesh( geometry, material);
	anticlick.visible = false;
	scene.add( anticlick );
	click_group.add( anticlick );
	}

	//Add Praslea to Scene
	jsonLoader.load( "art/poteca.js",addPotecaToScene);
	function addPotecaToScene( geometry, materials ) 
	{	
	var material = new THREE.MeshFaceMaterial( materials );
	poteca = new THREE.Mesh( geometry, material);
	poteca.visible = false;
	poteca.id = 10000;
	scene.add( poteca );
	click_group.add( poteca );
	}
	//console.log(click_group)
	//Add Praslea to Scene
	jsonLoader.load( "art/praslea.js",addPrasleaToScene);
	function addPrasleaToScene( geometry, materials ) 
	{	
	var material = new THREE.MeshFaceMaterial( materials );
	material.materials[0].morphTargets = true;
	geometry.computeVertexNormals();
	praslea = new THREE.Mesh( geometry, material);
	praslea.position.set(942,1.95,1043); /*942,1.95,1043*/
	praslea.castShadow = true;
	praslea.receiveShadow = false;
	praslea.name = "praslea"
	scene.add( praslea );
	}
/*
	//Add Zmeu to Scene
	jsonLoader.load( "art/zmeu.js",addZmeuToScene);
	function addZmeuToScene( geometry, materials ) 
	{	
	var material = new THREE.MeshFaceMaterial( materials );
	material.materials[0].morphTargets = true;
	geometry.computeVertexNormals();
	zmeu = new THREE.Mesh( geometry, material);
	zmeu.position.set(1225,1.2485,4004);
	zmeu.rotation.y =Math.PI/2;
	zmeu.castShadow = true;
	zmeu.receiveShadow = false;
	zmeu.id = 611;
	zmeu.name = "zmeu"
	scene.add( zmeu );
	zmeu.visible = false;
	}
*/
	//Add paznic to Scene
	jsonLoader.load( "art/paznic.js",addPaznicToScene);
	function addPaznicToScene( geometry, materials ) 
	{	
	var material = new THREE.MeshFaceMaterial( materials );
	material.materials[0].morphTargets = true;
	geometry.computeVertexNormals();
	paznic = new THREE.Mesh( geometry, material);
	paznic.position.set(4043.99,-1.163,959.032);
	paznic.rotation.y = -0.959931089
	paznic.scale.set(0.75,0.75,0.75)
	paznic.castShadow = true;
	paznic.receiveShadow = false;
	paznic.name = "paznic";
	paznic.id = 666;
	scene.add( paznic );
	click_group.add( paznic );
	}
	//Add iepure to Scene
	jsonLoader.load( "art/iepure.js",addIepureToScene);
	function addIepureToScene( geometry, materials ) 
	{	
	var material = new THREE.MeshFaceMaterial( materials );
	material.materials[0].morphTargets = true;
	geometry.computeVertexNormals();
	iepure = new THREE.Mesh( geometry, material);
	iepure.position.set(942,1.95,1043);
	iepure.rotation.y = -0.959931089
	iepure.scale.set(0.5,0.5,0.5)
	iepure.castShadow = true;
	iepure.receiveShadow = false;
	iepure.name = "iepure";
	iepure.id = 616;
	scene.add( iepure );
	}
	//Add iepure path
	iepure_spline = new THREE.ClosedSplineCurve3([
		new THREE.Vector3(1565.25,61.35,1301.71), 
		new THREE.Vector3(1927.29,151.71,1294.32), 
		new THREE.Vector3(2241.31,169.77,1227.82), 
		new THREE.Vector3(2477.75,122.89,1298.01),
		new THREE.Vector3(2813.94,106.89,1301.71), 
		new THREE.Vector3(3220.32,72.01,1290.63), 
		new THREE.Vector3(3538.03,24.65,995.08), 
		new THREE.Vector3(3423.50,116.48,791.89),
		new THREE.Vector3(2976.49,117.79,773.42), 
		new THREE.Vector3(2610.75,129.45,969.22), 
		new THREE.Vector3(2060,171.99,1190.88), 
		new THREE.Vector3(1779.52,170.07,1024.63),
		new THREE.Vector3(1450,72.00,1087.44)
		]);
	var numPoints =10;
	var splineMaterial = new THREE.LineBasicMaterial({color: 0xff00f0});
	var splineGeometry = new THREE.Geometry();
	var splinePoints = iepure_spline.getPoints(numPoints);
	for(var i = 0; i < splinePoints.length; i++)
	{
	    splineGeometry.vertices.push(splinePoints[i]);  
	}
	iepure_line = new THREE.Line(splineGeometry, splineMaterial);
	//scene.add(iepure_line)
	//LIGHTS
	var ambientLight = new THREE.AmbientLight(0xffffff);
	scene.add(ambientLight);
	var ambientLight2 = new THREE.AmbientLight(0xF5F6CE);
	scene.add(ambientLight2);
	//FOG  
	scene.fog = new THREE.Fog(0xE0F8F7,110, 11000);
	//Light with shadows on
	spotLight = new THREE.SpotLight();
	spotLight.intensity = 1.36;
	spotLight.color.setHex( 0xF7D358 );
	spotLight.position.set( -1657,4761,7022 );
	spotLight.target.position.set(2418,0,2627);
	scene.add( spotLight );
	
	spotLight.castShadow = true;
	renderer.shadowMapBias = 0.39;
	spotLight.shadowMapWidth = shdaow_res;
	spotLight.shadowMapHeight = shdaow_res;
	spotLight.shadowCameraNear = 10;
	spotLight.shadowCameraFar = 11000;
	spotLight.shadowCameraFov = 60;
	spotLight.shadowDarkness = 0.661;
	

	//POST PROCESSING
	/*
	composer = new THREE.EffectComposer( renderer);
	//Create Shader Passes
	var renderPass = new THREE.RenderPass( scene, camera );
	var dotScreenPass = new THREE.DotScreenPass( new THREE.Vector2( 0, 0 ), 0.5, 5 );
	rgbPass = new THREE.ShaderPass( THREE.RGBShiftShader );
	rgbPass.uniforms[ "amount" ].value = 0.001;
	var mirrorPass = new THREE.ShaderPass( THREE.MirrorShader );
	var hblurPass = new THREE.ShaderPass( THREE.HorizontalBlurShader );
	hblurPass.uniforms[ 'h' ].value =  1.0 / (512.0*2) ;
	var bokehPass = new THREE.BokehPass( scene, camera, {
					focus: 		1,
					aperture:	0.25,
					maxblur:	10,

					width: 1024,
					height: 760
				} );
	bokehPass.renderToScreen = true;
	//Add Shader Passes to Composer
	composer.addPass( renderPass );
	composer.addPass( bokehPass );
	
	composer.addPass( hblurPass );
	composer.addPass( dotScreenPass );
	composer.addPass( mirrorPass );
	composer.addPass( rgbPass );
	rgbPass.renderToScreen = true;*/
	//postprocessing.composer = composer;
	//postprocessing.bokeh = bokehPass;
	
} //INIT END