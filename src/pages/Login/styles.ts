import styled from "styled-components";
import bg from "../../assets/BackgroundImage.png";
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  form {
    margin-left: 7.2rem;
    width: 23rem;
    height: 14rem;
    display: flex;
    flex-direction: column;
    img {
      padding-bottom: 2.5rem;
      width: 12.3rem;
    }
    gap: 1rem;
    input {
      border: none;
      background: rgba(0, 0, 0, 0.32);
      backdrop-filter: blur(2px);
      border-radius: 4px;
      height: 3.75rem;
      width: 23rem;
      padding-left: 1rem;
      color: #fff;
      font-style: normal;
      font-weight: normal;
      font-size: 1rem;
    }
    input::placeholder {
      font-style: normal;
      font-weight: normal;
      font-size: 1rem;
      line-height: 1.5rem;
      color: #ffffff;
    }
    .group-password {
      width: 23rem;
      position: relative;
      button {
        position: absolute;
        width: 5.3rem;
        height: 2.25rem;
        margin: auto;
        top: 0;
        bottom: 0;
        right: 1rem;
        border-radius: 2.75rem;
        z-index: 2;
        border: none;

        background-color: #fff;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: var(--pink-800);
      }
    }
  }
  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    form {
      margin-left: 0;

    }
  }
  @media (max-width:320px){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    form{
      width: 20rem;
      img{
        width: 10rem;
      }
      input,.group-password{
        width:100%;
      }
    }
  }
`;
