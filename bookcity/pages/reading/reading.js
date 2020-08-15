// pages/reading/reading.js
   

Page({

  //
  A_newline(){
    var regex = /\s{3,}/g;
    let content=this.data.content
    content=content.replace(regex,"\n \n")
    this.setData({
      content:content
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
  content:`1931年的5月，纽约市民亲限目睹了场恐怖围捕|凶手叫克劳雷，外号“双枪将"，他滴酒不沾估计走在大街上谁也不会把他和凶恶的罪犯联系在一起,
  他被包围了，正在西端大街他情人的公寓里与警方做困兽之斗。
  
  一百五十名警员把克劳雷逼到了公寓的顶层。他们在屋顶凿了个洞，试图用催泪瓦斯把克劳雷黑出来特k队也把机枪安置在公寓四周的建筑物上，和他对战了-个多小时。这个纽约市里原本清静高档的住宅区，已被- -阵阵让人心惊肉跳的刺耳枪声淹没。克劳雷藏在一把堆满杂物的椅子后面，手持短枪，不时地向警方还击。而成千上万的市民，则站在这座公寓附近，“欣赏”着这部“警匪大片”这样的场面在纽约绝对是前所未有的‘。 
  
  当克劳雷被捕后，警察总监马罗尼强调说:“这家伙是纽约治安史上，最危险的罪犯，没有之一。"接着这位警察总监又形象地说，‘ 9万雷杀人的手法就像切葱一样纯魅...他定会被判处死刑|”可是，“双枪将“克劳雷可不这么想，当警方人员围击他藏身的公寓时。  `
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.A_newline()
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