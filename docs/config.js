self.$config = {
  // docsearch 方法由插件提供
  plugins: [
    docsearch({
      apiKey: '24c06c1a6cae119f9b8241a5b427b7aa',
      indexName: 'vux2MutiPages'
      // docsearch 允许你把抓取的内容按照 tag 分类
      // 详情请联系 algolia 客服，这里你只需要把你想搜索的 tag 填进来就行了
      // tags: ['Action', 'Back', 'zh-Hant']
    })
  ],
  // 这个插件同时需要你的 URL
  // 因为 docsearch 是按照你的线上 URL 抓取内容的
  url: 'https://232003894.github.io/vux2MutiPages',
  home: '/README.md',
  nav: [
    // 首页
    {
      title: '首页',
      path: '/'
    },
    // Api
    {
      title: 'H5+API',
      type: 'dropdown',
      exact: true,
      items: [{
          title: 'H5+API',
          path: '/md/api.md'
        },
        {
          type: 'sep'
        },
        {
          type: 'label',
          title: '类别'
        },
        {
          title: 'Utils',
          path: '/md/api/Utils.md'
        },
        {
          title: 'Action',
          path: '/md/api/Action.md'
        },
        {
          title: 'Back',
          path: '/md/api/Back.md'
        },
        {
          title: 'Event',
          path: '/md/api/Event.md'
        },
        {
          title: 'Filter',
          path: '/md/api/Filter.md'
        },
        {
          title: 'OS',
          path: '/md/api/运行环境.md'
        },
        {
          title: 'Storage',
          path: '/md/api/Storage.md'
        },
        {
          title: 'Dialog',
          path: '/md/api/消息弹窗.md'
        },
        {
          title: 'Windows',
          path: '/md/api/窗体操作.md'
        },
        {
          title: 'Pages',
          path: '/md/api/页面字典.md'
        },
        {
          title: '设备相关',
          path: '/md/api/设备相关.md'
        },
        {
          type: 'sep'
        },
        {
          type: 'label',
          title: '范围'
        }, {
          title: '通用Web',
          path: '/md/api/通用.md'
        },
        {
          title: 'H5+扩展',
          path: '/md/api/H5Plus扩展.md'
        },
        {
          title: '组件扩展',
          path: '/md/api/组件扩展.md'
        }
      ]
    },
    {
      title: '扩展组件',
      path: '/md/com.md'
    },
    {
      title: '代码片段',
      path: '/代码片段.md'
    },
    {
      title: '版本更新',
      path: '/md/changes.md'
    },
    {
      title: 'Todos',
      path: '/md/todos.md'
    }
  ]
}
