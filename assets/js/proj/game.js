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

			this._POINTS = 0;
			this._DEDUCTION = 10;
			this._MAX_TIME = 300;
			this._CURR_TIME = 0;
			this._TILE_COMPLETED = 0;
			this._TOTAL_TILES = 8;
			this._CURRENT_SELECTED = null;
			this._PREV_SELECTED = null;
			this._MAX_TILES = 104;
			this._GAME_OVER = false;
			this._LVL = 0;

			this.gamecontainer = this.pixi.stage.addChild( new PIXI.Container() );
			//-----------------------------------------------------------
			this.background = this.gamecontainer.addChild(new PIXI.Sprite(this.assets.loadImg('bg.png')) );
			this.background.position.set(config.pixiSettings.width*0.5,config.pixiSettings.height*0.5);	
			this.background.anchor.set(0.5);


			this.tileContainer = this.background.addChild(new PIXI.Container() );
			this.tileContainer.position.set(0,0);
			

			/*Tap(this,this.background,{onUp:()=>{
				this.background.tint = random_hex_color_code();
				console.log("123",this.background.tint);
			}})*/
	
			//SFX["bgm1"].play();

			this.addHud();
			this.createTiles();
			this.drawGameOver();

			this.levelUp();
			this.startTime();
	}

	drawGameOver(){
			this.gameOver = this.gamecontainer.addChild(new PIXI.Sprite(this.assets.loadImg('game-over.png')) );
			this.gameOver.position.set(config.pixiSettings.width*0.5,config.pixiSettings.height*0.5);	
			this.gameOver.anchor.set(0.5);

			this.gameOver.visible = false;

			const last_score = new PIXI.Text('1,000');
			last_score.position.set(0,0);
			last_score.anchor.set(0.5);
			last_score.style._fontFamily = "Roboto",
			last_score.style._fill = "#cccccc";
			last_score.style._fontSize = 30;
			last_score.style._align = "right";
			this.gameOver.addChild(last_score);
        	this.last_score = last_score;
	}

	addHud(){
		let score_bg = this.gamecontainer.addChild(new PIXI.Sprite(this.assets.loadImg('score-bg.png')) );
		score_bg.position.set(420,35);	
		score_bg.anchor.set(0.5);

		const score_board_text = new PIXI.Text('0');
        score_board_text.position.set(-75,10);
        score_board_text.anchor.set(0,0.5);
        score_board_text.style._fontFamily = "Roboto",
        score_board_text.style._fill = "#ffffff";
        score_board_text.style._fontSize = 22;
        score_board_text.style._align = "right";
        score_bg.addChild(score_board_text);
        this.score_board_text = score_board_text;

		const level_txt = new PIXI.Text('0');
        level_txt.position.set(60,10);
        level_txt.anchor.set(0.5);
        level_txt.style._fontFamily = "Roboto",
        level_txt.style._fill = "#ffffff";
        level_txt.style._fontSize = 22;
        level_txt.style._align = "right";
        score_bg.addChild(level_txt);
        this.level_txt = level_txt;


		let minilogo = this.gamecontainer.addChild(new PIXI.Sprite(this.assets.loadImg('mini-logo.png')) );
		minilogo.position.set(70,35);	
		minilogo.anchor.set(0.5);

		let timer_bg = this.gamecontainer.addChild(new PIXI.Sprite(this.assets.loadImg('timer-bar.png')) );
		timer_bg.position.set(20,85);	
		timer_bg.tint = 0x0;
		timer_bg.alpha = 0.5;
	
		let timer_bar = this.gamecontainer.addChild(new PIXI.Sprite(this.assets.loadImg('timer-bar.png')) );
		timer_bar.tint = 0xffcc00;
		timer_bar.position.set(20,85);	
		timer_bar.scale.x = 1;
		this.timer_bar = timer_bar;
	}


	startTime(){
		let tw = {x:0};
		this._CURR_TIME = this._MAX_TIME;
		this.timer_bar.scale.x = 1;
		this._GAME_OVER = false;
		this._POINTS = 0;

		this.tileContainer.y = 320;

		TweenMax.to(tw,1,{
			x:0,
			repeat:-1,
			onComplete:()=>{
				console.log("END")
			},
			onRepeat:()=>{
				this.deductTime(1);
				if(this._CURR_TIME<=0){
					TweenMax.killTweensOf(tw);
					console.log("GAME OVER");
					this._GAME_OVER = true;
					this.showGameOver(this._POINTS);
				}
			}
		});
	}


	showGameOver(num){
		console.log("vis",this,this.gameOver)
		this.gameOver.visible = true;
		this.last_score.text = num;
		TweenMax.to(this.gameOver.scale,1,{y:1,x:1,startAt:{y:2,x:2},ease:Back.easeOut});
	}

	deductTime(num,fx){
		this._CURR_TIME -= num;
		if(this._CURR_TIME <= 0){
			this._CURR_TIME = 0;
		}
		this.timer_bar.scale.x = this._CURR_TIME/this._MAX_TIME;

		if(fx==true){
			TweenMax.to(this.timer_bar,0.25,{tint:0xffcc00,startAt:{tint:0xff0000},repeat:1})
		}
	}

	createTiles(){
		
		this.tiles = [[]];

		let _left = 210;
		let _top = 330;
		let i=0;
		let tempX =0;
		let tempY=0;
		let j=0,k=0;
		let gap = 61;
		let obj = {
			"container":this.tileContainer,
			"assets":this.assets
		}

		let txtr = this.generateTileTextures();
		txtr = ARRshuffle(txtr);

		for(i=0; i<this._MAX_TILES; i++ ){
			this.tiles[j][k] = new PixiAtlas("onetframe",obj,"onetframe_" + txtr[i]);//this.background.addChild(new PIXI.Sprite(this.assets.loadImg('g1.png')) );
			this.tiles[j][k].anchor.set(0.5);
			this.tiles[j][k]._id = txtr[i];
			this.tiles[j][k].interactive = true;
			this.tiles[j][k].position.set( (tempX*gap)-_left-2, tempY*gap-_top );
			this.tiles[j][k].visible = false;
			Tap(this,this.tiles[j][k],{onDown:(e)=>{this.tapTile(e)}});
			
			tempX+=1;
			k+=1;

			if(tempX>7){
				tempX = 0;
				tempY+=1;
				k=0;
				j+=1;
				this.tiles[j]=[];
			}
		}

		//cursor
		this.cursor = this.tileContainer.addChild(new PIXI.Sprite(this.assets.loadImg('highlight.png')) );
		this.cursor.position.set(0,0);	
		this.cursor.anchor.set(0.5);
		this.cursor.tint = 0xff0000;
		this.cursor.alpha = 0;
	}

	moveCursor(e){
		this.cursor.alpha = 1;
		this.cursor.x = e.x;
		this.cursor.y = e.y;
	}
	

	tapTile(e){

		if(this._GAME_OVER == true){
			return;
		}

		this.moveCursor(e);

		if(this._CURRENT_SELECTED == null && this._PREV_SELECTED == null){
			this._CURRENT_SELECTED = e;
			e.interactive = false;
		}else
		if(this._CURRENT_SELECTED !=null && this._PREV_SELECTED == null){
			this._PREV_SELECTED = this._CURRENT_SELECTED;
			this._CURRENT_SELECTED = e;
		}

		if(this._CURRENT_SELECTED != null && this._PREV_SELECTED != null){

			this._PREV_SELECTED.interactive = this._CURRENT_SELECTED.interactive = true;

			//match
			if(this._CURRENT_SELECTED._id == this._PREV_SELECTED._id ){
				this._PREV_SELECTED.visible = false;
				this._CURRENT_SELECTED.visible = false;
				this._TILE_COMPLETED += 2;
				this.addPoints(1);

				if(this._TILE_COMPLETED == this._TOTAL_TILES){
					this.levelUp();
				}
			}else{
				this.deductTime(this._DEDUCTION,true);
			}

			this._CURRENT_SELECTED = null;
			this._PREV_SELECTED = null;
			this.cursor.alpha = 0;
		}
	}

	addPoints(num){
		this._POINTS += num;
		this.score_board_text.text = this._POINTS;
	}

	levelUp(){
		let i=0,j=0,k=0;
		let tempX=0,tempY=0;
	

		this._LVL += 1;
		this.level_txt.text = this._LVL;

		if(this._LVL!=0){
			this.addPoints(10);
		}

		this._TILE_COMPLETED = 0;
		this._CURRENT_SELECTED = null;
		this._PREV_SELECTED = null;
		this.cursor.alpha = 0;
		this.background.tint = random_hex_color_code();

		if(this._TOTAL_TILES<104){
			this._TOTAL_TILES += 8;
			this.tileContainer.y -= 30;
		}

		let txtr = this.generateTileTextures();
		txtr = ARRshuffle(txtr);

		for(i=0; i<this._TOTAL_TILES; i++ ){
			this.tiles[j][k].visible = true;
			this.tiles[j][k].changeTexture("onetframe_" + txtr[i]);
			this.tiles[j][k]._id = txtr[i];
			tempX+=1;
			k+=1;
			if(tempX>7){
				tempX = 0;
				tempY+=1;
				k=0;
				j+=1;
			}
		}
		
	}

	generateTileTextures(){
		let txtr_arr = [];
		let i=0;
		let val = 0;

		for(i=0; i<this._TOTAL_TILES*0.5; i++){
			val = parseInt((Math.random()*15)) + 1;
			txtr_arr.push( val );
			txtr_arr.push( val );
		}
		return txtr_arr;
	}

	
}


