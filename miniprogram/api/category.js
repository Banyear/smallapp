import http from '../utils/http'

export const reqCategoryData = () => {
  //并发请求获取首页数据，提升渲染速度
  // return Promise.all([
  //   http.get('/index/findBanner'),
  //   http.get('findCategory1'),
  //   http.get('/index/advertisement'),
  //   http.get('/index/findListGoods'),
  //   http.get('/index/findRecommendGoods')
  // ])
  //使用封装 的all方法
  return http.get('/index/findCategoryTree')
}
