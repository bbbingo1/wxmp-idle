import * as wxSearch from '../../wxSearch/wxSearch';



Component({
    onLoad: function (options) {
        //初始渲染-读取storage的历史记录
        wxSearch.init(this)
      }
})
