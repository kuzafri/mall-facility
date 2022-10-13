import PrivateHeader from "components/Layout/PrivateHeader";
import PublicHeader from "components/Layout/PublicHeader";
import Post from "components/News/Post";
import React from "react";

const News = () => {
  return (
    <>
      <PublicHeader title="News" />
      <Post />
    </>
  );
};

export default News;
