"use strict";

class PixiPreload {

	constructor(app){
        this.img = [];
        this.pixi = app;
        this.loadImg = this.loadImage;
        this.loadSuccess = this.loadComplete;
        this.loader = new PIXI.Container();

        this.createPrelodScene();
        this.init();
    }

    init(){

        this.pixi.loader.baseUrl = 'assets/img';

        this.pixi.loader
            .add('main-bg2.jpg' ,     'bg/main-bg2.jpg')
            .add('popup-bg.png' ,     'bg/popup-bg.png')

            .add('TRICHECK.jpg' ,     'ida/TRICHECK.jpg')
            .add('VALAZYD-1.jpg' ,     'ida/VALAZYD-1.jpg')
            .add('VALAZYD-2.jpg' ,     'ida/VALAZYD-2.jpg')
            .add('ZYROVA-1.jpg' ,     'ida/ZYROVA-1.jpg')
            .add('ZYROVA-2.jpg' ,     'ida/ZYROVA-2.jpg')


            .add('btn-1.png' ,     'btn/btn-1.png')
            .add('btn-2.png' ,     'btn/btn-2.png')
            .add('btn-3.png' ,     'btn/btn-3.png')
            .add('btn-close.png' , 'btn/btn-close.png')
            ;//end of preload

            this.pixi.loader.onProgress.add(this.showProgress,this);
            this.pixi.loader.onComplete.add(this.loadComplete,this);
            this.pixi.loader.onError.add(this.onError,this);
            this.pixi.loader.load();
    }

    createPrelodScene(){

            let posX = 640//512;
            let posY = 384

            const preloader_x = 360;
            const preloader_y = 650;

            this.preloadScene = new PIXI.Container();
            this.pixi.stage.addChild(this.preloadScene);
           

            this.bg = new PIXI.Graphics();
            this.bg.beginFill(0x0);
            this.bg.lineStyle(4, 0x050505, 1);
            this.bg.drawRect(0,0,config.pixiSettings.width,config.pixiSettings.height);
            this.bg.endFill();
            this.preloadScene.addChild(this.bg);

            this.touchtext = this.preloadScene.addChild(new PIXI.Text('Touch the screen to continue',{fontFamily : 'Arial', 
															 fontSize: 20, 
															 fill : 0x999999, 
															 fontWeight: 'bold',
															 align : 'center'}
											));
            this.touchtext.position.set(posX,600);
            this.touchtext.anchor.set(0.5)
            this.touchtext.visible = false;

            this.preloadbarbg = new PIXI.Graphics();
            this.preloadbarbg.beginFill(0x333333);
            this.preloadbarbg.drawRect(0, 0, 300, 5);
            this.preloadbarbg.endFill();
            //this.preloadbarbg.scale.set(0,0.5);
            this.preloadbarbg.position.set(preloader_x, preloader_y);

            this.preloadbar = new PIXI.Graphics();
            this.preloadbar.beginFill(0xff00cc);
            this.preloadbar.drawRect(0, 0, 300, 5);
            this.preloadbar.endFill();
            this.preloadbar.scale.set(0,0.5);
            this.preloadbar.position.set(preloader_x, preloader_y);

            this.preloadScene.addChild(this.preloadbarbg);
            this.preloadScene.addChild(this.preloadbar);

            this.preloadText = this.preloadScene.addChild(new PIXI.Text('',{fontFamily : 'Arial', 
															 fontSize: 20, 
															 fill : 0x999999, 
															 fontWeight: 'bold',
															 align : 'center'}
                                                ));

            this.preloadText.position.set(posX,preloader_y+35)
            this.preloadText.anchor.set(0.5)
        
    }

    loadImage(image){
      return this.pixi.loader.resources[image].texture; //PIXI.Texture.from(this.pixi.loader.resources[image].url);
    }

    onError(e){
        //console.log('error',e);
    }

    showProgress(e){
        //console.log('progress: ' , e.progress);
        this.preloadbar.scale.set(e.progress*0.01,1);
        this.preloadText.text = parseInt(e.progress) + '%';
    }

    loadComplete(){
        
        const customEvent = new Event('loadComplete',{'success':true});

        this.bg.on('pointerdown',this.onStartScene,this);
        this.bg.interactive = true;
        this.bg.buttonMode = true;
        this.touchtext.visible = true;

        this.preloadbarbg.visible = false;
        this.preloadbar.visible = false;
        this.preloadText.visible = false;
        
    }

    onStartScene(){
        console.log("test123")
        this.preloadScene.destroy();
        this.loader.emit("loadComplete");
    }
}

