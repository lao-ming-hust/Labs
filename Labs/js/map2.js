var map = new AMap.Map('container', {
    resizeEnable: true,
    zoom:15,
    center: [114.433754,30.509368]
});
var marker = new AMap.Marker({
    position: new AMap.LngLat(114.433754,30.509368),
    title: "位置标题"
 });

map.add(marker);
