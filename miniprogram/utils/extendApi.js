const toast = ({ title = '数据加载中...', icon = 'none', duration = 2000, mask = true } = {}) => {
  wx.showToast({
    title,
    icon,
    duration,
    mask
  })
}

//调用modal方法可传递参数也可不传
//不传就是空对象
//传递参数 需要对象属性和wx.showModal参数保持一致
const modal = (options = {}) => {
  return new Promise((resolve) => {
    //默认参数
    const defaultOpt = {
      title: '提示',
      content: '您确定执行该操作吗?',
      confirmColor: '$f3514f'
    }
    const opts = Object.assign({}, defaultOpt, options)
    wx.showModal({
      //将合并后的参数传入
      opts,
      complete: ({ confirm, cancel }) => {
        confirm && resolve(true)
        cancel && resolve(false)
      }
    })
  })
}

//挂载到全局对象上
wx.toast = toast
wx.modal = modal

//如果其他js文件使用toast方法 需要先导入toast然后调用
export { toast, modal }
