const ENTRYS = [
  {
    id: '87432',
    title: 'お手軽・簡単SPAブログ',
    description: '本ブログを構築するにあたりReact.jsのひな形が簡単につくれるcreate-react-appを利用してみました。',
    date: '2018-1-28',
    author: 'kentatan',
    body: '## ブログ構築について\n\nこのブログを構築するにあたりReact.jsのひな形が簡単につくれる**create-react-app**を利用してみました。ただしブログとして機能するためには、ある程度の要件を満たす必要があります。\n\n1. ブログ記事の管理\n\n2. metaタグ制御\n\n3. 個別URLの振り分け\n\n4. マルチデバイス対応\n\n\n\n色々大変そうだなと思い調べてみると、そのあたりはOSSが全て解決してくれました。<br>（本当にそれでいいのかという声が聞こえてきそうですが…）\n\n\n\n<br>とりあえず以下を組み合わせるだけで本ブログサイトを簡単に構築することができます！\n\n## react-markdown（記事）\n\nhttps://github.com/rexxars/react-markdown\n\n- mdで書けるので記事を書くのが楽\n\n- 注意すべきは記事内で使われる画像やフォントサイズはglobalなcssから指定する必要がある点\n\n\n\n## react-helmet（metaタグ制御）\n\nhttps://github.com/nfl/react-helmet\n\n- ページコンポーネント単位で付与することができる\n\n- アクセス時に動的にhead情報を書き換えるため、SNSでURLシェアしようとすると実行されない\n\n- たぶんgoogleはJSレンダリング結果をみるのでいけるはず…要検証\n\n## React-Router（ルーティング）\n\nhttps://reacttraining.com/react-router/\n\n- CreateReactApp + Herokuの環境の場合static.jsonを用意してやる必要があるっぽい\n\n  - https://stackoverflow.com/questions/41772411/react-routing-works-in-local-machine-but-not-heroku\n\n- react-router-dom\n\n  - react-routerからreact-router-domとreact-router-nativeに分岐したものらしい\n\n  - react-router-domを設置するとき、依存性パッケージとしてreact-routerも一緒に設置される\n\n\n\n## ReBass（UIコンポーネント）\n\nhttp://jxnblk.com/rebass/\n\n- propsへ自分の足したい属性を足すことができるため自由度がある\n\n  - React-Routerとコンフリクトする事があるため利用するコンポーネントは精査すること\n\n- Flexレイアウトは[Grid Styled](http://jxnblk.com/grid-styled/)が参考になった<br>\n\n## ここからが本題\n\nSEOを検証する上では動的にmetaを書き換えてくれるreact-helmetは必須でしたが、果たしてGooglebotからはきちんとクローリングされるのでしょうか。\n\nその結果は次回検証してみたいと思います。',
    image_url: 'http://www.penta-code.com/wp-content/uploads/2016/08/create-react-app-start-screen.png'
  },
  {
    id: '14838',
    title: 'MFIへ向けてのまとめ',
    description: 'Googleは、2016年11月にGoole検索の大きな仕様変更となる、MFIを発表しました。簡単に言うと、Google検索を使用しているユーザーの多くがモバイル端末からとなってきている現状を受けて、検索の評価システムをデスクトップ版から、モバイル版に移行するというものです。MFIの導入に向けて、サイト運営者として気をつけておきたい事をメモしておきたいと思います。',
    date: '2017-12-25',
    author: 'jyasukaw',
    body: '## MFIとは\n\nGoogleは、2016年11月にGoole検索の大きな仕様変更となる、[MFIを発表](https://webmaster-ja.googleblog.com/2016/11/mobile-first-indexing.html)しました。\n\n簡単に言うと、Google検索を使用しているユーザーの多くがモバイル端末からとなってきている現状を受けて、検索の評価システムをデスクトップ版から、モバイル版に移行するというものです。\n\nMFIの導入に向けて、サイト運営者として気をつけておきたい事をメモしておきたいと思います。\n\n## MFIに向けての対策について\n\n結論から言うと、以下のようになります。\n\n 1. レスポンシブで実装しているサイトは、影響は少ない\n\n2. デスクトップとモバイルサイトでページ（コンテンツ）を分けている場合は要注意\n\nGoogle検索の評価システムが、モバイル版に移行するという事は、言い換えるとデスクトップ版を評価しなくなるという事です。<br>デスクトップ版とモバイル版が同一ソースになっているレスポンシブで構築されているサイトに関しては、どちらを評価されても特に問題はありません。<br>2.のように、例えばデスクトップ版にのみ主要な情報を載せている等、モバイル版と差異がある場合は、デスクトップ版にしかない重要な情報がインデックスされず大きく順位を落とす可能性があるため、なるべく早いタイミングでモバイルファーストなサイト設計に見直す必要があると考えられます。\n\n ## 見直すポイント\n\n先日、[モバイル ファースト インデックスに向けてサイトを準備するためのヒント](https://webmaster-ja.googleblog.com/2017/12/getting-your-site-ready-for-mobile.html)として、いくつかのヒントが紹介されました。<br>ここでは、以下のような情報がピックアップされています。\n\n - コンテンツの品質\n\n - 画像のALT、構造化データ（適切なタグによる文章構造の最適化）、タイトル・メタディスクリプションなど、インデックスしやすくなるベーシックな情報\n\n - モバイル版とデスクトップ版を紐付ける「rel=canonical要素」と「rel=alternate要素」\n\n- 国際化対応のための「link rel=hreflang要素」\n\n## 今後について\n\nMFIの正式な導入日程はまだ発表されていませんが、少数のサイトを対象に試験導入を開始していますし、2018年中には開始されるのではと噂されています。<br>また、GoogleはAMP（Accelerated Mobile Pages）と言われるモバイル体験の高速化にも積極的に取り組んでいます。\n\nモバイル対応が十分でない場合はもちろんのこと、新たにサイトを設計する際にもモバイルファーストを意識して取り組みたいところです。',
    image_url: 'https://developers.google.com/search/mobile-sites/imgs/mobile-seo/viewport.png?hl=ja'
  },
  {
    id: '66735',
    title: 'SPAにおけるgoogleクローラ対策',
    description: 'SPAでもgoogleに認識されるって言うけど、本当なの？認識されてもSSRにやっぱ勝てないんじゃないの？',
    date: '2017-12-19',
    author: 'iyamasat',
    body: '# 結論\n\nuserAgentでgoogleクローラを判別して、その場合のみSSRするのが良い\n\n# 背景\n\nSPAでもgoogleに認識されるって言うけど、本当なの？\n\n認識されてもSSRにやっぱ勝てないんじゃないの？\n\n<br>\n\n**現段階だとやっぱSSRに勝てない(らしい...)**\n\n# SEO専門家とシニアエンジニアに聞いてみた\n\ngoogleクローラ用に遷移を分ける前と後とでオーガニック流入に差がかなり出た(らしい...)\n\n↑ここの実数値については探り入れてみます\n\n# 仕組み\n\n![center](https://raw.githubusercontent.com/KentaRohw/img/master/image02.png)\n\n# 懸念\n\n* User向けとgoogleクローラ向けで機能の差分がでてしまったら、信頼性が落ちて、結果的にSEOが悪くなってしまう\n\n* 保守大変そう\n\n<strong>引き続き調査してきます</strong>\n\n# 参考\n\nhttps://qiita.com/shimpeiws/items/f0bf909079b939b354e3',
    image_url: 'https://raw.githubusercontent.com/KentaRohw/img/master/image02.png'
  },
  {
    id: '12145',
    title: 'SEO for SPA',
    description: 'GoogleやBingのクローラーがどこまでJavaScriptを認識するのかをReactを使って検証してみます。加えて本サイトの構築手順や、MFIについて調べた事も簡単にお話しします。',
    date: '2017-12-10',
    author: 'kentatan',
    body: '## GooglebotとJavaScript\n\nGoogleの[技術に関するガイドライン](https://webmasters.googleblog.com/2014/10/updating-our-technical-webmaster.html)によると、ページ内で使用されているCSSやJavaScript、画像までもがGooglebot（クローラー）でアクセスすることを発表しました。\n\nその流れも影響しているのか、SPA（JavaScript）を利用してサービスを構築するケースは年々増えており、特に「AbemaTV」や「インスタグラム」は代表的なサービスとして身近に感じるかもしれません。\n\n## SPAで構築されたウェブサービス\n\n- https://abema.tv/\n\n- https://www.airbnb.jp/\n\n- https://www.dropbox.com/\n\n- https://www.paypal.com/jp/home\n\n- https://www.udemy.com/\n\n- https://www.instagram.com/\n\n- https://greative.jp/\n\n- https://campus.doda.jp/\n\n- https://s8a.jp/\n\n※ ReactやAngular、Vueあたりを採用されているようです\n\n## このサイト自体をSPAで作ってみました\n\nGooglebotはJavaScriptを解釈してくれる…\n\nとはいっても、SPAで構築する際には注意すべきポイントは必ずあるはずです。\n\nまた、Google以外の検索エンジンからも実際どう評価されるのかを検証するためにも本サイトをSSRなしでSPAにしてみました。\n\nちなみにこのサイトは自分のお勉強がてらReactで構築していますので、導入の際のTipsなんかもブログに残せていければと思います。\n\n## JSでレンダリングしたWebページはどこまでクロールされるのか\n\nブログの準備が整ったところで、Google Search ConsoleやBing Webマスターツールから実際のインデックス結果やSERP表示にどう影響するのかを検証してみたいと思います。結果についてはブログを通じてご紹介したいと思います！',
    image_url: 'https://raw.githubusercontent.com/KentaRohw/img/master/seo_js.png'
  }
]

export default ENTRYS;
