import { useParams } from "react-router";
import "../server.js";
import { useState, useEffect } from "react";
export default function VansDetails() {
  const { id } = useParams();

  const [post, updatedPost] = useState({});

  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((result) => updatedPost(result));
  }, []);

  // const postDetails = post.vans?.find((item) => {
  //   return item.id === id;
  // });

  const postDetails = post.van;

  if (!postDetails) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <article className="van-card">
        <img
          src={postDetails.imageUrl}
          alt={postDetails.name}
          className="van-image"
        />

        <div className="van-info">
          <span className="van-type">{postDetails.type}</span>

          <h1>{postDetails.name}</h1>

          <p className="van-price">
            ${postDetails.price} <span>/ day</span>
          </p>

          <p className="van-description">{postDetails.description}</p>

          <button type="button" className="rent-button">
            Rent this van
          </button>
        </div>
      </article>
    </>
  );
}
