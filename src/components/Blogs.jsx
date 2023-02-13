import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";

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
        <h2 className="section-title dark-blue-text">Recent Posts</h2>
        <div className="posts">
          {posts.length > 0 ? (
            posts.map((post) => (
              <div className="post">
                <div className="post-header">
                  <img
                    src={post.coverImage}
                    className="post-header__image"
                    alt="Post Cover Image"
                  />
                </div>
                <div className="post-body">
                  <div className="post-body__info">
                    <span className="post-body__info-tag">Technology</span>
                    <p className="post-body__info-date">
                      <span>
                        <FontAwesomeIcon icon={faCalendar} />
                      </span>
                      {new Date(post.dateAdded).toLocaleDateString()}
                    </p>
                  </div>
                  <h4 className="post-body__title">{post.title}</h4>
                  <div>
                    <p className="post-body__brief">{post.brief}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </section>
  );
}
