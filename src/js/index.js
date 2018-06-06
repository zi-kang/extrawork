/**
 * Created by huzikang on 17/10/14.
 */
function indexFunc() {
    $(function() {
        FastClick.attach(document.body);
    });
    var pageNormal = $('.webAR-index-normal'),
        pageIOS = $('.webAR-index-iOS');
    function is_iOSWechat() {
        var ua = navigator.userAgent.toLowerCase(),
            isWechat = 1,
            is_iOS = 1;
        if (/iphone|ipad|ipod/.test(ua)) {
            is_iOS = 2;
        } else if (/android/.test(ua)) {
            is_iOS = 1;
        }
        if(ua.match(/MicroMessenger/i)=="micromessenger") {
            isWechat = 2;
        } else {
            isWechat = 1;
        }
        if( isWechat == 2 && is_iOS == 2 ){
            pageNormal.addClass('dn');
            pageIOS.removeClass('dn');
         }else{
            pageIOS.addClass('dn');
            pageNormal.removeClass('dn');
        }
    }
    is_iOSWechat();

}

