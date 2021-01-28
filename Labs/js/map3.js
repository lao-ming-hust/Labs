var map = new AMap.Map('container', {
    resizeEnable: true,
    zoom:17,
    center: [114.416503,30.517841]
});
var marker = new AMap.Marker({
    position: new AMap.LngLat(114.416503,30.517841),
    title: "位置标题"
 });

map.add(marker);