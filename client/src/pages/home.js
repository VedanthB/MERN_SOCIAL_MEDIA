import React from "react";
import Status from "../components/home/Status";
import Posts from "../components/home/Posts";
import LoadIcon from "../images/loading.gif";
import { useSelector } from "react-redux";

function Home() {
  const { homePosts } = useSelector((state) => state);

  return (
    <div className="hoe row mx-0">
      <div className="col-md-8">
        <Status />
        {homePosts.loading ? (
          <img src={LoadIcon} alt="loading" className="d-block mx-auto" />
        ) : homePosts.result === 0 && homePosts.posts.length === 0 ? (
          <h2 className="text-center">No Post</h2>
        ) : (
          <Posts />
        )}
      </div>
      <div className="col-md-4"></div>
    </div>
  );
}

export default Home;
