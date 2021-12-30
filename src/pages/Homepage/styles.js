import styled from "styled-components";

const HomeContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  height: calc(100vh - 100px);
  padding: 4px 12px;
  display: flex;

  #photoDiv {
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;

    img {
      width: 90%;
      border-radius: 100%;
    }
  }

  #aboutDiv {
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    h1 {
      font-size: 28px;
      font-weight: bold;
    }

    h2 {
      font-size: 36px;
      font-weight: bold;
    }

    h3 {
      font-size: 24px;
    }

    p {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 750px) {
    height: unset;
    padding: 12px;
    flex-direction: column;
    align-items: center;
    gap: 32px;

    #photoDiv {
      width: 100%;
      justify-content: center;
      align-items: flex-start;

      img {
        width: 50%;
      }
    }

    #aboutDiv {
      width: 80%;
      align-items: center;
      text-align: center;

      h1 {
        font-size: 24px;
      }

      h2 {
        font-size: 28px;
      }

      h3 {
        font-size: 20px;
      }

      p {
        font-size: 12px;
      }
    }
  }
`;

export default HomeContainer;
