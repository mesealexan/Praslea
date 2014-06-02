	  var audio = document.createElement('audio');
	  var source = document.createElement('source');
	  source.src = 'sound/ambient.mp3';
	  audio.appendChild(source);
	  audio.volume = 0.0;
	  audio.loop = true;
	  audio.play();

	  var audio2 = document.createElement('audio');
	  var source2 = document.createElement('source');
	  source2.src = 'sound/step.mp3';
	  audio2.appendChild(source2);
	  audio2.volume = 0.0;
	  audio2.loop = true;
	  audio2.play();

	  var audio3 = document.createElement('audio');
	  var source3 = document.createElement('source');
	  source3.src = 'sound/water.mp3';
	  audio3.appendChild(source3);
	  audio3.volume = 0.0;
	  audio3.loop = true;
	  audio3.play();
