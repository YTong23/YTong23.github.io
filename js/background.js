var xiaokang = new xkTool(param1,param2);
var xiaokang = new xkTool();
var xiaokang = new xkTool(
  "https://ae01.alicdn.com/kf/H21b5f6b8496141a1979a33666e1074d9x.jpg"
);
xiaokang.changeBanner(param);

xiaokang.randomBanner(
    "https://github.com/cnyist/banner/tree/master", // 前半部分网址
    "-min.jpg", // 后半部分网址
    0, // 随机数开始范围
    2, // 随机数结束范围
    true // 是否开启滤镜 默认不开启
);
xiaokang.mobileSidebar();
xiaokang.codeFull();
xiaokang.bgPage();
xiaokang.imgList = [
  "https://ae01.alicdn.com/kf/H21b5f6b8496141a1979a33666e1074d9x.jpg"];
// 调用随机背景
xiaokang.randomBg();

xiaokang.cheatTitle([leaveTitle, backTitle]);

xiaokang.magicCirle([radius, densety, color, clearOffset]);
xiaokang.footFish();

var card_category_list = document.getElementsByClassName(
    "card-category-list child"
);




