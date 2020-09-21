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
  "https://ae01.alicdn.com/kf/H21b5f6b8496141a1979a33666e1074d9x.jpg",
  "https://i.pximg.net/img-original/img/2015/12/10/16/28/17/53969178_p1.jpg",
  "https://i.pximg.net/img-original/img/2015/12/10/16/28/17/53969178_p3.jpg",
  "https://i.pximg.net/img-original/img/2015/12/10/16/28/17/53969178_p4.jpg",
  "https://i.pximg.net/img-original/img/2015/12/10/16/28/17/53969178_p6.jpg",
  "https://i.pximg.net/img-original/img/2015/12/10/16/28/17/53969178_p7.jpg",
  "https://i.pximg.net/img-original/img/2015/12/10/16/28/17/53969178_p8.jpg",
  "https://i.pximg.net/img-original/img/2015/12/10/16/28/17/53969178_p9.jpg",
  "https://i.pximg.net/img-original/img/2015/12/10/16/28/17/53969178_p10.jpg",
  "https://i.pximg.net/img-original/img/2020/05/31/00/03/14/81974290_p0.jpg",
  "https://i.pximg.net/img-original/img/2020/05/10/00/03/14/81438900_p0.jpg",
  "https://i.pximg.net/img-original/img/2019/06/10/00/03/26/75148936_p0.jpg",
  "https://i.pximg.net/img-original/img/2019/05/13/12/10/01/74707810_p1.jpg",
  "https://i.pximg.net/img-original/img/2019/05/20/12/25/16/74817763_p0.jpg",
  "https://i.pximg.net/img-original/img/2019/05/20/12/25/16/74817763_p1.jpg",
  
];
// 调用随机背景
xiaokang.randomBg();

xiaokang.cheatTitle([leaveTitle, backTitle]);

xiaokang.magicCirle([radius, densety, color, clearOffset]);
xiaokang.footFish();

var full_page = document.getElementsByClassName("full_page"); if (full_page.length != 0) { full_page[0].style.background = "transparent"; }