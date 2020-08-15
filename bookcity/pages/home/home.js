// pages/home/home.js
const app = getApp()
Page({


  /**
   * 页面的初始数据
   */
  data: {
    one:true,
    list:[
      {
        image:"../../image/home_1.jpg",
        text:"科幻"
      },
      {
        image:"../../image/home_2.jpg",
        text:"生活"
      },
      {
        image:"../../image/home_3.jpg",
        text:"露营"
      },
      {
        image:"../../image/home_1.jpg",
        text:"职场"
      },
      {
        image:"../../image/home_2.jpg",
        text:"职场"
      },
      {
        image:"../../image/home_3.jpg",
        text:"露营"
      }
    ],
    datas:[
      {
        image:"../../image/author_1.jpg",
        text:"刘慈欣"
      },
      {
        image:"../../image/author_2.jpg",
        text:"张爱玲"
      },
      {
        image:"../../image/author_3.jpg",
        text:"韩寒"
      },
      {
        image:"../../image/author_3.jpg",
        text:"张嘉佳"
      },
      {
        image:"../../image/author_2.jpg",
        text:"海子"
      },
      {
        image:"../../image/author_1.jpg",
        text:"莫言"
      }
    ],
    arr:[
      {
        image:"../../image/newproducts_1.jpg",
        text:"三体：死神永生",
      },
      {
        image:"../../image/newproducts_2.jpg",
        text:"人类简史",
      },
      {
        image:"../../image/newproducts_3.jpg",
        text:"徐三观卖血记",
      },
      {
        image:"../../image/newproducts_1.jpg",
        text:"三体：死神永生",
      },
      {
        image:"../../image/newproducts_2.jpg",
        text:"人类简史",
      },
      {
        image:"../../image/newproducts_3.jpg",
        text:"徐三观卖血记",
      }
      
    ],
    arr2: [],
    list4: [{
      id: 1,
      src: '/image/books_img1.png',
      font: '三体:死神永生',
      url: "",
      fonts: '刘慈欣'
  }, {
      id: 2,
      src: '/image/search1.png',
      font: '人类简史',
      url: "",
      fonts: '尤瓦尔·郝拉利'
  }, {
      id: 3,
      src: '../../image/newproducts_2.jpg',
      font: '许三观卖血记',
      url: "",
      fonts: '余华'
  }],
  
    
  },
  inp_focus:function () {
    console.log(111);
    
    this.setData({
        one:false,
        two:true
    })
},
inp_focusx:function () {
    console.log(111);
    
    this.setData({
        one:true,
        two:false
    })
},
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})