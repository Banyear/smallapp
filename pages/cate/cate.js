// pages/cate/cate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      numList:[1,2,3]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    // console.log('下拉')
    this.setData({
     numList:[4,5,6]
    })
    if(this.data.numList.length===3){
      wx.stopPullDownRefresh()
    }
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    wx.showLoading({
      title: '加载中',
      mask: true
    })
    setTimeout(()=>{
      const lastNum=this.data.numList[this.data.numList.length-1];
      const newArr=[lastNum+1,lastNum+2,lastNum+3];
  
      this.setData({
        numList:[...this.data.numList,...newArr]
      })
      wx.hideLoading()
    },1500)
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})