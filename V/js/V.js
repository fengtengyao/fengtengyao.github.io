window.onload=function() {
	//获取元素
	var box = document.getElementById('box');
	var btn= document.getElementById('btn');
	var n=0;
	var L=0;
	var T=0;
	var str='';
	//点击btn时，
	btn.onclick=function() {
		//清除样式
		for(var i=0;i<5;i++) {
			str='';
		}
		for(var i=0;i<5;i++) {
			if(n%4==0){
				L=i*100;
				if(i<=2){
					T=i*100;
				}else{
					T=400-i*100;
				}
			}
			if(n%4==1){
				T=i*100;
				if(i<=2){
					L=400-i*100;
				}else{
					L=i*100;
				}
			}
			if(n%4==2){
				L=i*100;
				if(i<=2){
					T=400-i*100;
				}else{
					T=i*100;
				}
			}
			if(n%4==3){
				T=i*100;
				if(i<=2){
					L=i*100;
				}else{
					L=400-i*100;
				}
			}
			str+='<div style="left:'+L+'px;top:'+T+'px"></div>';
		}
		box.innerHTML=str;
		n++;
	}
}
