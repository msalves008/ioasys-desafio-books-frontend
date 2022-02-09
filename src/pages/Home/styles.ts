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
    /*    width: 100%;
    height: 100%; */
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 1rem;
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
`;
