import { toast } from '../../utils/extendApi'
import { reqLogin, reqUserInfo } from '../../api/user'
import { setStorage } from '../../utils/storage'
import { ComponentWithStore } from 'mobx-miniprogram-bindings'
import { userStore } from '../../stores/userstore'
import { action } from 'mobx-miniprogram'

ComponentWithStore({
  //页面和store建立关联
  storeBindings: {
    store: userStore,
    fields: ['token', 'userInfo'],
    actions: ['setToken', 'setUserInfo']
  },
  methods: {
    login() {
      wx.login({
        success: async ({ code }) => {
          if (code) {
            const { data } = await reqLogin(code)
            setStorage('token', data.token)
            //将自定义登录状态存储store
            this.setToken(data.token)
            this.getUserInfo()
            //返回我的页面
            wx.navigateBack()
          } else {
            toast({ title: '授权失败' })
          }
        }
      })
    },
    async getUserInfo() {
      const { data } = await reqUserInfo()
      setStorage('userInfo', data)
      this.setUserInfo(data)
    }
  }
})
