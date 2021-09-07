import React from "react";
import styled from "styled-components";

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

const FooterCheckBox = styled.div`
  display: flex;
  font-size: 1.2rem;
  color: #605138;
  font-family: var(--thick-font);
  font-weight: 800;

  align-items: center;
`;

const SwitchInput = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;
`;

const SwitchSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #827870;
  transition: 0.4s;
  border-radius: 1rem;

  &:before {
    content: "";
    position: absolute;
    width: 1.3rem;
    height: 1.3rem;
    left: 1px;
    bottom: 1px;
    background-color: #fff;
    transition: 0.4s;
    border-radius: 50%;
  }
`;
const Switch = styled.label`
  position: relative;
  display: flex;
  width: 3.2rem;
  height: 1.5rem;
  right: 0.7rem;
  margin-bottom: 0;
  vertical-align: middle;
  ${SwitchInput}:checked + ${SwitchSlider} {
    background-color: #827870;
  }
  ${SwitchInput}:checked + ${SwitchSlider}:before {
    transform: translateX(1.7rem);
  }
`;

const TextSpan = styled.span`
  justify-content: center;
  font-size: 1.4rem;
  width: 5rem;
  margin: 0rem;
`;

/*
기존의 체크 박스 고쳐볼 것
const FooterCheckBox = styled.div`
  display: flex;
  font-size: 1.2rem;
  color: #605138;
  font-family: var(--thick-font);
  font-weight: 800;

  align-items: center;
`;

const FooterInput = styled.input.attrs({ type: "checkbox" })`
  // opacity: 0;
  display: none;
`;

const FooterLabel = styled.label`
  poition: absolute;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #605138;
  font-family: var(--thick-font);
  font-weight: 800;
`;

const FooterInput = styled.input.attrs({ type: "checkbox" })`
  + {
    ${FooterLabel} {
      display: block;
      margin: 0.2em;
      cursor: pointer;
      padding: 0.2em;
      &:before {
        content: "";
        border: 0.1rem solid #827870;
        border-radius: 50%;
        display: inline-block;
        width: 1rem;
        height: 1rem;
        margin-right: 0.5rem;
        vertical-align: center;
        align-items: center;
        color: transparent;
        transition: 0.2s;
      }
      &:active {
        &:before {
          transform: scale(0);
        }
      }
    }
  }
  display: none;
  &:checked {
    + {
      ${FooterLabel} {
        &:before {
          background-color: #837970;
          border-color: #837970;
          color: #fff;
        }
      }
    }
  }
`;
*/
