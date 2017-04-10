/**
 * Created by Jeffrey on 2017/3/2.
 */
function clickchange () {
    $(".top-new-button-title-one").click(function () {
       $(".top-new-button-two").css("display","none");
       $(".top-new-button-one").css("display","block");
    });
    $(".top-new-button-title-two").click(function () {
        $(".top-new-button-one").css("display","none");
        $(".top-new-button-two").css("display","block");
    });
    $(".sign-form-submit").click(function () {
       $(".sign-form-submit").attr("src","img/submited.png");
        setTimeout(function () {
            $(".sign-form-submit").attr("src","img/submit.png");
        },100);
    });
    $(".footer-buttons-online").click(function () {
       $(".footer-buttons-wrap-left").attr("src","img/footerButtonWrapSideSubmited.png");
        setTimeout(function () {
            $(".footer-buttons-wrap-left").attr("src","img/footerButtonWrapSide.png");
        },100);
    });
    $(".footer-buttons-wrap-left").click(function () {
        $(".footer-buttons-wrap-left").attr("src","img/footerButtonWrapSideSubmited.png");
        setTimeout(function () {
            $(".footer-buttons-wrap-left").attr("src","img/footerButtonWrapSide.png");
        },100);
    });
    $(".footer-buttons-back-top").click(function () {
        $(".footer-buttons-wrap-right").attr("src","img/footerButtonWrapSideSubmited.png");
        setTimeout(function () {
            $(".footer-buttons-wrap-right").attr("src","img/footerButtonWrapSide.png");
        },100);
    });
    $(".footer-buttons-wrap-right").click(function () {
        $(".footer-buttons-wrap-right").attr("src","img/footerButtonWrapSideSubmited.png");
        setTimeout(function () {
            $(".footer-buttons-wrap-right").attr("src","img/footerButtonWrapSide.png");
        },100);
    });
    $(".footer-buttons-tel").click(function () {
        $(".footer-buttons-wrap-center").attr("src","img/footerButtonWrapCenterSubmited.png");
        setTimeout(function () {
            $(".footer-buttons-wrap-center").attr("src","img/footerButtonWrapCenter.png");
        },100);
    });
    $(".footer-buttons-wrap-center").click(function () {
        $(".footer-buttons-wrap-center").attr("src","img/footerButtonWrapCenterSubmited.png");
        setTimeout(function () {
            $(".footer-buttons-wrap-center").attr("src","img/footerButtonWrapCenter.png");
        },100);
    });
}
