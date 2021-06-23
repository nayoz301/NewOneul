import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  // 꼭 rem을 사용하세요 ~!
  // 1px, 2px 정도는 px로 사용하셔도 괜찮습니다.
  // 10px === 1rem

  html {
    font-size: 62.5%;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    --primary-color: #EAE8DA;
    --secondary-color: #B2B8A3;
    --third-color: #C1B297;
    --point-color: #CAA791;
  }
`;
