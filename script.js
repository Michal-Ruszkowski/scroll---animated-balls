function findPos(obj){
	let curleft = curtop = 0;
    if (obj.offsetParent) {
		curleft = obj.offsetLeft;
		curtop = obj.offsetTop;
		while (obj = obj.offsetParent) {
			curleft += obj.offsetLeft
			curtop += obj.offsetTop
		}
    }
    return [curleft,curtop];
}

document.addEventListener("scroll",  function(){
	const circle = document.getElementsByClassName("circle");
	const winH = window.innerHeight;
	const winW = window.innerWidth;
	for (i=0; i<circle.length; i++){
		const positionCircle = findPos(circle[i]);
		const positionUpperHidden = positionCircle[1] + winW * 0.24;
		const positionUpper = positionCircle[1] - winH * 0.25 + winW * 0.12;
		const positionBottom = positionCircle[1] - winH * 0.75 + winW * 0.12;
		const positionBottomHidden = positionCircle[1] - winH;
		const scrollLength = winH * 0.25 + winW * 0.12;
		let x = 0;
		if(scrollY<=positionBottom && scrollY>=positionBottomHidden){
			x = Math.abs((scrollY - positionBottom) * 55 / scrollLength);
		}else if(scrollY>=positionUpper && scrollY<=positionUpperHidden){
			x = Math.abs((scrollY - positionUpper) * 55 / scrollLength);
		}else if(scrollY<positionUpper && scrollY>positionBottom){
			x=0;
		}else x = 55;
		const degrees = x * 5;
		if(i==0 || i==3 || i==6 || i==9){
			circle[i].style.transform = `translate(-${x}vw) rotate(-${degrees}deg)`;
		}else{
			circle[i].style.transform = `translate(${x}vw) rotate(${degrees}deg)`;
		}
	}
})