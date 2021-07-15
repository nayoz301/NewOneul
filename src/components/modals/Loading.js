import React from "react";
import {
  LoadingWrapper,
  LoaderBook,
  Page,
  Text,
} from "../../styles/loading/Loading.style";

const Loading = () => {
  return (
    <>
      <LoadingWrapper modal={true}>
        <LoaderBook modal={true}>
          <Page modal={true}></Page>
          <Page modal={true}></Page>
          <Page modal={true}></Page>
        </LoaderBook>
        <Text modal={true}>오늘을 담는 중</Text>
      </LoadingWrapper>
    </>
  );
};

export default Loading;
