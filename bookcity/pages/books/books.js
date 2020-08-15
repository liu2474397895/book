// pages/books/books.js
Page({

  // 加入书架
  addOnClick:function() {
    
    this.setData({
      isShow:1,
      addBooks:"已在书架",
      addIcon:"../../image/add_ok.png"
    }) 
  },
  addIsHide:function() { 
    this.setData({
      isShow:0
    }) 
  },
  // 分享弹窗
  shareOnClick:function() {
    console.log(1111);
    this.setData({
      shareIsShow:1
    })
  },
  shareIsHide:function() {
    this.setData({
      shareIsShow:0
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    // 加入书架
    isShow:0,
    addBooks:"加入书架",
    addIcon:"../../image/books_icon.png",
    // 分享
    shareIsShow:0,
    logoList:[
      {
        url:"../../image/wechat.png"
      },
      {
        url:"../../image/qq_friend.png"
      },
      {
        url:"../../image/micro_blog.png"
      },
      {
        url:"../../image/qq.png"
      },
    ]
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