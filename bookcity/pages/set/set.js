// pages/set/set.js
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    rotate: "rotate",
    an: 1,
    status_bcg: "status_bcg",
    bcg: 1,
    list:[
      {
        title:"查看账户",
        ico:"/image/my_upPage_icon.png",
      },
      {
        title:"个人资料",
        ico:"/image/my_upPage_icon.png",
      },
      {
        title:"消息提醒",
      },
      {
        title:"清理缓存",
        text:"128MB",
        ico:"/image/my_upPage_icon.png",
      },
      {
        title:"帮助中心",
        ico:"/image/my_upPage_icon.png",
      },
      {
        title:"关于我们",
        ico:"/image/my_upPage_icon.png",
      },
    ],
  },
 

  // 按钮滑动
  siled_btn(e) {
    if (this.data.an == 1) {
      this.setData({
        rotate: "",
        an: 2
      })
    } else if (this.data.an == 2) {
      this.setData({
        rotate: "rotate",
        an: 1
      })
    }
  },
  siled_bcg(e) {
    if (this.data.bcg == 1) {
      this.setData({
        status_bcg: "",
        bcg: 2
      })
    } else if (this.data.bcg == 2) {
      this.setData({
        status_bcg: "status_bcg",
        bcg: 1
      })
    }
  }
})