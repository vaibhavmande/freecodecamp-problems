const TWIITER = "https://twitter.com/intent/tweet";
const TUMBLR = "https://www.tumblr.com/widgets/share/tool";

export function createTwitterIntent(text: string): string {
  return `${TWIITER}?text=${encodeURIComponent(text)}`;
}

export function createTumblrIntent(text: string, author: string): string {
  const postType = "quote";
  const canonicalUrl =
    "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button";

  const post = `${TUMBLR}?posttype=${postType}&caption=${author}&content=${text}${canonicalUrl}`;
  return post;
}
