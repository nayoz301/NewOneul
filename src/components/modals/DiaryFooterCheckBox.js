import React from "react";
import {
  FooterCheckBox,
  SwitchInput,
  SwitchSlider,
  Switch,
  TextSpan,
} from "../../styles/modals/DiaryFooterCheckBox.style";

const DiaryFooterCheckBox = ({ isPublic, setIsPublic }) => {
  return (
    <FooterCheckBox>
      <Switch>
        <SwitchInput
          onClick={() => {
            setIsPublic(!isPublic);
          }}
        />
        <SwitchSlider />
      </Switch>
      <TextSpan>{!isPublic ? "비공개" : "공개"}</TextSpan>
    </FooterCheckBox>
  );
};

export default DiaryFooterCheckBox;
