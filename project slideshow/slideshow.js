//images are scaled to 54x49
var myImage = document.getElementById("mainImage");
var myBlackImage = document.getElementById("blackImage");
var ImageList = document.getElementById("ImageList");
var Images = ImageList.getElementsByTagName("img");
var SlideContainer = document.getElementById("ImageContainer");
var imageArray = ["_images/mission_look.jpg","_images/overlook.jpg","_images/winery_sign.jpg","_images/lunch.jpg",
				  "_images/bigSur.jpg","_images/flag_photo.jpg"];
var imageBlackArray =["_images/bmission_look.jpg","_images/boverlook.jpg","_images/bwinery_sign.jpg","_images/blunch.jpg",
				  "_images/bbigSur.jpg","_images/bflag_photo.jpg"];
				 var imageIndex = 1;
				 var imageprev;
				 var shrink =100;
				 var step = 5;
//moves the slide to the clicked image				 
//***************************************************************************				 
function SkipTo(Index) {
	Images[imageIndex].setAttribute("src",imageArray[imageIndex]);
	imageIndex = Index;
	//main slide show
changeImage();}

	
//on mouse over image turns to black
//************************************************************************	
function MakeBlack(i){
Images[i].setAttribute("src",imageBlackArray[i]);
}
	
	
//on mouse out image turns to normal
//***********************************************************************	
function MakeNormal(i){
Images[i].setAttribute("src",imageArray[i]);
}
function animator() {

myImage.setAttribute("style",imageBlackArray[imageIndex]);
//myImage.style.paddingBottom=(100-shrink)/3 +"%";
interval = setInterval(animateBox,50);

//Images[imageIndex].style.visibility ="hidden";
}
function animateBox(){
    if ( shrink < 0) {
        // clear interval
        clearInterval(interval);
		var reverse = 1;}
	if (shrink > 100)
{clearInterval(interval);
reverse =0;
}	
myImage.style.height= shrink+"%";
myImage.style.width= shrink+"%";
myImage.style.left= (100-shrink)/2 - 50 + (imageIndex)*13.5+"%";
myImage.style.top=12 + (100-shrink) +"%";
//SlideContainer.style.top=(100-shrink)/3 +"%";

shrink = shrink - step;
}	
	
//normal slideshow of image	
//*************************************************************************
function changeImage() {

//animation
shrink=95 ;
animator();
//main slide show
	myImage.setAttribute("src",imageArray[imageIndex]);
	myBlackImage.setAttribute("src",imageBlackArray[imageIndex]);
	// makes current slide black
	
	Images[imageIndex].setAttribute("src",imageBlackArray[imageIndex]);
	//makes prev image colored
	imageprev = imageIndex - 1;
		if (imageprev < 0) {
		imageprev = 5;
	}
	Images[imageprev].setAttribute("src",imageArray[imageprev]);	
	imageIndex++;
	if (imageIndex >= imageArray.length) {
		imageIndex = 0;
	}
	}


// setInterval is also in milliseconds
var intervalHandle = setInterval(changeImage,3500);
window.onload =  function() {
animator();
}