//导入模块、包提供的类
import WxRequest from 'mina-request'
import { getStorage, clearStorage } from './storage'
import { toast, modal } from './extendApi'
import { env } from './env'

//对类实例化
const instance = new WxRequest({
  baseURL: env.baseURL,
  timeout: 15000,
  isLoading: false
})

//添加请求拦截器（请求发送之前对请求参数新增或修改）
instance.interceptors.request = (config) => {
  // 在发送请求之前做些什么  实际开发需要访问令牌token
  //令牌通常存储在本地
  const token = getStorage('token')
  if (token) {
    config.header['token'] = token
  }
  return config
}

//添加响应拦截器（响应数据以后，对返回数据逻辑处理）
instance.interceptors.response = (response) => {
  // response.isSuccess = true，代码执行了 wx.request 的 success 回调函数
  // response.isSuccess = false，代码执行了 wx.request 的 fail 回调函数

  // response.statusCode // http 响应状态码

  // response.config // 网络请求请求参数

  // response.data 服务器响应的真正数据

  // 对响应数据做点什么
  //response请求返回的数据被wx。request封装了一层
  const { isSuccess, data } = response

  if (!isSuccess) {
    toast({ title: '网络异常请重试', icon: 'error' })
    return Promise.reject(response)
  }
  switch (data.code) {
    case 200:
      return data
    case 208:
      const res = modal({
        content: '鉴权失败，请重新登录',
        showCancel: false
      })
      if (res) {
        //跳转页面重新登录
        clearStorage()
        wx.navigateTo({
          url: '/pages/login/login'
        })
      }
      return Promise.reject(response)
    default:
      toast({
        title: '程序出现异常，稍后重试'
      })
      return Promise.reject(response)
  }

  // return response
}

//导出实例
export default instance
