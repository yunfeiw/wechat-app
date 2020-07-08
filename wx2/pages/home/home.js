const app = getApp();
{
  Page({
    data: {
      value: '',
      height: '',
      flag:false,
      pageI:0,
      imgsrc: 'http://pic3.16pic.com/00/03/88/16pic_388730_b.jpg',
      titArr:[
        '居家',
        '餐厨',
        '饮食',
        '配件',
        '洗护',
        '服装'
      ],
      imgarr: [
        {
          src: 'http://img3.imgtn.bdimg.com/it/u=1595345478,3570841273&fm=26&gp=0.jpg',
          name: '居家1'
        }, {
          src: 'http://img3.imgtn.bdimg.com/it/u=2705152348,2028908319&fm=200&gp=0.jpg',
          name: '居家1'
        }, {
          src: 'http://e.hiphotos.baidu.com/image/h%3D300/sign=8000a165df1b0ef473e89e5eedc551a1/b151f8198618367afe76969623738bd4b21ce5fa.jpg',
          name: '居家1'
        }, {
          src: 'http://a.hiphotos.baidu.com/image/h%3D300/sign=de08a1f093510fb367197197e932c893/b999a9014c086e062550d0020f087bf40bd1cbfb.jpg',
          name: '居家1'
        }, {
          src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2558410633,841818110&fm=200&gp=0.jpg',
          name: '居家1'
        }, {
          src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4150972520,4291215705&fm=26&gp=0.jpg',
          name: '居家1'
        }, {
          src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4201594846,4178139206&fm=26&gp=0.jpg',
          name: '居家1'
        }, {
          src: 'https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=97520644516034a836e2be81fb1249d9/7c1ed21b0ef41bd5a31967b15cda81cb39db3d28.jpg',
          name: '居家1'
        }, {
          src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=550435412,1889897547&fm=26&gp=0.jpg',
          name: '居家1'
        }, {
          src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3758349619,3722832297&fm=26&gp=0.jpg',
          name: '居家1'
        }, {
          src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2944405032,3722487110&fm=11&gp=0.jpg',
          name: '居家1'
        }
      ],
      imgdata:[
        [
          {
            src: 'http://img3.imgtn.bdimg.com/it/u=1595345478,3570841273&fm=26&gp=0.jpg',
            name: '居家1'
          }, {
            src: 'http://img3.imgtn.bdimg.com/it/u=2705152348,2028908319&fm=200&gp=0.jpg',
            name: '居家1'
          }, {
            src: 'http://e.hiphotos.baidu.com/image/h%3D300/sign=8000a165df1b0ef473e89e5eedc551a1/b151f8198618367afe76969623738bd4b21ce5fa.jpg',
            name: '居家1'
          }, {
            src: 'http://a.hiphotos.baidu.com/image/h%3D300/sign=de08a1f093510fb367197197e932c893/b999a9014c086e062550d0020f087bf40bd1cbfb.jpg',
            name: '居家1'
          }, {
            src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2558410633,841818110&fm=200&gp=0.jpg',
            name: '居家1'
          }, {
            src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4150972520,4291215705&fm=26&gp=0.jpg',
            name: '居家1'
          }, {
            src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4201594846,4178139206&fm=26&gp=0.jpg',
            name: '居家1'
          }, {
            src: 'https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=97520644516034a836e2be81fb1249d9/7c1ed21b0ef41bd5a31967b15cda81cb39db3d28.jpg',
            name: '居家1'
          }, {
            src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=550435412,1889897547&fm=26&gp=0.jpg',
            name: '居家1'
          }, {
            src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3758349619,3722832297&fm=26&gp=0.jpg',
            name: '居家1'
          }, {
            src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2944405032,3722487110&fm=11&gp=0.jpg',
            name: '居家1'
          }
        ],
        [
          {
            src: 'http://img1.imgtn.bdimg.com/it/u=1663062134,957125177&fm=26&gp=0.jpg',
            name: '餐具1'
          },
          {
            src: 'http://img3.imgtn.bdimg.com/it/u=3904922212,1268945217&fm=26&gp=0.jpg',
            name: '餐具1'
          },
          {
            src: 'http://img0.imgtn.bdimg.com/it/u=1139967132,2032797456&fm=26&gp=0.jpg',
            name: '餐具1'
          },
          {
            src: 'http://img2.imgtn.bdimg.com/it/u=2924014946,808516596&fm=26&gp=0.jpg',
            name: '餐具1'
          },
          {
            src: 'http://img3.imgtn.bdimg.com/it/u=3648624634,4005723405&fm=26&gp=0.jpg',
            name: '餐具1'
          },
          {
            src: 'http://img0.imgtn.bdimg.com/it/u=2676744045,1562285523&fm=26&gp=0.jpg',
            name: '餐具1'
          },
          {
            src: 'http://img4.imgtn.bdimg.com/it/u=1252026777,3931489787&fm=26&gp=0.jpg',
            name: '餐具1'
          },
          {
            src: 'http://img0.imgtn.bdimg.com/it/u=2600581134,3134373436&fm=26&gp=0.jpg',
            name: '餐具1'
          },
        ],
        [
          {
            src: 'http://img0.imgtn.bdimg.com/it/u=1678216310,3750105134&fm=26&gp=0.jpg',
            name: '饮食'
          },
          {
            src: 'http://img3.imgtn.bdimg.com/it/u=1696940072,1357737055&fm=26&gp=0.jpg',
            name: '饮食'
          },
          {
            src: 'http://img4.imgtn.bdimg.com/it/u=1753312632,862510846&fm=26&gp=0.jpg',
            name: '饮食'
          },
          {
            src: 'http://img2.imgtn.bdimg.com/it/u=3854133375,1983936981&fm=26&gp=0.jpg',
            name: '饮食'
          },
          {
            src: 'http://img2.imgtn.bdimg.com/it/u=500312826,3135361598&fm=26&gp=0.jpg',
            name: '饮食'
          }
        ],
        [
          {
            src: 'http://img1.imgtn.bdimg.com/it/u=1214125359,387226924&fm=11&gp=0.jpg',
            name: '配件'
          },
          {
            src: 'http://img1.imgtn.bdimg.com/it/u=1728651953,1299084848&fm=11&gp=0.jpg',
            name: '配件'
          },
          {
            src: 'http://img1.imgtn.bdimg.com/it/u=3978088556,4198260735&fm=11&gp=0.jpg',
            name: '配件'
          },
          {
            src: 'http://img5.imgtn.bdimg.com/it/u=3048752415,3134937684&fm=26&gp=0.jpg',
            name: '配件'
          },
          {
            src: 'http://img4.imgtn.bdimg.com/it/u=1150916487,3783456203&fm=26&gp=0.jpg',
            name: '配件'
          },
          {
            src: 'http://img3.imgtn.bdimg.com/it/u=2626488221,2913178880&fm=26&gp=0.jpg',
            name: '配件'
          },
          {
            src: 'http://img3.imgtn.bdimg.com/it/u=2879691859,2003200176&fm=11&gp=0.jpg',
            name: '配件'
          },
          {
            src: 'http://img1.imgtn.bdimg.com/it/u=3907726206,854396123&fm=26&gp=0.jpg',
            name: '配件'
          },
          {
            src: 'http://img5.imgtn.bdimg.com/it/u=3646084144,1833891653&fm=26&gp=0.jpg',
            name: '配件'
          }
        ],
        [
          {
            src: 'http://img1.imgtn.bdimg.com/it/u=1031602323,2388561514&fm=26&gp=0.jpg',
            name: '洗护'
          },
          {
            src: 'http://img0.imgtn.bdimg.com/it/u=3601051373,1114982045&fm=26&gp=0.jpg',
            name: '洗护'
          },
          {
            src: 'http://img2.imgtn.bdimg.com/it/u=423116603,414827721&fm=26&gp=0.jpg',
            name: '洗护'
          }
        ],
        [
          
        ]
      ]
    },
    onLoad: function () {
      if (this.data.imgarr.length==0){
        this.setData({flag:true});
      }
      var _this = this;
      var query = wx.createSelectorQuery();
      query.select('.tit-box').boundingClientRect();
      query.select('.image-row').boundingClientRect();
      query.select('.search').boundingClientRect();

      wx.getSystemInfo({
        success: function (e) {
          query.exec((res) => {
            var listHeight1 = res[0].height; // 获取list高度
            var listHeight2 = res[1].height; // 获取list高度
            var listHeight3 = res[2].height; // 获取list高度
            var _height = listHeight1 + listHeight2 + listHeight3;

            _this.setData({ height: e.windowHeight - _height });
          })
        }
      })
    },
    bindReplaceInput: function (e) {
      console.log(e)
      this.setData({ value5: e.detail.value })

    },
    // 导航
    listClick:function(e){
      if (this.data.imgdata[e.currentTarget.dataset.i] == 0) {
        this.setData({ 
          flag: true,
          pageI: e.currentTarget.dataset.i,
          imgarr: this.data.imgdata[e.currentTarget.dataset.i]
        });
      }else{
        this.setData({ 
          flag: false,
          pageI: e.currentTarget.dataset.i,
          imgarr: this.data.imgdata[e.currentTarget.dataset.i]
        })
      }
    }
  })
}