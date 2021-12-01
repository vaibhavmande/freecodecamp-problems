const TWIITER = "https://twitter.com/intent/tweet";
const TUMBLR = "https://www.tumblr.com/widgets/share/tool";

// https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22Definiteness%20of%20purpose%20is%20the%20starting%20point%20of%20all%20achievement.%22%20W.%20Clement%20Stone
export function createTwitterIntent(text: string): string {
  const tweet = encodeURIComponent(text);
  return `${TWIITER}?text=${text}`;
}

// https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=W.%20Clement%20Stone&content=Definiteness%20of%20purpose%20is%20the%20starting%20point%20of%20all%20achievement.&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button

// https://www.tumblr.com/widgets/share/tool?posttype=quote&caption=Kevin%20Kruse&content=Life%20isn%E2%80%99t%20about%20getting%20and%20having,%20it%E2%80%99s%20about%20giving%20and%20being.
export function createTumblrIntent(text: string, author: string): string {
  const postType = "quote";
  const canonicalUrl =
    "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button";

  const post = `${TUMBLR}?posttype=${postType}&caption=${author}&content=${text}${canonicalUrl}`;
  return post;
}
