module.exports = {
  title: "myblog",
  theme: "libra",
  // 部署站点的基础路径，如果你想让你的网站部署到一个子路径下，你将需要设置它。如 GitHub pages，如果你想将你的网站部署到 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/"，它的值应当总是以斜杠开始，并以斜杠结束。
  // base 将会作为前缀自动地插入到所有以 / 开始的其他选项的链接中，所以你只需要指定一次。
  // 比如说你想部署到服务器上跟路径，那么你只需要将base设置为 / 即可。
  base: "/",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  // 文章目录和 back to top
  plugins: ["vuepress-plugin-table-of-contents", "@vuepress/back-to-top"],
  // theme:
  themeConfig: {
    // Logo和时间线里的字母（文字）
    logo: "Y",
    // 主页
    home: {
      title: "yyb",
      subTitle: "在生活里，我们永远是初学者",
    },
    // 页脚
    footer: {
      // 版权信息
      copyright: "Copyright © 2019-2020  | 版权所有",
    },
    // 个人信息卡片
    infoCard: {
      // 头像
      headerPic: "https://avatars.githubusercontent.com/u/130117273?v=4",
      // 姓名
      name: "zhengyingjs",
      // 邮箱
      mail: "2598153935@qq.com",
    },
    // 联系人页面
    contact: {
      title: "yyb",
      subTitle1: "Thank you for visiting my blog",
      subTitle2: "Hope we can make progress together",
      // QQ二维码地址
      qq:
        "https://libra321.oss-cn-huhehaote.aliyuncs.com/blog/weixin-qrcode.png",
      // 微信二维码地址
      wechat:
        "https://libra321.oss-cn-huhehaote.aliyuncs.com/blog/weixin-qrcode.png",
      // 邮箱
      mail: "2598153935@qq.com",
      // github地址
      github: "https://github.com/zhenyingjs",
      // 头像图片地址
      headerPic: "https://avatars.githubusercontent.com/u/130117273?v=4",
    },
    comment: {
      // 是否显示评论列表
      showComment: false,
      // The owner's name of repository to store the issues and comments.
      owner: "yyb",
      // The name of repository to store the issues and comments.
      repo: "vuepress-theme-libra",
      // The clientId & clientSecret introduced in OAuth2 spec.
      clientId: "",
      clientSecret: "",
    },
  },
};
