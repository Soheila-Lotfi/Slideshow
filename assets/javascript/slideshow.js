
var image=["assets/images/firstcrystal.jpg","assets/images/pinkcrystal.jpg","assets/images/greencrystal.jpg"];
var count=0;
var intervalId;

$("#start").click(startSlideShow);
$("#stop").click(stop);

function displayShow(){
    
   
    $("#image-holder").html("<img src="+ image[count]+ " width='200px'>");
};

displayShow();

function startSlideShow(){

    intervalId=setInterval(nextImage, 3000);  //run nextImage every 3 seconds
 }

function nextImage(){
    count++;
    $("#image-holder").html("<img src=assets/images/loading.gif width='200px'>");  
    setTimeout(displayShow,1000);   //show the next image after 1 second-so the gif is on the page for 1 second.
   if(count==image.length){
       count=0;
   }

}
 