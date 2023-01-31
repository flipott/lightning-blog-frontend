import Header from "./components/Header";
import Footer from "./components/Footer";
import "./app.css"
// import posts from "./components/dummyPosts";
import React, {useState, useEffect} from 'react';






function App() {

  let [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4001/post")
    .then(response => response.json())
    .then(data => setPosts(data))
  }, [])

  return (
    <div className="app">
      <Header />
      <div className="main">
       {posts && posts.map((post) => {
        return (
          <div class="post">
            <p class='post-title'>{post.title}</p>
            <div class='post-info'>
              <div>{post.username}</div>
              <div>{new Date(post.time).toLocaleString('default', { day: 'numeric', month: 'long', year: 'numeric'})}</div>
            </div>
            <p class='index-body'>{post.body}</p>
            <button class="read-more">Read more...</button>
          </div>
        )
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
