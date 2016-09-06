const baseUrl = 'http://v3.wufazhuce.com:8000/api'
const api = {
  homePage: `${baseUrl}/hp/bymonth`, // 首页，返回过去十天的 Vol

  readingCarousel: `${baseUrl}/reading/carousel`, // 阅读页面的幻灯片
  readingIndex: `${baseUrl}/reading/index/`, // 阅读列表
  essay2: `${baseUrl}/essay/`, // 短篇
  essayRelated2: `${baseUrl}/elated/essay/`, // 短篇相关
  essayComment2: `${baseUrl}/comment/praiseandtime/essay/`, // 短篇相关
  serialcontent: `${baseUrl}/serialcontent/`, // 连载
  question: `${baseUrl}/question/`, // 问题

  carouselList: `${baseUrl}/reading/carousel/`,
  musicIdList: `${baseUrl}/music/idlist/`, // 音乐 id列表
  musicDetail: `${baseUrl}/music/detail/`, // 音乐详情
  musicRelated: `${baseUrl}/related/music/`, // 相关音乐
  musicComment: `${baseUrl}/comment/praiseandtime/music/`, // 音乐评论

  movieList: `${baseUrl}/movie/list/`, // 电影列表
  movieDetail: `${baseUrl}/movie/detail/`, // 电影详情
}
export default api
