function shoucang(sTitle, sURL) {
    try {
        window.external.addFavorite(sURL, sTitle);
    } catch(e) {
        try {
            window.sidebar.addPanel(sTitle, sURL, "");
        } catch(e) {
            alert("加入收藏失败，请使用Ctrl+D进行添加");
        }
    }
}

function SetHome(obj, vrl) {
    try {
        obj.style.behavior = 'url(#default#homepage)';
        obj.setHomePage(vrl);
    } catch(e) {
        if (window.netscape) {
            try {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
            } catch(e) {
                alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入“about:config”并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。");
            }
            var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
            prefs.setCharPref('browser.startup.homepage', vrl);
        } else {
            alert("您的浏览器不支持，请按照下面步骤操作：1.打开浏览器设置。2.点击设置网页。3.输入：" + vrl + "点击确定。");
        }
    }
}

// 按比例生成缩略图									----------------------------
function DrawImage(MyPic,W,H){
  var flag=false;
  var image=new Image();
  image.src=MyPic.src;
  if(image.width>0 && image.height>0){
    flag=true;
    if(image.width/image.height>= W/H){
      if(image.width>W){  
        MyPic.width=W;
        MyPic.height=(image.height*W)/image.width;
      }
	  else{
        MyPic.width=image.width;  
        MyPic.height=image.height;
      }
    }
    else{
      if(image.height>H){  
        MyPic.height=H;
        MyPic.width=(image.width*H)/image.height;     
      }
	  else{
        MyPic.width=image.width;  
        MyPic.height=image.height;
      }
    }
  }
}

// 点击验证码图换数字									----------------------------
function UpVerifyCode(){
  document.getElementById("PhotoSN").src = "/Inc/VerifyCode.asp?t="+Math.random();
}

// 指向变换背景图片  									----------------------------
function ChangeBackground(MyObj,NewBackground){ 
  MyObj.style.backgroundImage=NewBackground;
}   

