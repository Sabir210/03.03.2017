var a=0,b=0,c=0;

function acc1(){
	a++;
	if(a%2!=0){
document.getElementsByTagName("p")[0].style.display="block";
}
else{
document.getElementsByTagName("p")[0].style.display="none";
}
}
function acc2(){
	b++;
	if(b%2!=0){
document.getElementsByTagName("p")[1].style.display="block";
}
else{
document.getElementsByTagName("p")[1].style.display="none";
}
}
function acc3(){
	c++;
	if(c%2!=0){
document.getElementsByTagName("p")[2].style.display="block";
}
else{
document.getElementsByTagName("p")[2].style.display="none";
}
}