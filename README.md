# 在庫チェックアプリ（開発中）

## はじめに

2024年頃から本格的にプログラミングの勉強を始めた私ですが、HTML・CSSから始まりついにReactまでたどり着きました。そんな私が0から作成する初めてのアプリがこちらです。私はプログラミングを用いて、何か問題を解決したい・誰かの役に立つアプリを作りたいという思いが強いです。そのため、経緯や利用シーン、誰の役に立つのかを重視しています。その思いがこのプロダクトで伝われば幸いです。

<br>

## 使用方法
1. [inventory-check-app.vercel.app](https://inventory-check-app.vercel.app/)にアクセスする。
2. テスト用アカウントでログインする。メールアドレスは`test@test.com`、パスワードは`123456`です。
3. 在庫を入力する。(iPadで使ってもらうため、在庫の入力は画面右下のキーパッドからしか行えません)
4. 全ての項目を入力したら確定ボタンを押して終了。(入力内容はスプレッドシートに自動で保存される(スプレッドシートは権限関係でこちらに共有していません))
5. 項目の追加も可能です。

<br>

## 使用技術と選定理由

- React(学習の成果を出したかったため。)
- Supabase(手軽にデータベース(バックエンド)が構築できるため。)
- Bootstrap(スタイル当てに時間を割きたくないため。)
- GAS（Google Apps Script）(スプレッドシートと連携できるため。)

<br>

## 開発経緯

私がアルバイトをしている飲食店では、毎日在庫チェック(通称：棚卸)を行っています。チェックリストは紙で、営業終了後にその写真を撮って LINEで共有しなければなりません。共有後は社員さんが写真を見て在庫数をエクセルに入力しています。非常に非効率的です。その上、リスト内の文字は小さく、書く欄も狭いため、余計に時間がかかってしまいます。この作業は非常に面倒で、以前から「絶対電子化したほうが良いだろ！！！」と思っていたので実装にチャレンジしました。果たしてどれほどの時間短縮ができるのか！？~~納得のいくアプリに仕上がったら店長に直談判してお店に導入してもらいます！~~実際に導入してもらいました”！！(2024/07/05)

<br>

## バージョン 1.0.0（2024/06/18 完成）

<img src="https://github.com/vivy-phtela/stockCheckApp/assets/114901440/f99127be-e044-4f3e-b9a5-5e49fdd0dea2" width=500>

最低限の機能を備えたアプリが完成しました。ラーメン屋だってバレてしまいますね(笑)
入力はキッチン備え付けの iPad で行います。キッチンには原則スマホを持ち込めないため、レスポンシブ対応はスキップします。
使いやすさにとにかくこだわったので、こだわりポイントをいくつか挙げます。

### `1. 在庫数の入力は右下のキーパッドで行う`

仕事中は手袋を付けているので細かい操作がしにくいです。そのため、大きなキーパッドを常時表示させました。加えて、入力欄を押してもキーボードが勝手に出てこないようにしました。キーパッドでしか入力できないようにしたことで、予期せぬ入力も防ぐことができるので一石二鳥です！

### `2. 入力が完了した項目は背景色が変化`

入力が完了した項目は背景が水色になります。紙でのチェックは今どこまでやったかを見失ったり、あとどこが残っているかわからなくなったりすることが多かったという経験からこの発想に至りました。

### `3. 過去3日の在庫を表示できる`

入力欄の右横のボタンを押すと過去 3 日分の在庫数が確認できます。これは紙にはない、電子化したからこそできる機能です。

### `4. 現在入力している欄の色が変化`

今からどこを入力するのかが視覚的に把握できます。地味に便利です。

### `5. 全ての欄が入力されないと確定ボタンを押せない`

これからは在庫の確認漏れが確実になくなるようになります。安心して在庫チェックを任せることができます。

### `6. 本日の棚卸が終わっているかを表示`

本日の棚卸が終わっているかが画面上部に表示されます。棚卸しが無駄に何度も行われることを防止します。

<br>

以上が特にこだわった点です。次は入力内容を社員さんに自動で報告する部分をメインで実装を進めていきます。

## バージョン 1.1.0（2024/07/01 完成）
- flask と SQLite でバックエンドを構築していましたが、より早く運用を開始したいため、Supabase という BaaS (Backend As A Service)に変更しました。
- 次はデプロイを行います。手軽にデプロイできるらしい Vercel を使用する予定です。

## バージョン 2.0.0（2024/07/04 完成）

- Vercel でデプロイを行いました。
- 確定ボタンを押した時に入力したデータが CSV ファイルとして保存されるようにしました。
- 次は実際にお店で使用してもらってフィードバックを得ようと思います。

### この日、後輩に実際にテストしてもらいました！

<img src="https://github.com/vivy-phtela/stockCheckApp/assets/114901440/35b7b7fe-eccb-44b6-999f-e1bd89f8a54b" width=300>
<br>
「めっちゃやりやすい！」と少し感動してました(笑)以前の棚卸よりも10分ほど早くなりました。改善点もいくつか見つかったので修正を行い、毎日使ってもらえるアプリを目指します。

## バージョン 3.0.0（2024/10/2 完成）
間が空いてしまいましたが、この3ヶ月でインターンやチーム開発などの様々な経験を積むことができ、確実に成長できたと思います。学んだことを活かし、このアプリをより良い物に改善していきます！
GitHubの使い方もわかってきたので、美しいGit運用を心がけたいと思います。

- ビルドツールをWebpackからViteに変更しました。
- 確定ボタンを押したとき、ボタンが押せているかわからず、何度も押すと押した分だけ処理が行われるという問題がありました。→ 確認のモーダルを追加しました。
- Checklist.jsxのファイルの内容が膨大で可読性が下がっていたため、コンポーネント化して見やすくしました。

## バージョン 4.0.0（2024/10/4 完成）
<img src="https://github.com/user-attachments/assets/591c3c38-a054-4fbf-a4e2-8491f01d0b2b" width=500>
<br>

- SupabaseのAuthenticationを利用して認証機能を追加しました。

このアプリは私のアルバイト先での導入を考えているため、ユーザの新規登録機能は設けませんでした。他の店舗で使用してもらうようになったら、Supabase内で直接アカウントを追加するというイメージです。また、認証機能追加に伴い、データベースにユーザIDを格納するカラムを追加し、ログイン中のユーザのデータを取得できるようにしました。

## バージョン 4.1.0（2024/10/6 完成）

- 入力内容をローカルストレージに保存するようにしました。

入力中にお客さんが来て、チェックを中断することが多々あります。再開時にページ再読み込みにより入力途中のデータが全て消えてしまうという意見をスタッフからもらいました。セッションが切れても入力を途中から再開できるように、入力内容をローカルストレージに保存できるようにしました。これは非常に神機能だと思います。スタッフの反応が楽しみです。

## バージョン 4.2.0（2024/10/30 完成）

- デバッグ文がコンソールに表示されていたため、削除しました。
- 項目が何もない時、確定ボタンを押せるようになっていたため修正しました。

## バージョン 4.3.0（2024/11/30 完成）

- プロップスの型を定義しました。
- 確認モーダルで「はい」を押して、データ送信中のときにもう一度「はい」を押すことができるようになっていたので、押せなくしました。
- 確認モーダルで「はい」を押して、データ送信中のときにLoadingのアイコンが表示されるようにしました。

## バージョン 5.0.0（2024/12/1 完成）

- 入力した在庫がGoogleスプレッドシートに自動で保存されるようになりました。

LINEボットを作成し、自動で在庫データをLINEで送信できるようにしようと考え、実装方法を検討したのですが、LINEボットはファイル送信に対応していないことがわかったため、LINEボットの使用は諦めました。(社員さんの負担を減らすには表形式のデータの受け渡しがマストだった。)
結果、Googleスプレッドシートに自動的に保存するようにしました。GAS（Google Apps Script）を活用することで、POSTするだけでスプレッドシートとの連携が可能になりました。

## バージョン 5.1.0（2024/12/28 完成）

- ディレクトリ構造を大幅に変更して可読性を向上させました。
- カスタムフックを用いて、ビューとロジックを分離しました。

長期インターンでの学びを活かして、大規模なリファクタリングを行いました。かなり可読性が上がったと思います。

## バージョン 5.2.0（2024/12/29 完成）

- ファビコンを追加しました。
- スプレッドシートへの保存内容をわかりやすくしました。
- 在庫履歴の表示バグを緩和しました。

以下のようにスプレッドシートに商品名、単位も表示させることで在庫状況が以前よりも把握しやすくなりました。

<img width="559" alt="スクリーンショット 2024-12-29 18 05 09" src="https://github.com/user-attachments/assets/8d0ae675-e79a-4f3a-aaa9-f9fab8b41c23" />


以下のように、単位が2つ存在する場合にうまくグルーピングができないバグが発生していました。

<img width="618" alt="スクリーンショット 2024-12-29 16 31 04" src="https://github.com/user-attachments/assets/bf20cc49-dcc3-42a8-b869-e1d92afcd48e" />

このバグの原因は、グルーピングをDBのタイムスタンプによって行っており、グルーピングの判定をタイムスタンプの秒数(`例：10:09:12の場合、12の部分`)でしていたからです。DBのタイムスタンプはほぼ同時刻になりますが、まれに秒数部分が1桁ズレてしまいます。

解決方法としては、①グルーピングの判定を分にする、②DBに送る際にバッチ処理で固有IDを紐づけて、固有IDでグルーピングを行うの2つが思いつきました。①はバグを完全に消すことはできませんが、実装が非常に容易です。②は確実にこのバグを解消できそうですが、工数がかかります。
このアプリの利用(在庫の確認作業)は1日1回であるため、①で良いと判断しました。①の方法でもバグの発生頻度はかなり低減することができます。12:59などの時間の変わり目に確定ボタンを押さない限り、バグは発生しません。

<br>

## 今後追加したい機能
+ 在庫数が基準値を下回ったときにアラートを出すようにしたい。

    → 単位が2つ(例：〜箱-袋)ある時のアラート基準値の設定が難しいため、一旦スキップ中。
+ ~~LINEボットを作成し、自動で在庫データをLINEで送信できるようにしたい。(現在は出力されたCSVファイルをLINEで社員さんに転送する方式)~~
+ ~~認証機能を追加し、他店でも使用できるようにしたい。~~
+ ~~入力途中でお客さんが来て、チェックを中断することが多々あります。再開する時に再読み込みにより入力途中のデータが消えてしまうという意見をスタッフからもらいました。セッションが切れても入力を途中から再開できる機能を追加したいです。~~
+ 在庫管理機能以外の新たな機能を追加したい。(チャーシューカット記録？)
+ 在庫の増減を図表等で可視化したい。
