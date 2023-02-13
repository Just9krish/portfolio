import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { formatDistanceToNow } from "date-fns";

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
                  <a href="#" className="post-body__title">
                    {post.title}
                  </a>
                  <div>
                    <p className="post-body__brief">{post.brief}</p>
                  </div>
                  <div className="post-body__info">
                    <p className="post-body__info-date">
                      <span>
                        <FontAwesomeIcon icon={faCalendar} />
                      </span>
                      {formatDistanceToNow(new Date(post.dateAdded), {
                        addSuffix: true,
                      })}
                    </p>
                    <span className="post-body__info-tag">React</span>
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
