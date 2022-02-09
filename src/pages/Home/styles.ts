import styled from "styled-components";
import bg from "../../assets/BackgroundImage2.png";
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  flex-direction: column;

  .cards {
    width: 100vw;
    max-width: 1130px;
    height: 32rem;
    align-items: center;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(272px, 1fr));
    grid-template-rows: repeat(3, 1fr);
    grid-row-gap: 1rem;
    margin: auto;
  }
  @media (max-width: 1024px) {
    .cards {
      width: 90%;
      align-items: center;
      border: 1px solid black;
      margin: 0;
      grid-row-gap: 0 !important;
    }
  }
`;

export const Footer = styled.footer`
  width: 100vw;
  max-width: 1130px;
  padding-top: 1.5rem;
  .pagination {
    width: 20%;
    margin-left: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    span {
      font-size: 1rem;
      line-height: 1.4rem;
      font-weight: 400;
      color: var(--gray-500);
    }
    button {
      width: 2rem;
      height: 2rem;
      border: 2px solid rgba(51, 51, 51, 0.2);
      border-radius: 50%;
      background-color: transparent;
    }
  }

  @media (max-width: 1024px) {
    width: 90%;
    position: relative;
  }
`;
