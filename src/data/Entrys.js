const ENTRYS = [
  {
    id: '8392473984',
    title: 'トーマスランド',
    date: '2017-11-20',
    author: 'kentatan',
    body: '* If you escape or skip the HTML, no `dangerouslySetInnerHTML` is used! Yay!',
    image_url: 'https://scontent-nrt1-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/21576677_115589622455053_7978756652675366912_n.jpg'
  },
  {
    id: '2381273217',
    title: 'サングラス',
    date: '2017-11-21',
    author: 'jyasukaw',
    body: '<http://google.com>',
    image_url: 'https://scontent-nrt1-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/20766438_100330230693746_3443546327999315968_n.jpg'
  },
  {
    id: '49873434374',
    title: 'アイスクリーム',
    date: '2017-11-22',
    author: 'kentatan',
    body: '![テスト](https://scontent-nrt1-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/18645670_347825388965586_4716293558988963840_n.jpg)',
    image_url: 'https://scontent-nrt1-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/18645670_347825388965586_4716293558988963840_n.jpg'
  },
  {
    id: '98848234923',
    title: '楽しい遠足でした',
    date: '2017-11-23',
    author: 'jyasukaw',
    body: '改行\n\n ### h3',
    image_url: 'https://scontent-nrt1-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/18580060_292902204502690_7934112735376179200_n.jpg'
  },
  {
    id: '98848234924',
    title: 'SPAにおけるgoogleクローラ対策',
    date: '2017-12-19',
    author: 'iyamasat',
    body: '# 結論\n\nuserAgentでgoogleクローラを判別して、その場合のみSSRするのが良い\n\n# 背景\n\nSPAでもgoogleに認識されるって言うけど、本当なの？\n\n認識されてもSSRにやっぱ勝てないんじゃないの？\n\n<br>\n\n**現段階だとやっぱSSRに勝てない(らしい...)**\n\n# SEO専門家とシニアエンジニアに聞いてみた\n\ngoogleクローラ用に遷移を分ける前と後とでオーガニック流入に差がかなり出た(らしい...)\n\n↑ここの実数値については探り入れてみます\n\n# 仕組み\n\n![center](https://mym.corp.yahoo.co.jp/paster/cvn9C5a323494fab946cd17bac1ae.png)\n\n# 懸念\n\n* User向けとgoogleクローラ向けで機能の差分がでてしまったら、信頼性が落ちて、結果的にSEOが悪くなってしまう\n\n* 保守大変そう\n\n<strong>引き続き調査してきます</strong>\n\n# 参考\n\nhttps://qiita.com/shimpeiws/items/f0bf909079b939b354e3',
    image_url: 'https://mym.corp.yahoo.co.jp/paster/cvn9C5a323494fab946cd17bac1ae.png'
  }
]

export default ENTRYS;
