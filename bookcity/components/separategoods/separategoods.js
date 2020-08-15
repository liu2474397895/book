// components/separategoods/separategoods.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    myProperty:Object
  },

  /**
   * 组件的初始数据
   */
  data: {
     is_remove:true
  },

  /**
   * 组件的方法列表
   */
  methods: {
     according(){
      this.setData({
        is_remove:false
      })
   },
   onTap(){
    this.triggerEvent('myevent', {id:this.data.myProperty.id},{})
    this.setData({
      is_remove:true
    })
   }
  }
})
