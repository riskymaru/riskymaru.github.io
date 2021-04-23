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

    //save the new time
    currentTime = mydate.getTime();

    //check the backward adjustment (minutes,hours,days)
    if ( (checkpoint) > (currentTime) ){
        this.showError();
        clearInterval(refreshIntervalId);
    }
    //----------------------------------------------------

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

   	




