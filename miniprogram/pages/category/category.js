import { reqCategoryData } from '../../api/category'
Page({
  data: {
    //分类列表list
    categoryList: [],
    //被激活索引
    activeIndex: 0
  },
  async getCategoryData() {
    const res = await reqCategoryData()
    if (res.code === 200) {
      this.setData({
        categoryList: res.data
      })
    }
  },
  onLoad() {
    this.getCategoryData()
  },
  updateActive(event) {
    const { index } = event.currentTarget.dataset
    this.setData({
      activeIndex: index
    })
  }
})
