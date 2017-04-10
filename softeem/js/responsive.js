/**
 * Created by Jeffrey on 2017/2/28.
 */



function responsive() {
    var windowWidth = $(window).width();
    setResponsiveSize();

    //计算页面大小调整后的尺寸
    //size为默认屏幕尺寸下的大小
    //windowWidth为当前调整后的屏幕的宽度
    //suffix为单位值
    function getResponsiveSize (size,windowWidth,suffix) {

            //获取页面调整比例
            var proportion = parseInt(windowWidth)/parseFloat(1080);
            //计算页面响应调整后，相应元素的尺寸
            var trueSize = size * proportion;
            var computedSize = trueSize.toFixed(1);
            return computedSize + suffix;

    }
    function setResponsiveSize  () {
        var signFormFontSize = getResponsiveSize(40,windowWidth,'px');
        var hotClassFontSize = getResponsiveSize(34,windowWidth,'px');
        var moduleTitleFontSize = getResponsiveSize(40,windowWidth,'px');
        var moduleTitleBorderSize = getResponsiveSize(11,windowWidth,'px');
        var moduleTitleBorder = "blue solid" + " " + moduleTitleBorderSize;
        var getJobTitleFontSize =getResponsiveSize(40,windowWidth,'px');
        var getJobFontSize = getResponsiveSize(30,windowWidth,'px');
        var getJobBorderSize = getResponsiveSize(6.5,windowWidth,'px');
        var getJobBorder = "darkred solid" + " " + getJobBorderSize;
        var cutOffHeight = getResponsiveSize(22,windowWidth,'px');
        var footerInfoLinkFontSize = getResponsiveSize(20,windowWidth,'px');
        var footerInfoDetailFontSize = getResponsiveSize(14,windowWidth,'px');
        var signStatusSliderFontSize = getResponsiveSize(36,windowWidth,'px');
        var signStatusSliderHeight = getResponsiveSize(68,windowWidth,'px');
        var signStatusSliderLiPadding = getResponsiveSize(10,windowWidth,'px');
        var sliderWidth = getResponsiveSize(410,windowWidth,'px');
        var sliderHeight = getResponsiveSize(350,windowWidth,'px');
        var sliderListWidth = sliderWidth*6;
        var sliderButtomFontSize = getResponsiveSize(16,windowWidth,'px');
        var sliderButtomSpanSize = getResponsiveSize(10,windowWidth,'px');
        var topNewArticleHeight = getResponsiveSize(350,windowWidth,'px');
        var topNewTitleHeight = getResponsiveSize(66,windowWidth,'px');
        var topNewButtonTitleFontSize = getResponsiveSize(28,windowWidth,'px');
        var topNewTitleFontSize = getResponsiveSize(22,windowWidth,'px');
        var topNewInformationFontSize = getResponsiveSize(18,windowWidth,'px');
        var topNewInformationLineHeight = getResponsiveSize(30,windowWidth,'px');
        $(".hot-class").css("font-size",hotClassFontSize);
        $("#sign-form").css("font-size",signFormFontSize);
        $("#sign-form input").css("height",$("#sign-form img").height());
        $(".module-title").css("font-size",moduleTitleFontSize);
        $(".module-title").css("border-left",moduleTitleBorder);
        $(".job-info-name").css("font-size",getJobTitleFontSize);
        $(".job-info-detail").css("font-size",getJobFontSize);
        $(".job-info-name").css("border-bottom",getJobBorder);
        $(".footer-info-link").css("font-size",footerInfoLinkFontSize);
        $(".footer-info-link a").css("font-size",footerInfoLinkFontSize);
        $(".footer-info-detail").css("font-size",footerInfoDetailFontSize);
        $(".sign-status-slider").css("font-size",signStatusSliderFontSize);
        $(".sign-status-slider").css("height",signStatusSliderHeight);
        $(".sign-status-slider ul li").css("padding",signStatusSliderLiPadding);
        $(".slider").css("width",sliderWidth);
         $(".slider").css("height",sliderHeight);
         $(".slider-list").css("width",sliderListWidth);
         $(".slider-list").css("left",(-(sliderWidth)));
         $(".slider-list img").css("width",sliderWidth);
         $(".slider-list img").css("height",sliderHeight);
         $(".slider-bottom").css("font-size",sliderButtomFontSize);
         $("#buttons span").css("width",sliderButtomSpanSize);
         $("#buttons span").css("height",sliderButtomSpanSize);
         $(".top-new-article").css("height",topNewArticleHeight);
         $(".top-new-button-title-one").css("height",topNewTitleHeight);
        $(".top-new-button-title-one").css("line-height",topNewTitleHeight);
        $(".top-new-button-title-two").css("height",topNewTitleHeight);
        $(".top-new-button-title-two").css("line-height",topNewTitleHeight);
        $(".top-new-button-title-one").css("font-size",topNewButtonTitleFontSize);
        $(".top-new-button-title-two").css("font-size",topNewButtonTitleFontSize);
        $(".top-new-information").css("font-size",topNewInformationFontSize);
        $(".top-new-information").css("line-height",topNewInformationLineHeight);
        $(".top-new-title").css("font-size",topNewTitleFontSize);
        $(".cut-off").css("height",cutOffHeight);
        var heightFooter=$('.footer-buttons-wrap-center').height();
        $('.footer-buttons').height(heightFooter);

    }
    
}


