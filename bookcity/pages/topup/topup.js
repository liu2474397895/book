// pages/topup/topup.js
Page({
  //input的双向绑定事件
  updateValue(e){
    let name=e.currentTarget.dataset.name;  //代表sum
    //console.log(name,e.detail.value,e.detail)
    let nameMap={}
    nameMap[name]=e.detail&&e.detail.value
    this.setData(nameMap)
    this.setData({
      money:e.detail.value
    })
    //console.log(this.data.sum)
  },

  next_step(){
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#0D1012',
      // animation: {
      //   duration: 400,
      //   timingFunc: 'easeIn'
      // }
    })
    this.setData({
      
      is_show:1
    })
  },
  cancel(){
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#21272E',
    })
    this.setData({
      is_show:0
    })
  },
  //输入聚焦
// foucus: function () {
//   var that = this;
//   that.setData({
//   xxx:60
//   })
//   },
  //失去聚焦

// blur: function () {
//   var that = this;
//   that.setData({
//  xxx:100
//   })
//   },
  /**
   * 页面的初始数据
   */
  data: {
  //  xxx:100,
  sum:"",
  money:"",
  is_show:0,
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