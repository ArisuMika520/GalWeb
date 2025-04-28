var posts=["2025/04/27/Docs/about_notice/","2025/04/28/getlink/getlink/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };