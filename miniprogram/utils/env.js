//配置项目环境变量
const { miniProgram } = wx.getAccountInfoSync()
//获取小程序版本
const envVersion = miniProgram

let env = {
  baseURL: 'https://gmall-prod.atguigu.cn/mall-api'
}
switch (envVersion) {
  case 'develop':
    env.baseURL = 'https://gmall-prod.atguigu.cn/mall-api'
    break
  //体验版
  case 'trial':
    env.baseURL = 'https://gmall-prod.atguigu.cn/mall-api'
    break
  //正式版
  case 'release':
    env.baseURL = 'https://gmall-prod.atguigu.cn/mall-api'
    break
  default:
    env.baseURL = 'https://gmall-prod.atguigu.cn/mall-api'
    break
}
export { env }
