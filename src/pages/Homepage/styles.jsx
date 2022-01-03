import styled from "styled-components";

const HomeContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  height: calc(100vh - 100px);
  padding: 4px 12px;
  overflow-x: hidden;
  display: flex;

  #photoDiv {
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    animation: left_to_right 1s 1 ease 0.5s both;

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
    animation: right_to_left 1s 1 ease 1s both;

    h1 {
      font-size: 28px;
      font-weight: bold;
    }

    h2 {
      font-size: 36px;
      font-weight: bold;
      color: var(--green);
    }

    h3 {
      font-size: 24px;
    }

    p {
      font-size: 16px;
    }

    #skillsDiv {
      text-align: center;
      display: flex;
      gap: 5px;

      div {
        border: 1px solid var(--gray4);
        padding: 3px;

        svg {
          transform: translateY(2px);
        }
      }
    }

    #learningDiv {
      text-align: center;
      display: flex;
      gap: 5px;

      div {
        border: 1px solid var(--gray4);
        padding: 3px;

        svg {
          transform: translateY(2px);
        }
      }
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

      #skillsDiv {
        justify-content: center;

        div {
          font-size: 12px;
        }
      }

      #learningDiv {
        justify-content: center;

        div {
          font-size: 12px;
        }
      }
    }
  }

  @keyframes left_to_right {
    from {
      opacity: 0;
      transform: translateX(-100px);
    }
  }

  @keyframes right_to_left {
    from {
      opacity: 0;
      transform: translateX(100px);
    }
  }
`;

export default HomeContainer;
