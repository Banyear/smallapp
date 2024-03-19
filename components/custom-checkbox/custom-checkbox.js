// components/custom-checkbox/custom-checkbox.js
Component({

    options:{
      multipleSlots:true
    },
  /**
   * 组件的属性列表
   */
  properties: {
    label:{
      //type组件使用者传递类型 String Object Number Boolean
      type:String,
      value:''
    },
    position:{
      type:String,
      value:'right'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isCheck:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    updateCheckd(){
  
      this.setData({
        isCheck:!this.data.isCheck,
        label:'修改内容'
      })
      
    }
  }
})