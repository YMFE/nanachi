---
banner:
  name: '娜娜奇'
  desc: '基于React编写小程序的转译框架'
  btns: 
    - { name: '开 始', href: './documents/intro.html', primary: true }
    - { name: 'Github >', href: 'https://github.com/RubyLouvre/anu/tree/master/packages/cli' }
  caption: '当前版本: v1.0.0'
features: 
  - { name: '三套模板', desc: '旅游，商城，企业三套通用模板' }
  - { name: '支持slot', desc: '突破小程序template的限制，支持组件标签包含其他内容' }
  - { name: '支持事件传参', desc: '突破wxml的限制，实现多次bind this与参数' }
  - { name: '组件化编程', desc: '完美兼容React生命周期钩子' }
  - { name: '支持Render Props', desc: '可以更自由地写组件' }

footer:
  copyRight:
    name: 'YMFE Team'
    href: 'https://ymfe.org/'
  links:
    团队网址:
      - { name: 'YMFE', href: 'https://ymfe.org/' }
      - { name: 'YMFE Blog', href: 'https://blog.ymfe.org/' }
    Git仓库:
      - { name: 'Github', href: 'https://github.com/YMFE/ydoc' }
      - { name: 'Github Issue', href: 'https://github.com/YMFE/ydoc/issues' }

---

<Homepage banner={banner} features={features} />
<Footer distPath={props.page.distPath} copyRight={props.footer.copyRight} links={props.footer.links} />