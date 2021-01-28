var map = new AMap.Map('container', {
    resizeEnable: true,
    zoom:16,
    center: [114.425825,30.511117]
});
var marker = new AMap.Marker({
    position: new AMap.LngLat(114.425825,30.511117),
    title: "位置标题"
 });

map.add(marker);