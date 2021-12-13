import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
      --background: #f0f2f5;
      --red: #e62e4d;
      --blue: #5429cc;
      --blue-light: #6933ff;
      --green: #33cc95;
      --shape: #ffffff;
      --text-title: #363f5f;
      --text-body: #969cb3;
    }
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    html {
      @media (max-width: 1080px) {
        font-size: 93.75%;
      }
      @media (max-width: 728px) {
        font-size: 87.5%;
      }
    }
    body {
      background-color: var(--background);
      -webkit-font-smoothing: antialiased;
    }
    body,
    input,
    textarea,
    button {
      font-family: "Poppins", sans-serif;
      font-weight: 400;
    }
    
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    strong {
      font-weight: 600;
    }
    button {
      cursor: pointer;
    }
    [disabled] {
      opacity: 0.6;
      cursor: not-allowed;
    }
    .react-modal-overlay{
      background-color: rgb(0,0,0,0.5);
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .react-modal-content{
      max-width: 576px;
      width: 100%;
      padding: 2rem;
      background-color: var(--background);
      border-radius: 0.25rem;
      position: relative;
    }
`;