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

  const [post, setPost] = useState([]);

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
      setPost(postsData.data.user.publication.posts);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchPost();
  }, []);

  console.log(post);

  return (
    <section id="posts">
      <div className="container">
        <h2 className="section-title">Recent Posts</h2>
        <div className="contact-"></div>
      </div>
    </section>
  );
}
