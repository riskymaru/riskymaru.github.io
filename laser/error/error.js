/*-----------------------------------------------------------------*/
/*PRELOAD*/
document.getElementById("loader-btn").addEventListener("click",function(){
    //clearInterval(refreshIntervalId);
    location.reload();
});
	          	



let time = 1000// 1 sec
let mydate = new Date();
let checkpoint = mydate.getMinutes() ;
let refreshIntervalId = setInterval(checkTime, time); //check every 1 sec

function checkTime(){

    //check new date
	mydate = new Date();
    currentTime = mydate.getTime();
    //console.log("test123",currentTime);
    //please improve this checking part-------------------
    //check the backward adjustment (minutes,hours,days)
    if ( (checkpoint) > (currentTime) && (checkpoint != 0)){
        clearInterval(refreshIntervalId);
        this.showError();
    }
    //----------------------------------------------------

    //if all is good update new checkpoint
    checkpoint = mydate.getMinutes() 
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

   	




