import { IonContent } from "@ionic/react";
import PrivateHeader from "components/Layout/PrivateHeader";
import Post from "components/News/Post";
import React from "react";

const News: React.FC = () => {
  return (
    <>
      <PrivateHeader title="News" />
      <IonContent fullscreen>
        <Post />
      </IonContent>
    </>
  );
};

export default News;
