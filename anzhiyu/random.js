var posts=["2025/03/24/hello-world/","2025/03/24/test/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };