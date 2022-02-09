import styled from "styled-components";

export const Container = styled.header`
  width: 100vw;
  height: 7.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .wrapper-header {
    width: 100%;
    max-width: 1130px;
    height: 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 12.4rem;
    }
    .infos {
      width: 18rem;
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      span {
        font-size: 1rem;
        font-size: 1rem;
        font-weight: 400;
        color: #333333;
      }
      strong {
        font-size: 1rem;
        font-weight: 500;
        color: #333333;
        margin-left: 0.5rem;
      }
      button {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        border: 2px solid rgba(51, 51, 51, 0.2);
        box-sizing: border-box;
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        margin-left: auto;
        img{
          width: 1.2rem;
          height: 1.2rem;
        }
      }
    }
  }
  @media(max-width: 1024px) {
    .wrapper-header{
      width: 90%;
      height: 4.5rem;
      img{
        width: 10rem;
      }
    }
  }
  @media(max-width: 768px) {
    .wrapper-header{
      width: 90%;
      height: 4.5rem;
      img{
        width: 10rem;
      }
    }
  }
  @media(max-width: 4258px) {
    .wrapper-header{
      img{
        width: 10rem;
      }
      .infos{
        span, strong{
          display: none;
        }
      }
    }
  }
`;
