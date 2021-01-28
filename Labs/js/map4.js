var map = new AMap.Map('container', {
    resizeEnable: true,
    zoom:15,
    center: [114.5838,30.469875]
});
var marker = new AMap.Marker({
    position: new AMap.LngLat(114.5838,30.469875),
    title: "位置标题"
 });

map.add(marker);