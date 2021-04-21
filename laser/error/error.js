/*-----------------------------------------------------------------*/
/*PRELOAD*/
document.getElementById("loader-btn").addEventListener("click",function(){
    //clearInterval(refreshIntervalId);
    location.reload();
});
	          	
let time = 10000// 1 sec
let mydate = new Date();
let checkpoint = mydate.getTime() ;
let refreshIntervalId = setInterval(checkTime, time); //check every 1 sec

function checkTime(){

    //check new date
	mydate = new Date();
    currentTime = mydate.getTime();
    //console.log("test123",currentTime);
    //please improve this checking part-------------------
    //check the backward adjustment (minutes,hours,days)

    if ( (checkpoint) > (currentTime) ){
        clearInterval(refreshIntervalId);
        alert('error');
        this.showError();
    }
    //----------------------------------------------------

    console.log("test123",'old',checkpoint,'new',currentTime);

    //if all is good update new checkpoint
    checkpoint = mydate.getTime() 
}

function showError(){
    //show error message popup
	document.getElementsByClassName("popup")[0].classList.add("active");
}

document.getElementById("dismiss-popup-btn").addEventListener("click",function(){
    clearInterval(refreshIntervalId);
    //TODO
    //call submit score
    //the game should send the score and end the game
});

   	




