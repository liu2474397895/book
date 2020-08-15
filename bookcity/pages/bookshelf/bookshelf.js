// pages/bookshelf/bookshelf.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // list1: [],
    // list2: [],
    worksList: [
      {
        url: "../../image/books_img1.png",
        title: "三体3：死神永生",
        author: "刘慈欣"
      },
      {
        url: "../../image/books_img2.png",
        title: "银河帝国",
        author: "艾萨克•阿莫西夫"
      },
      {
        url: "../../image/book_2.png",
        title: "海底两万里",
        author: "儒勒•凡尔纳"
      }
    ],
    notRead: [
      {
        url: "../../image/09.png",
        title: "未来简史",
        author: "尤瓦尔•赫拉利"
      },
      {
        url: "../../image/books_img1.png",
        title: "三体3：死神永生",
        author: "刘慈欣"
      },
      {
        url: "../../image/books_img2.png",
        title: "银河帝国",
        author: "艾萨克•阿莫西夫"
      },
      {
        url: "../../image/book_2.png",
        title: "海底两万里",
        author: "儒勒•凡尔纳"
      },
      {
        url: "../../image/books_img1.png",
        title: "三体3：死神永生",
        author: "刘慈欣"
      },
      {
        url: "../../image/books_img2.png",
        title: "银河帝国",
        author: "艾萨克•阿莫西夫"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // let thet = this
    // wx.request({
    //   // rap2
    //   // url: "http://rap2.taobao.org:38080/app/mock/257352/api/works",
    //   // postman
    //   url: "https://53598462-3001-449c-bc3f-300db263bdf8.mock.pstmn.io/api/books",
    //   method: "GET",
    //   header: {
    //     'Content-Type': 'application/json'
    //   },
    //   success: function (res) {
    //     console.log(res)

    //     let list1 = res.data.worksList
    //     let list2 = res.data.notRead

    //     thet.setData({
    //       list1: list1,
    //       list2: list2
    //     })
    //   },
    //   fail: function () {

    //     console.log("接口调用失败");

    //   }
    // })
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