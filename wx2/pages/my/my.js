const app = getApp();
{
  Page({
    data: {
      mapmsg: '他目所在坐标：',
      flag: false,
      markers: [{
        iconPath: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=448971057,2958400385&fm=200&gp=0.jpg",
        id: 0,
        latitude: 40.0412178503,
        longitude: 116.4145660400,
        width: 50,
        height: 50
      }],
      polyline: [{
        points: [{
          latitude: 40.0412178503,
          longitude: 116.4145660400,
        }, {
          latitude: 40.0412178503,
          longitude: 116.4145660400,
        }],
        color: "#FF0000DD",
        width: 2,
        dottedLine: true
      }],
      controls: [{
        id: 1,
        iconPath: '/resources/location.png',
        position: {
          left: 0,
          top: 300 - 50,
          width: 50,
          height: 50
        },
        clickable: true
      }]
    },
    touchstart:function(){
      this.setData({mapmsg:'你相信这是真的吗？'});
    },
    touchend:function(){
      this.setData({mapmsg:'没错，这是真的。'});
    }
  })
}