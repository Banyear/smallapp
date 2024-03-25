// pages/profile/profile.js
import { userBehavior } from './behavior'
import { reqUploadFile, reqUpdateUserInfo } from '../../../../api/user'
import { setStorage } from '../../../../utils/storage'
import { toast } from '../../../../utils/extendApi'
Page({
  behaviors: [userBehavior],
  // 页面的初始数据
  data: {
    isShowPopup: false // 控制更新用户昵称的弹框显示与否
  },
  getNickName(event) {
    const { nickname } = event.detail.value
    this.setData({
      'userInfo.nickname': nickname,
      isShowPopup: false
    })
  },
  // 显示修改昵称弹框
  onUpdateNickName() {
    this.setData({
      isShowPopup: true,
      'userInfo.nickname': this.data.userInfo.nickname
    })
  },

  // 弹框取消按钮
  cancelForm() {
    this.setData({
      isShowPopup: false
    })
  },
  async chooseAvator(event) {
    const { avatarUrl } = event.detail
    const res = await reqUploadFile(avatarUrl, 'file')
    this.setData({
      'userInfo.headimgurl': res.data
    })
  },
  async updateUserInfo() {
    const res = await reqUpdateUserInfo(this.data.userInfo)
    if (res.code === 200) {
      setStorage('userInfo', this.data.userInfo)
      this.setUserInfo(this.data.userInfo)
      toast({ title: '更新成功' })
    }
  }
})
