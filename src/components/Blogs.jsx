import { useState, useEffect } from "react";
import { formatDistanceToNow } from "date-fns";
import { BiBookBookmark, BiCalendarAlt } from "react-icons/bi";

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
            posts.slice(0, 7).map((post, idx) => (
              <div className="post" key={idx}>
                <div className="post-header">
                  <img
                    src={post.coverImage}
                    className="post-header__image"
                    alt="Post Cover Image"
                  />
                </div>
                <div className="post-body">
                  <a
                    href={`https://just9krish.hashnode.dev/${post.slug}`}
                    target="_blank"
                    className="post-body__title"
                  >
                    {post.title}
                  </a>
                  <div>
                    <p className="post-body__brief">{post.brief}</p>
                  </div>
                  <div className="post-body__info">
                    <p className="post-body__info-date">
                      <span>
                        <BiCalendarAlt />
                      </span>
                      {formatDistanceToNow(new Date(post.dateAdded), {
                        addSuffix: true,
                      })}
                    </p>
                    <button className="post-body__info-tag">React</button>
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
