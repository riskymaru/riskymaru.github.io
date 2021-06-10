self.addEventListener('install', (e) => {
	e.waitUntil(
	  caches.open('fox-store').then((cache) => cache.addAll([
		'index.html',
		'assets/css/main.css',
		'assets/proj/sfx.js',
		'assets/sndm4a.bgm1.m4a',
		'assets/sndm4a/sfx-btn2.m4a',
		'assets/sndm4a/sfx-btn1.m4a',
		'assets/sndm4a/sfx-win.m4a',
		'assets/sndm4a/sfx-wrong.m4a',
		'assets/sndm4a/play-score.m4a',
		'assets/sndm4a/ton-click.m4a',
		'assets/sndm4a/"sfx-tick.m4a',
		'assets/sndm4a/"sfx-beep.m4a'
		["sfx-reveal-score",false,this.SFX_VOLUME]
	  ])),
	);
	console.log("reg")
  });
  
  self.addEventListener('fetch', (e) => {
	console.log(e.request.url);
	e.respondWith(
	  caches.match(e.request).then((response) => response || fetch(e.request)),
	);
  });
  

  console.log("REG v0.3")