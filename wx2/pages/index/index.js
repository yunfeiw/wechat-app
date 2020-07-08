//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    fontColor: '#000',
    imgUrls: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544275133908&di=b54c6ef9e909cac481ba2db300c2287c&imgtype=0&src=http%3A%2F%2Fpic64.nipic.com%2Ffile%2F20150415%2F12685662_194554871000_2.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544275333154&di=7ddfd86b123b08530750a6d8b5ca067f&imgtype=0&src=http%3A%2F%2Fwww.zcool.com.cn%2Fcommunity%2F037861d5935334ca8012193a3e0ac0f.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544275167392&di=d2b2a9ba90b53bc9d84954480cfe5ae9&imgtype=0&src=http%3A%2F%2Fuploads.xuexila.com%2Fallimg%2F1608%2F834-160P914554Y34.png',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544275354299&di=5d0969f536682e16a66649098f908931&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F13%2F43%2F91g58PIChet_1024.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544275292175&di=e58ac3a90d156cee75cd2643f0663f42&imgtype=0&src=http%3A%2F%2Fimg009.hc360.cn%2Fm6%2FM08%2FE0%2F20%2FwKhQoVVEX9GEB-kYAAAAAAmSeUw069.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544275372712&di=aa6a49e6ac9776f96ea23488956ffb4d&imgtype=0&src=http%3A%2F%2Fpic59.nipic.com%2Ffile%2F20150129%2F10252901_094331390606_2.jpg',
    ],
    qdbook: [
      {
        name: '指南 源码程序 app web前端开发app实战书籍',
        text: '指南 源码程序 app web...',
        class: 'list-item-b',
        url: 'https://img.alicdn.com/imgextra/i2/1238806031580667519/TB2r8u8X9B0XKJjSZFsXXaxfpXa_!!0-saturn_solar.jpg_220x220.jpg_.webp'
      },
      {
        name: 'css权威指南（第三版）',
        text: 'css权威指南（第三版）',
        class: 'list-item-b',
        url: 'https://img.alicdn.com/imgextra/i3/1057706049236169282/TB2GbTIuhlmpuFjSZPfXXc9iXXa_!!0-saturn_solar.jpg_220x220.jpg_.webp'
      },
      {
        name: 'javascript高级程序设计',
        text: 'javascript高级程序设计',
        class: 'list-item-b',
        url: 'https://img.alicdn.com/imgextra/i2/43176587/TB2v_L4uAomBKNjSZFqXXXtqVXa_!!0-saturn_solar.jpg_220x220.jpg_.webp'
      },
      {
        name: '了不起的nodeJS',
        text: '了不起的nodeJS',
        class: 'list-item-b',
        url: 'https://img.alicdn.com/imgextra/i4/111354297/TB2xIDauC8YBeNkSnb4XXaevFXa_!!0-saturn_solar.jpg_260x260.jpg'
      },
      {
        name: 'React Native精解与实战',
        text: 'React Native精解与实战',
        class: 'list-item-b',
        url: 'https://img.alicdn.com/imgextra/i4/102794813/O1CN011lQOj0sKxBNzAut_!!0-saturn_solar.jpg_260x260.jpg'
      },
      {
        name: 'nmer丛书经典 goexpressreact 使用 开发',
        text: 'nmer丛书经典 goexpress...',
        class: 'list-item-b',
        url: 'https://img.alicdn.com/imgextra/i3/110271687/TB2sMEJrVmWBuNjSspdXXbugXXa_!!0-saturn_solar.jpg_260x260.jpg'
      },
      {
        name: 'Oracle数据库管理从入门到精通',
        text: 'Oracle数据库管理从入门到精通',
        class: '',
        url: 'https://img.alicdn.com/imgextra/i3/27553679/O1CN011d31b0U6YJx83t2_!!0-saturn_solar.jpg_260x260.jpg'
      },
      {
        name: '正版 有一种境界叫舍得 心灵励志自我调节',
        text: '正版 有一种境界叫舍得 心...',
        class: '',
        url: 'https://img.alicdn.com/imgextra/i4/23771505/TB2FyD3f63z9KJjy0FmXXXiwXXa_!!0-saturn_solar.jpg_260x260.jpg'
      },
    ],
    iconFont: [
      { icon: 'icon-yinle', name: '音乐' },
      { icon: 'icon-wendang', name: '文档' },
      { icon: 'icon-zonghe', name: '综合' },
      { icon: 'icon-shipin', name: '视频' },
      { icon: 'icon-time', name: '记忆' },
      { icon: 'icon-kuaileerge', name: '迷' }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    toView: 'green',
    author: false,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    x: 0,
    y: 0,
    motto: 'Hello World',
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
