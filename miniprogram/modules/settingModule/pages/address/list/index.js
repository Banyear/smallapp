// pages/address/list/index.js
import { reqAddressList, reqDelAddress } from '../../../../../api/address'
import instance from '../../../../../utils/http'
import { swipeCellBehavior } from '../../../../../behaviors/swipeCell'

Page({
  behaviors: [swipeCellBehavior],
  // 页面的初始数据
  data: {
    addressList: []
  },

  // 去编辑页面
  toEdit(event) {
    const { id } = event.currentTarget.dataset
    wx.navigateTo({
      url: `/modules/settingModule/pages/address/add/index?id=${id}`
    })
  },

  async getAddressList() {
    const { data: addressList } = await reqAddressList()
    this.setData({
      addressList
    })
  },
  async delAddress(event) {
    const { id } = event.currentTarget.dataset
    const modalRes = await wx.modal({
      content: '您确认删除收货地址吗？'
    })
    if (modalRes) {
      await reqDelAddress(id)
      wx.toast({ title: '收货地址删除成功' })
      this.getAddressList()
    }
  },

  onShow() {
    this.getAddressList()
  }
})
