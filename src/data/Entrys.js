const ENTRYS = [
  {
    id: '14838',
    title: 'MFI（モバイルファーストインデックス）へ向けてのまとめ',
    date: '2017-12-25',
    author: 'jyasukaw',
    body: '## MFIとは\n\nGoogleは、2016年11月にGoole検索の大きな仕様変更となる、[MFIを発表](https://webmaster-ja.googleblog.com/2016/11/mobile-first-indexing.html)しました。\n\n簡単に言うと、Google検索を使用しているユーザーの多くがモバイル端末からとなってきている現状を受けて、検索の評価システムをデスクトップ版から、モバイル版に移行するというものです。\n\nMFIの導入に向けて、サイト運営者として気をつけておきたい事をメモしておきたいと思います。\n\n## MFIに向けての対策について\n\n結論から言うと、以下のようになります。\n\n 1. レスポンシブで実装しているサイトは、影響は少ない\n\n2. デスクトップとモバイルサイトでページ（コンテンツ）を分けている場合は要注意\n\nGoogle検索の評価システムが、モバイル版に移行するという事は、言い換えるとデスクトップ版を評価しなくなるという事です。<br>デスクトップ版とモバイル版が同一ソースになっているレスポンシブで構築されているサイトに関しては、どちらを評価されても特に問題はありません。<br>2.のように、例えばデスクトップ版にのみ主要な情報を載せている等、モバイル版と差異がある場合は、デスクトップ版にしかない重要な情報がインデックスされず大きく順位を落とす可能性があるため、なるべく早いタイミングでモバイルファーストなサイト設計に見直す必要があると考えられます。\n\n ## 見直すポイント\n\n先日、[モバイル ファースト インデックスに向けてサイトを準備するためのヒント](https://webmaster-ja.googleblog.com/2017/12/getting-your-site-ready-for-mobile.html)として、いくつかのヒントが紹介されました。<br>ここでは、以下のような情報がピックアップされています。\n\n - コンテンツの品質\n\n - 画像のALT、構造化データ（適切なタグによる文章構造の最適化）、タイトル・メタディスクリプションなど、インデックスしやすくなるベーシックな情報\n\n - モバイル版とデスクトップ版を紐付ける「rel=canonical要素」と「rel=alternate要素」\n\n- 国際化対応のための「link rel=hreflang要素」\n\n## 今後について\n\nMFIの正式な導入日程はまだ発表されていませんが、少数のサイトを対象に試験導入を開始していますし、2018年中には開始されるのではと噂されています。<br>また、GoogleはAMP（Accelerated Mobile Pages）と言われるモバイル体験の高速化にも積極的に取り組んでいます。\n\nモバイル対応が十分でない場合はもちろんのこと、新たにサイトを設計する際にもモバイルファーストを意識して取り組みたいところです。',
    image_url: 'https://mym.corp.yahoo.co.jp/paster/rK8Fp5a42ec3d413a33c8173c00ac.png'
  },
  {
    id: '66735',
    title: 'SPAにおけるgoogleクローラ対策',
    date: '2017-12-19',
    author: 'iyamasat',
    body: '# 結論\n\nuserAgentでgoogleクローラを判別して、その場合のみSSRするのが良い\n\n# 背景\n\nSPAでもgoogleに認識されるって言うけど、本当なの？\n\n認識されてもSSRにやっぱ勝てないんじゃないの？\n\n<br>\n\n**現段階だとやっぱSSRに勝てない(らしい...)**\n\n# SEO専門家とシニアエンジニアに聞いてみた\n\ngoogleクローラ用に遷移を分ける前と後とでオーガニック流入に差がかなり出た(らしい...)\n\n↑ここの実数値については探り入れてみます\n\n# 仕組み\n\n![center](https://mym.corp.yahoo.co.jp/paster/cvn9C5a323494fab946cd17bac1ae.png)\n\n# 懸念\n\n* User向けとgoogleクローラ向けで機能の差分がでてしまったら、信頼性が落ちて、結果的にSEOが悪くなってしまう\n\n* 保守大変そう\n\n<strong>引き続き調査してきます</strong>\n\n# 参考\n\nhttps://qiita.com/shimpeiws/items/f0bf909079b939b354e3',
    image_url: 'https://mym.corp.yahoo.co.jp/paster/cvn9C5a323494fab946cd17bac1ae.png'
  }
]

export default ENTRYS;
