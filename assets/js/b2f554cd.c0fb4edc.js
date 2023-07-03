"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1477],{10:t=>{t.exports=JSON.parse('{"blogPosts":[{"id":"about-site","metadata":{"permalink":"/blog/about-site","source":"@site/blog/2023-04-14-about-site/index.md","title":"\u5173\u4e8e\u5982\u4f55\u5236\u4f5c\u6b64\u7f51\u7ad9","description":"\u521b\u5efa docusaurus \u524d\u7aef\u5de5\u7a0b","date":"2023-04-14T00:00:00.000Z","formattedDate":"2023\u5e744\u670814\u65e5","tags":[{"label":"GITHUB Page","permalink":"/blog/tags/github-page"},{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":0.665,"hasTruncateMarker":false,"authors":[{"name":"wei c","title":"\u7269\u8054\u7f51\u5e73\u53f0\u5f00\u53d1\u8005","url":"https://yirancn.github.io","imageURL":"https://github.com/slorber.png","key":"weic"}],"frontMatter":{"slug":"about-site","title":"\u5173\u4e8e\u5982\u4f55\u5236\u4f5c\u6b64\u7f51\u7ad9","authors":["weic"],"tags":["GITHUB Page","docusaurus"]},"nextItem":{"title":"\u5173\u4e8eCHATGPT","permalink":"/blog/mdx-blog-post"}},"content":"### \u521b\u5efa docusaurus \u524d\u7aef\u5de5\u7a0b\\n\\n\u6b64\u7f51\u7ad9\u4e3b\u8981\u4f7f\u7528\u7684\u6280\u672f\u662f`docusaurus`\uff0c\u521b\u5efa\u5de5\u7a0b\u53c2\u8003 [Docusaurus \u4ecb\u7ecd](https://docusaurus.io/zh-CN/docs)\\n\\n:::tip\\n\\n\u6838\u5fc3\u547d\u4ee4\u5f88\u7b80\u5355\\n\\n```js\\nnpx create-docusaurus@latest my-website classic\\ncd my-website\\nnpx docusaurus start\\n```\\n\\n:::\\n\\n### GITHUB \u7684 Action \u529f\u80fd\\n\\n\u4f7f\u7528 GITHUB \u7684 Action \u529f\u80fd\uff0c\u5728\u5de5\u7a0b\u5185\u521b\u5efa.github/workflows/documentation.yml \u6587\u4ef6\uff0c\u5185\u5bb9\u5982\u4e0b\uff1a\\n\\n:::tip\\n\\n.github/workflows/documentation.yml\\n\\n```js\\nname: Deploy Github pages\\non:\\n  push:\\n    branches:\\n      - master\\npermissions:\\n  contents: write\\njobs:\\n  build-and-deploy:\\n    runs-on: ubuntu-latest\\n    steps:\\n      - name: Checkout\\n        uses: actions/checkout@v3\\n\\n      - name: Install and Build \ud83d\udd27\\n        run: |\\n          npm i\\n          npm run build\\n\\n      - name: Deploy \ud83d\ude80\\n        uses: JamesIves/github-pages-deploy-action@v4\\n        with:\\n          folder: build # The folder the action should deploy.\\n```\\n\\n:::\\n\\n![Action](./action-1.png)"},{"id":"mdx-blog-post","metadata":{"permalink":"/blog/mdx-blog-post","source":"@site/blog/2021-08-01-mdx-blog-post.mdx","title":"\u5173\u4e8eCHATGPT","description":"CHATGPT \u5c31\u662f\u4e00\u4e2a\u5168\u80fd\u7684\u957f\u8005\uff0c\u4ed6\u77e5\u9053\u7684\u5f88\u591a\uff0c\u53ea\u8981\u4f60\u80fd\u6b63\u786e\u7684\u8868\u8fbe\uff0c\u4ed6\u51e0\u4e4e\u53ef\u4ee5\u5b8c\u7f8e\u7684\u56de\u7b54\u4f60\u3002","date":"2021-08-01T00:00:00.000Z","formattedDate":"2021\u5e748\u67081\u65e5","tags":[{"label":"\u7269\u8054\u7f51\u5e73\u53f0","permalink":"/blog/tags/\u7269\u8054\u7f51\u5e73\u53f0"}],"readingTime":0.31,"hasTruncateMarker":false,"authors":[{"name":"wei c","title":"\u7269\u8054\u7f51\u5e73\u53f0\u5f00\u53d1\u8005","url":"https://yirancn.github.io","imageURL":"https://github.com/slorber.png","key":"weic"}],"frontMatter":{"slug":"mdx-blog-post","title":"\u5173\u4e8eCHATGPT","authors":["weic"],"tags":["\u7269\u8054\u7f51\u5e73\u53f0"]},"prevItem":{"title":"\u5173\u4e8e\u5982\u4f55\u5236\u4f5c\u6b64\u7f51\u7ad9","permalink":"/blog/about-site"}},"content":"CHATGPT \u5c31\u662f\u4e00\u4e2a\u5168\u80fd\u7684\u957f\u8005\uff0c\u4ed6\u77e5\u9053\u7684\u5f88\u591a\uff0c\u53ea\u8981\u4f60\u80fd\u6b63\u786e\u7684\u8868\u8fbe\uff0c\u4ed6\u51e0\u4e4e\u53ef\u4ee5\u5b8c\u7f8e\u7684\u56de\u7b54\u4f60\u3002\\n\\n:::tip\\n\\nUse the power of React to create interactive blog posts.\\n\\n```js\\n<button onClick={() => alert(\\"button clicked!\\")}>Click me!</button>\\n```\\n\\n<button onClick={() => alert(\\"button clicked!\\")}>Click me!</button>\\n\\n:::"}]}')}}]);