"use-strict"

//for pixel art
///PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;


const config = new Config();

const SFX = new SoundFX();

//init div container for canvas
const gamecanvas = document.getElementById('canvas-app'); 

//init pixi game
const pixiapp = new PIXI.Application(config.pixiSettings);
	  gamecanvas.appendChild(pixiapp.view);

const assets = new PixiPreload(pixiapp,config);



const game = new PixiGame(pixiapp,assets);
//add pixi to DOM

/*
initialize other js below this line
*/

//add resize
//RyxPixiResize(pixiapp,config);

//ready preloader
assets.loader.on('loadComplete',function(){
    game.onCompletePreload();
    //console.log("loading complete");
})


