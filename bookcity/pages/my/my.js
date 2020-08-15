// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr:[
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
      }
    ],
    list:[
      {
        title:"个人信息",
        ico:"/image/right.png"
      },
      {
        title:"我的消息",
          news:"6"
         
    
      },
      {
        title:"账户余额",
        balance:"1375.00",
        ico:"/image/right.png",
        url:"../accountbalance/accountbalance"
      },
      {
        title:"我的评论",
        ico:"/image/right.png"
      },
    ],
    avatarUrl: '/image/my_head.png',
    userInfo: {},
    
  },
  onGetUserInfo: function(e) {
    console.log(e);
    
    if (!this.data.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        userInfo: e.detail.userInfo
      })
    }
  },
})