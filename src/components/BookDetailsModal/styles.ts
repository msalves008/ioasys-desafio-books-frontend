import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: scroll;
  > img {
    width: 100%;
    max-width: 21.8rem;
  }
  .wrapper-book-details {
    margin-left: 3rem;
    width: 40%;
    padding: 0.3rem;
    h1 {
      width: 100%;
      font-size: 1.75rem;
      line-height: 2.5rem;
      font-weight: 500;
      color: var(--gray-500);
      display: inline-block;
      white-space: nowrap;
      overflow: hidden !important;
      text-overflow: ellipsis;
    }
    p {
      font-size: 0.875rem;
      line-height: 1.25rem;
      color: var(--pink-800);
      font-weight: 400;
    }
    .wrapper-book-information {
      width: 100%;
      height: 50%;
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      strong {
        font-size: 0.875rem;
        line-height: 1.75rem;
        color: var(--gray-500);
        text-transform: uppercase;
      }
      .book-information-row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        > p {
          color: var(--gray-500);
          font-weight: 500;
        }
        > span {
          color: var(--gray-300);
          font-size: 0.875rem;
          line-height: 1.25rem;
        }
      }
      .wrapper-book-review {
        width: 100%;
        height: 40%;
        padding-top: 2rem;
        display: flex;
        flex-direction: column;
      }
    }
  }
  @media (min-width: 1024px) {
    background-color: red;
    .wrapper-book-details::-webkit-scrollbar {
      width: 0.4rem;
      height: 3rem;
    }
    .wrapper-book-details::-webkit-scrollbar-track {
      background: transparent;
    }
    .wrapper-book-details::-webkit-scrollbar-thumb {
      height: 2rem;
      width: 0.25rem;
      max-height: 1rem !important;
      background: var(--pink-800);
      border-radius: 1.8rem;
    }
  }
  @media (max-width: 425px) {
    width: 100%;
    height: auto;
    flex-direction: column;
    align-items: center;
    overflow-y: hidden;

    > img {
      max-width: 15rem;
    }
    .wrapper-book-details {
      width: 100%;
      height: 100%;
      padding: 0;
      margin: 0 auto;
      h1 {
        padding-top: 1rem;
      }

      .wrapper-book-review {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
