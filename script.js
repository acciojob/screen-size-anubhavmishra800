//your JS code here. If required.
const size=document.createElement("h1");
let div=document.getElementById("sizeInfo");
size.innerText='Width:${window.innerWidth} and Height:${window.innerHeight}';
div.append(size);

window.onresize=function(){
	size.innerText=`Width: ${window.innerWidth} and Height: ${window.innerHeight}`
};
