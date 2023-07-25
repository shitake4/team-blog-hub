import {Author} from "@src/types";

export const author: Author = {
  authorId: "john_doe",
  name: "John Doe",
  websiteUrl: "https://shitake4.tech",
  role: "SRE",
  bio: "Site Reliability Engineer.",
  avatarSrc: "/avatars/doe.jpg",
  webServices: [
    {name: 'twitter', userName: "shitake4", url: 'https://twitter.com/shitake4'},
    {name: 'github', userName: "shitake4", url: 'https://github.com/shitake4'},
    {name: 'zenn', userName: "shitake4", url: 'https://zenn.dev/shitake4'},
    {
      name: 'note',
      userName: "shitake4_",
      url: 'https://note.com/shitake4_',
      rss: {url: 'https://note.com/shitake4_/rss'}
    },
    {
      name: 'speakerdeck',
      userName: "shitake4",
      url: 'https://speakerdeck.com/shitake4',
      rss: {url: 'https://speakerdeck.com/shitake4.atom'}
    },
    {
      name: 'qiita',
      userName: "shitake4",
      url: 'https://qiita.com/shitake4',
      rss: {url: 'https://qiita.com/shitake4/feed'}
    },
    {name: 'wantedly', userName: "shitake4", url: 'https://medium.com/@shitake4'},
    {name: 'linkedin', userName: "shitake4", url: 'https://medium.com/@shitake4'},
    {name: 'instagram', userName: "shitake4", url: 'https://medium.com/@shitake4'},
    {name: 'facebook', userName: "shitake4", url: 'https://medium.com/@shitake4'},
    {name: 'youtube', userName: "shitake4", url: 'https://medium.com/@shitake4'},
    {name: 'pixiv', userName: "shitake4", url: 'https://medium.com/@shitake4'},
    {
      name: 'hatenablog',
      userName: "shitake4",
      url: 'https://blog.shitake4.tech',
      rss: {url: 'https://blog.shitake4.tech/feed?size=100'}
    },
  ],
};
