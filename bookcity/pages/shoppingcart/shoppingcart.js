// pages/shoppingcart/shoppingcart.js
Page({
  total_price(){
    var a=0
    for(let i=0;i<this.data.book_list.length;i++){
      a=a+parseInt(this.data.book_list[i].price)
     // console.log(parseInt(this.data.book_list[i].price))
    }
    //console.log(a)
    this.setData({
      total_price:a+".00"
    })
   },
  //  according(){
  //     this.setData({
  //       is_remove:false
  //     })
  //  },
  onTap: function (e) {
    //console.log(e)
    for(var i=0;i<this.data.book_list.length;i++){
      if(this.data.book_list[i].id==e.detail.id){
        console.log(e.detail.id,this.data.book_list[i].id)
        //console.log(e)
        let book_list=this.data.book_list
        book_list.splice(i,1);
        console.log(this.data.book_list)
        this.setData({
          // book_length:book_list.length,
          book_list: book_list
        })
       this.total_price()
      }
    }
    // this.data.num = this.data.num+1
  },
  /**
   * 
   * 页面的初始数据
   */
  data: {
       book_list:[
         { 
           id:1,
           img:"../../image/book_1.png",
           book_name:"未来简史",
           author_name:"尤瓦尔·赫拉利",
           price:"58.00"
         },
         {
           id:2,
          img:"../../image/book_3.png",
          book_name:"银河帝国",
          author_name:"艾萨克·阿西莫夫",
          price:"86.00"
        },
        {
          id:3,
          img:"../../image/book_2.png",
          book_name:"海底两万里",
          author_name:"儒勒·凡尔纳",
          price:"99.00"
        },
        { 
          id:4,
          img:"../../image/book_1.png",
          book_name:"未来简史",
          author_name:"尤瓦尔·赫拉利",
          price:"58.00"
        },
        {
          id:5,
         img:"../../image/book_3.png",
         book_name:"银河帝国",
         author_name:"艾萨克·阿西莫夫",
         price:"86.00"
       },
       ],
      //  book_length:"",
       total_price:"",
       balance:"1375",
      //  is_remove:true,
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   this.total_price()
     
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