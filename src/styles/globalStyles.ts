import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 :root {
    --background:#FFFFFF;
    --gray-300:#999999;
    --gray-400:#666666
    --gray-500:#333333;
    --pink-800:#AB2680;
  }
  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }
 html{
   @media(max-width: 1080px){
      font-size: 93.75%;
   }
   @media(max-width: 720px){
      font-size: 87.5%;
   }
 }
 body{ 
  background: var(--background);
  -webkit-font-smoothing: antialiased;
 }
 body, input, textarea, button{
   font-family: 'Heebo', sans-serif;
   font-weight: 400;
 }
 .link{
  text-decoration: none;
  color: inherit;
}
 h1,h2,h3,h4,h5,h6,strong{
  font-style: normal;
  font-weight: 600;
  font-family: 'Heebo';
  color: var(--gray-300);
 }
 h1{
  font-size: 5rem;
  line-height: 5.18rem;
  letter-spacing: -0.9px;
 }
 h2{
  font-size: 3.75rem;
  line-height: 4rem;
  letter-spacing: -0.04rem;
 }
 h3{
  font-size: 2.5rem;
  line-height: 2.37rem;
  letter-spacing: -0.025rem;
 }
 h4{
  font-size: 1.87rem;
  line-height: 2.31rem;
  letter-spacing: -0.022rem;
 }
 h5{
  font-size: 1.5rem;
   line-height: 2.12rem;
 }
 h6{
  font-size: 1.25rem;
  line-height: 1.8rem;
 }
 span{
  font-size: 1rem;
  line-height: 1.4rem;
 }
 p{
  font-size: 0.87rem;
  line-height: 1.3rem;
 }
 button{
   cursor: pointer;
 }
 [disabled]{
   opacity: 0.6;
   cursor: not-allowed;
 }
 .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 769px;
    height: 100%;
    max-height: 608px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }
  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    transition: filter 0.2;
    &:hover {
      filter: brightness(0.6);
    }
  }
  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    transition: filter 0.2;
    &:hover {
      filter: brightness(0.6);
    }
  }
  @media(max-width: 1024px){
    .ReactModal__Html--open,
.ReactModal__Body--open {
  overflow: hidden; 
}

    .react-modal-content {
      width: 100%;
      max-width: 48rem;
      height: 100%;
      max-height: 35rem;
    }
  }
  @media(max-width: 425px){
    width: 100vw;
    height: 100vh;
    .react-modal-content {
      width: 100vw;
      height: 100vh;
      position: relative;
      overflow: scroll;

    }
    .react-modal-content::-webkit-scrollbar {
      width: 0.4rem;
      height: 3rem;
    }
    .react-modal-content::-webkit-scrollbar-track {
      background: transparent;
    }
    .react-modal-content::-webkit-scrollbar-thumb {
      height: 2rem;
      width: 0.25rem;
      max-height: 1rem !important;
      background: var(--pink-800);
      border-radius: 1.8rem;
    }
  }

`;
