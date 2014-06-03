//GENERIC VARIABLES
var jsonLoader = new THREE.JSONLoader();
var container, scene, camera, renderer, controls, stats;
var keyboard = new THREEx.KeyboardState();
var clock = new THREE.Clock();
var projector = new THREE.Projector(), 
    mouse_vector = new THREE.Vector3(),
    mouse = { x: 0, y: 0, z: 1 },
    ray = new THREE.Raycaster( new THREE.Vector3(0,0,0), new THREE.Vector3(0,0,0) );
    intersects = []; 
var pos_projector = new THREE.Projector(), 
    pos_vector = new THREE.Vector3(0,-1,0),
    pos_ray = new THREE.Raycaster();
    pos_intersects = []; 
//RESOLUTION
var SCREEN_WIDTH = window.innerWidth, SCREEN_HEIGHT = window.innerHeight;
//CAMERA
var VIEW_ANGLE = 65, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 10, FAR = 112000;
//SHADOWS
var shdaow_res = 1024;
//LOCAL VARIABLES
var assetsFolder = "art/";
var assets = {
	dealuri: {name:"dealuri",castShadows:true, receiveShadows:true,smoothing:true,id:10007},
	apa: {name:"apa",castShadows:true, receiveShadows:true,smoothing:true,id:10017},
	copaci: {name:"copaci",castShadows:true, smoothing:true,id:10001},
	casa: {name:"casa",castShadows:true, receiveShadows:true,id:10002},
	car: {name:"car", smoothing:true,castShadows:true, receiveShadows:true,id:10003},
	teren : {name:"teren", smoothing:true, receiveShadows:true,id:10006},
	semn : {name:"semn", smoothing:true,castShadows:true, receiveShadows:true,id:10008},
	turnulet : {name:"turnulet",castShadows:true, receiveShadows:true,smoothing:false,id:10009},
	poarta : {name:"poarta",castShadows:true, receiveShadows:true,smoothing:false,id:10010},
	mar : {name:"mar", castShadows:true, receiveShadows:true,smoothing:true,id:10011},
	pod : {name:"pod",castShadows:true, receiveShadows:true, smoothing:true,id:10013},
	cal : {name:"cal",castShadows:true, receiveShadows:true, smoothing:true,id:10014},
	fantana : {name:"fantana",castShadows:true, receiveShadows:true, smoothing:true,id:10015},
	gard : {name:"gard",castShadows:true, receiveShadows:true, smoothing:true,id:10016}

}
var content = ["teren","copaci","apa","casa","car","gard","dealuri","semn","turnulet","poarta","mar","anticlick","pod","cal","fantana"];
var walk_speed = 911  //ms
var viteza = 0.116 // metri/secunda
var timp = 0;
var light, spotLight;
var praslea,paznic,iepure, iepure_spline, iepure_line;
//Experimental
var path_points = [];
var spline,line;
var seconds_now,seconds_zeroed, seconds_timed, t_interp,lungime_traseu;
var seconds_more = 0;
var null_position;
var seconds1 = new Date();
var sphere,zmeu;
var pseudo_position = new THREE.Vector3(0,0,0);
//EVENTS
var is_moving = false;
var are_tarusi = false;
var iepure_date_start = 0;
var inter;
var test = true;
var are_tarusi = false;

var water_dummy1,water_dummy2;
var mouse_helper, anticlick;
var click_group;
var poteca;
var reading = true;

var composer;
var rgbPass;
var colorifyPass;
var elementToChange;





