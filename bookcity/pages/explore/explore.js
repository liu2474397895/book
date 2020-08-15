// pages/explore/explore.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    boss:[
      {
        img:'../../image/04.png'
      },
      {
        img:'../../image/05.png'
      },
      {
        img:'../../image/06.png'
      },
      {
        img:'../../image/07.png'
      },
    ],
    infor:[
      {
        img:'../../image/books_img1.png',
        name:'三体: 死神永生',
        url:''
      },
      {
        img:'../../image/08.png',
        name:'百年孤独',
        url:''
      },
      {
        img:'../../image/10.png',
        name:'平凡世界',
        url:''
      },
      {
        img:'../../image/09.png',
        name:'未来简史',
        url:''
      },
    ],
     flag:true,
     src1:'../../image/sifangkuai-shi.png',
     src2:'../../image/sifangkuai-shi2.png',
     src3:'../../image/fangkuai.png',
     src4:'../../image/fangkuai2.png',
     mianimg:'../../image/books_img1.png',
     title:'三体: 死神永生',
     the_author_name:'刘慈心',
     the_name:'陈小冬',
     recommended:'推荐'
  },
  

  ontap: function(){
  console.log(2222);
   this.setData({
    flag:false,
   })
  },
  ontaps: function(){
  console.log(1111);
   this.setData({
    flag:true
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