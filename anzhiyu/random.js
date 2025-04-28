var posts=["2025/04/28/getlink/getlink/","2025/04/27/Docs/about_notice/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };