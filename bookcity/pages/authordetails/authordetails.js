// pages/authordetails/authordetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:3,
   
    datas:[
      {
        number:"1286",
        text:"关注"
      },
      {
        number:"3368",
        text:"粉丝"
      },
      {
        number:"6673",
        text:"喜欢"
      },
    ],
    list:[
      {
        image:"../../image/book_1.jpg",
        book_name:"鱼王",
        stars:"../../image/stars.jpg",
        score:"5.0",
        introduce:"全书由十三个内容相对独立的“叙事短篇小说”组成，全部围绕着人与自然的关系...",
        readingvolume:366,
      },
      {
        image:"../../image/book_2.jpg",
        book_name:"不可思议的朋友",
        stars:"../../image/stars.jpg",
        score:"5.0",
        introduce:"讲述的是一段 历经20年的非同相识的友情，我和自闭症少年“小安”相识在小...",
        readingvolume:256,
      },
      {
        image:"../../image/book_3.jpg",
        book_name:"海底两万里",
        stars:"../../image/stars.jpg",
        score:"5.0",
        introduce:"讲述了博物学家阿龙纳斯、其仆人康塞尔和鱼叉手尼德·兰一起随鹦鹉...",
        readingvolume:500,
      },
      
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      image:options.image,
      text:options.text,
    })
    console.log(options)
    
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