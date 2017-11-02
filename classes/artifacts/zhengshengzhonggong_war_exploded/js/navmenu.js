// JavaScript Document
function nav_on(id){
	$("#nav dl").css("display","none"); 
	$("#nav" + id +" dl").css("display","block");
	$("#nav" + id +" > a").addClass("nav_on"); 
}
function nav_off(id){
	$("#nav dl").css("display","none"); 
	$("#nav" + id +" > a").removeClass("nav_on");
}
//三个标签
var tID=1;
function ShowTab(ID){
 if(ID!=tID){
  document.getElementById("Tab"+tID).className='';
  document.getElementById("Tab"+ID).className="tabOn";
  document.getElementById("box"+tID).style.display='none';
  document.getElementById("box"+ID).style.display='block';
  tID=ID;
 }
}



//选项卡切换1
var tID=1;
function ShowTab(ID){
 if(ID!=tID){
  document.getElementById("Tab"+tID).className='';
  document.getElementById("Tab"+ID).className="tabOn";
  document.getElementById("box"+tID).style.display='none';
  document.getElementById("box"+ID).style.display='block';
  tID=ID;
 }
}


//选项卡切换2
var tIDp=1;
function ShowTabp(IDp){
 if(IDp!=tIDp){
  document.getElementById("Tabp"+tIDp).className='';
  document.getElementById("Tabp"+IDp).className="tabOn";
  document.getElementById("boxp"+tIDp).style.display='none';
  document.getElementById("boxp"+IDp).style.display='block';
  tIDp=IDp;
 }
}

//选项卡切换3
var tIDt=1;
function ShowTabt(IDt){
 if(IDt!=tIDt){
  document.getElementById("Tabt"+tIDt).className='';
  document.getElementById("Tabt"+IDt).className="tabOn";
  document.getElementById("boxt"+tIDt).style.display='none';
  document.getElementById("boxt"+IDt).style.display='block';
  tIDt=IDt;
 }
}

//选项卡切换4
var tIDd=1;
function ShowTabd(IDd){
 if(IDd!=tIDd){
  document.getElementById("Tabd"+tIDd).className='';
  document.getElementById("Tabd"+IDd).className="tabOn";
  document.getElementById("boxd"+tIDd).style.display='none';
  document.getElementById("boxd"+IDd).style.display='block';
  tIDd=IDd;
 }
}
//选项卡切换5
var tIDd=1;
function ShowTabd(IDd){
 if(IDd!=tIDd){
  document.getElementById("Tabd"+tIDd).className='';
  document.getElementById("Tabd"+IDd).className="tabOn";
  document.getElementById("boxd"+tIDd).style.display='none';
  document.getElementById("boxd"+IDd).style.display='block';
  tIDd=IDd;
 }
}