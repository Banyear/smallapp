// pages/goods/list/index.js
import { reqGoodsList } from '../../../../../api/goods'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    goodsList: [], // 商品列表数据
    isFinish: false, // 判断数据是否加载完毕
    total: 0,
    requestData: {
      page: 1,
      limit: 10,
      category1Id: '',
      category2Id: ''
    }
  },
  async getGoodsList() {
    const { data } = await reqGoodsList(this.data.requestData)
    this.setData({
      goodsList: [...this.data.goodsList, ...data.records],
      total: data.total
    })
  },
  onReachBottom() {
    const { goodsList, total, requestData } = this.data
    const { page } = requestData
    console.log(page)
    if (goodsList.length === total) {
      this.setData({
        isFinish: true
      })
      return
    }
    this.setData({
      requestData: { ...this.data.requestData, page: page + 1 }
    })
    this.getGoodsList()
  },
  onLoad(options) {
    Object.assign(this.data.requestData, options)
    this.getGoodsList()
  }
})
