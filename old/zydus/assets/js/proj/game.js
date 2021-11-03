"use strict"

class PixiGame{

		/**
		* @param {{Pixi:Object}} - okay to change

		*/
		constructor(pixi,assets){
			//this.pixi -> holds the pixi framework
			this.pixi = pixi;

			/**
			 * @type {Assets}
			 * @description
			 * use to access game assets.
			 *it holds the preloaded game assets
			 */
			this.assets = assets;
			this.ticker = PIXI.Ticker.shared;
		}

		onCompletePreload(){
			//super.this.assets.loadComplete();
			console.log('Assets Loading Complete 100%');
			//create
			this.create();
		}
		
		create(){
			/**
			 * @type {Container}
			 * @description
			 * it holds the whole game display
			 */

			this.windowContent = 0;

			this.gamecontainer = this.pixi.stage.addChild( new PIXI.Container() );
			//-----------------------------------------------------------
			this.background = this.gamecontainer.addChild(new PIXI.Sprite(this.assets.loadImg('main-bg2.jpg')) );
			this.background.position.set(config.pixiSettings.width*0.5,config.pixiSettings.height*0.5);	
			this.background.anchor.set(0.5);
	
			this.createButtons();
			this.createWindows();

			//SFX["bgm1"].play();
	}

	createWindows(){

		this.imgs = ['TRICHECK.jpg','VALAZYD-2.jpg','ZYROVA-1.jpg','VALAZYD-1.jpg','ZYROVA-2.jpg']

		this.windowContent = 4;

		this.popupWindow = this.background.addChild(new PIXI.Sprite(this.assets.loadImg('popup-bg.png')) );
		this.popupWindow.anchor.set(0.5);
		this.popupWindow.visible = false;
		this.popupWindow.y = -10;
		this.popupWindow.interactive = true;

		this.contentImg = this.popupWindow.addChild(new PIXI.Sprite(this.assets.loadImg(this.imgs[this.windowContent])) );
		this.contentImg.anchor.set(0.5);
		this.contentImg.y = -2;
		this.contentImg.interactive = true;

		this.closeBtn = this.popupWindow.addChild(new PIXI.Sprite(this.assets.loadImg('btn-close.png')) );
		this.closeBtn.anchor.set(0.5);
		this.closeBtn.position.set(340,320)
		this.closeBtn.interactive = true;

		this.closeBtn.on('pointerdown',this.closeWindow,this);

		this.contentImg.on('pointerdown',this.toggleWindow,this);
	}

	animateWindow(_object){
		console.log(_object)
		TweenMax.to(_object.scale,0.5,{startAt:{x:0.1,y:0.1},y:1,x:1,ease:Strong.easeOut})
		TweenMax.to(_object,0.5,{startAt:{alpha:0},alpha:1,ease:Strong.easeOut});
	}

	toggleWindow(e){
		if(this.windowContent == 4){
			console.log("okay");
			if(this.contentImg.texture == PIXI.Texture.from(this.imgs[this.windowContent])){
				this.contentImg.texture = PIXI.Texture.from(this.imgs[this.windowContent-2])
			}else{
				this.contentImg.texture = PIXI.Texture.from(this.imgs[this.windowContent])
			}
		}
	}

	clickTab(e){

		if(e.target.id == 3){
				AdBar.style.display = 'block';
				video.play();
		}else{
			this.windowContent = e.target.id-1;
			this.animateWindow(this.popupWindow);
			this.contentImg.texture = PIXI.Texture.from(this.imgs[this.windowContent])
			this.popupWindow.visible = true;
			this.popupWindow.y = 0;
		}
		
		SFX["sfx-tick"].play();
	}

	closeWindow(e){
		SFX["sfx-tick"].play();
		this.popupWindow.alpha = 0;
		TweenMax.to(this.popupWindow,0.5,{y:2000,startAt:{y:0}})
	}

	createButtons(){

		this.btns = [];

		this.btns[0] = this.background.addChild(new PIXI.Sprite(this.assets.loadImg('btn-1.png')) );
		this.btns[0].position.set(-284,75)
		this.btns[0].id = 1;

		this.btns[1] = this.background.addChild(new PIXI.Sprite(this.assets.loadImg('btn-2.png')) );
		this.btns[1].position.set(-225,151)
		this.btns[1].id = 2;

		this.btns[2] = this.background.addChild(new PIXI.Sprite(this.assets.loadImg('btn-3.png')) );
		this.btns[2].position.set(0,90)
		this.btns[2].id = 3;

		this.btns[3] = this.background.addChild(new PIXI.Sprite(this.assets.loadImg('btn-2.png')) );
		this.btns[3].position.set(225,151)
		this.btns[3].id = 4;

		this.btns[4] = this.background.addChild(new PIXI.Sprite(this.assets.loadImg('btn-1.png')) );
		this.btns[4].position.set(282,75)
		this.btns[4].id = 5;

		var i=0;
		
		for(i=0; i<5; i++){
			this.btns[i].on('pointerdown',this.clickTab,this);
			this.btns[i].anchor.set(0.5);
			this.btns[i].interactive = true;
			this.btns[i].alpha = 0.1;
			TweenMax.to(this.btns[i],0.8,{startAt:{alpha:0.1},alpha:0.6,yoyo:true,repeat:-1,delay:0.1*i})
		}

		
		

	}

}


