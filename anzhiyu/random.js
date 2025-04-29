var posts=["2025/04/27/Docs/about_notice/","2025/04/29/Docs/download/","2025/04/29/Docs/feedbackproblem/","2025/04/29/Docs/fromproblem/","2025/04/29/Teach/mdf/","2025/04/29/Teach/解压/","2025/04/29/Tools/tool/","2025/04/28/getlink/getlink/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };