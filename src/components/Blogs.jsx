import React from "react";
import { useState, useEffect } from "react";

export default function Blogs() {
  const query = `{
    user(username: "just9krish") {
      publication  {
        posts {
          title,
          slug,
          dateAdded,
          _id,
          coverImage,
          brief,
        }
      }
    }
  }`;
  console.log(JSON.stringify());

  const [posts, setPosts] = useState([]);

  async function fetchPost() {
    try {
      const response = await fetch("https://api.hashnode.com", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ query: query }),
      });

      const postsData = await response.json();
      setPosts(postsData.data.user.publication.posts);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <section id="posts">
      <div className="container">
        <h2 className="section-title">Recent Posts</h2>
        {posts.length > 0 ? (
          posts.map((post) => (
            <div className="blog">
              <div className="blog__header">
                <img
                  src={post.coverImage}
                  alt="Post Cover Image"
                  className="blog__image"
                />
              </div>
              <div className="blog__body">
                <span className="tag tag-blue">Technology</span>
                <h4>{post.title}</h4>
                <p>{post.brief}</p>
              </div>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </section>
  );
}
