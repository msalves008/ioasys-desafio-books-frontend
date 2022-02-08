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
`;
