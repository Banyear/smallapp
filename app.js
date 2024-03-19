// app.js
App({
  onLaunch(){
    const updateManager=wx.getUpdateManager()
    updateManager.onUpdateReady(function(){
      wx.showModal({
        title: '更新提示',
        content: '是否重启更新',
        success(res){
          if (res.confirm) {
            updateManager.applyUpdate();
          }
        }
      })
    })
  }
})
