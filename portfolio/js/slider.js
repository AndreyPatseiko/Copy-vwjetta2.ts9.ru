var x=Number(1);

function next(){	
	x+=1;
	if (x==3){
		x=2
	}
	
	if (x==1)	{document.getElementById('box3').style.left='2000px';document.getElementById('box3').style.visibility='hidden';document.getElementById('box2').style.visibility='hidden';document.getElementById('box2').style.left='1000px';document.getElementById('box1').style.visibility='visible';document.getElementById('box1').style.left='40px';document.getElementById('b_right').style.visibility='visible';document.getElementById('b_left').style.visibility='hidden';}
	if (x==2) {document.getElementById('box1').style.left='-1000px';document.getElementById('box1').style.visibility='hidden';document.getElementById('box2').style.visibility='visible';document.getElementById('box2').style.left='40px';document.getElementById('box3').style.visibility='hidden';document.getElementById('box3').style.left='1000px';document.getElementById('b_right').style.visibility='hidden';document.getElementById('b_left').style.visibility='visible';}
	// if (x==3) {document.getElementById('box2').style.left='-1000px';document.getElementById('box2').style.visibility='hidden';document.getElementById('box3').style.visibility='visible';document.getElementById('box3').style.left='40px';document.getElementById('box1').style.visibility='hidden';document.getElementById('box1').style.left='-2000px';document.getElementById('b_right').style.visibility='hidden';document.getElementById('b_left').style.visibility='visible';}
}


function back(){
	
	x-=1;
	if (x==0){
		x=1
	}
	if (x==1)	{document.getElementById('box3').style.left='2000px';document.getElementById('box3').style.visibility='hidden';document.getElementById('box2').style.visibility='hidden';document.getElementById('box2').style.left='1000px';document.getElementById('box1').style.visibility='visible';document.getElementById('box1').style.left='40px';document.getElementById('b_right').style.visibility='visible';document.getElementById('b_left').style.visibility='hidden';}
	if (x==2) {document.getElementById('box1').style.left='-1000px';document.getElementById('box1').style.visibility='hidden';document.getElementById('box2').style.visibility='visible';document.getElementById('box2').style.left='40px';document.getElementById('box3').style.visibility='hidden';document.getElementById('box3').style.left='1000px';document.getElementById('b_right').style.visibility='hidden';document.getElementById('b_left').style.visibility='visible';}
	// if (x==3) {document.getElementById('box2').style.left='-1000px';document.getElementById('box2').style.visibility='hidden';document.getElementById('box3').style.visibility='visible';document.getElementById('box3').style.left='40px';document.getElementById('box1').style.visibility='hidden';document.getElementById('box1').style.left='-2000px';document.getElementById('b_right').style.visibility='hidden';document.getElementById('b_left').style.visibility='visible';}
}






