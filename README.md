# My Post Hub
![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/shitake4/shitake4.github.io/main)
![john_doe-Post-Hub](https://github.com/shitake4/my-post-hub/assets/8196476/9e55b413-b553-4639-8ebe-2e85486aec85)

Zenn、Qiita、Medium、note、はてなブログなどに投稿した記事を一覧にまとめて表示します。  
ポートフォリオサイトとして使うことができます。

こちらをForkして、作成しました。

- [チーム個々人のテックブログをRSSで集約するサイトを作った →](https://zenn.dev/catnose99/articles/cb72a73368a547756862)
- [catnose99/team-blog-hub: RSS based blog starter kit for teams](https://github.com/catnose99/team-blog-hub)

## Development
```bash
$ yarn install
$ yarn build
$ yarn dev
```

## Usage

以下より、RSSフィードを提供しています。
- https://{domain}/feed.xml
- https://{domain}/feed.json
- https://{domain}/atom.xml


### SNSを表示する
- `author.ts` に追加することでプロフィール下のSNSサイトへのアイコンリンクが表示されます。
```ts
export const author: Author = {
...
  webServices: [
    {name: 'github', userName: "shitake4", url: 'https://github.com/shitake4'},
...
```
![john_doe-Post-Hub (1)](https://github.com/shitake4/my-post-hub/assets/8196476/d3a36eaa-81f7-445c-ae99-a143056f66e9)


## Licence
- MIT
