import { reqIndexData } from '../../api/index'
Page({
  data: {
    //轮播图
    bannerList: [],
    //商品导航
    categoryList: [],
    //活动渲染区域
    activeList: [],
    //人气推荐
    hotList: [],
    //猜你喜欢
    guessList: [],
    //是否显示骨架屏
    loading: true
  },
  async getIndexData() {
    const res = await reqIndexData()
    this.setData({
      bannerList: res[0].data,
      categoryList: res[1].data,
      activeList: res[2].data,
      hotList: res[3].data,
      guessList: res[4].data,
      loading: false
    })
  },
  onLoad() {
    this.getIndexData()
  }
})
