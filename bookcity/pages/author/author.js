// pages/author/author.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   one:false,
   two:false,
   three:false,
   showview:0,
   showviewtwo:0,
   showviewthree:0,
        name_one:"余秋雨",
        fans_one:"5869",
        name_two:"刘慈心",
        fans_two:"6598",
        name_three:"田小花",
        fans_three:"4526",
        image_one:"../../image/author_4.jpg",
        image_two:"../../image/author_5.jpg",
        image_three:"../../image/author_6.jpg",
        list:[
          {
            image:"../../image/author_7.jpg",
            text:"王源源",
            follow:"已关注",
            nofollow:"+关注"
          },
          {
            image:"../../image/author_8.jpg",
            text:"张小佳",
            nofollow:"+关注",
            follow:"已关注"
          },
          {
            image:"../../image/author_9.jpg",
            text:"谢华英",
            follow:"已关注",
            nofollow:"+关注"
          },
          {
            image:"../../image/author_8.jpg",
            text:"李小军",
            follow:"已关注",
            nofollow:"+关注"
          },
          {
            image:"../../image/author_10.jpg",
            text:"王中军",
            follow:"已关注",
            nofollow:"+关注"
          },
          {
            image:"../../image/author_9.jpg",
            text:"李全柱",
            follow:"已关注",
            nofollow:"+关注"
          }
        ],
        datas:[
          {
            image:"../../image/author_11.jpg",
            text:"赵小磊",
            follow:"已关注",
            nofollow:"+关注"
          },
          {
            image:"../../image/author_12.jpg",
            text:"钟大华",
            follow:"+关注",
            nofollow:"+关注"
          },
          {
            image:"../../image/author_13.jpg",
            text:"王中军",
            follow:"已关注",
            nofollow:"+关注"
          },
          {
            image:"../../image/author_14.jpg",
            text:"李全柱",
            follow:"已关注",
            nofollow:"+关注"
          },
          {
            image:"../../image/author_14.jpg",
            text:"莫言",
            follow:"已关注",
            nofollow:"+关注"
          },
          {
            image:"../../image/author_13.jpg",
            text:"张爱玲",
            follow:"已关注",
            nofollow:"+关注"
          }
        ],
  },
  
  show(e){
    let index = parseInt(e.currentTarget.dataset.index)
    this.setData({
      showview:index,
    })
  },
  showtwo(e){
    let index = parseInt(e.currentTarget.dataset.index)
    this.setData({
      showviewtwo:index
    })
  },
  showthree(e){
    let index = parseInt(e.currentTarget.dataset.index)
    this.setData({
      showviewthree:index
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