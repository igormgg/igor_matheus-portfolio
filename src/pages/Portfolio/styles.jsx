import styled from "styled-components";

const PortfolioContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100%;
  padding: 12px;
  overflow: hidden;

  #upperDiv {
    display: flex;
    margin-top: 32px;

    #introDiv {
      width: 50%;
      color: var(--gray4);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      animation: left_to_right 1s 1 ease 0.3s both;

      h1 {
        max-width: 400px;
        width: 75%;
        font-size: 40px;
        font-weight: bold;
      }

      p {
        max-width: 400px;
        width: 75%;
        font-size: 18px;

        a {
          svg {
            color: var(--gray4);
          }
        }
      }
    }

    #devSvgDiv {
      width: 50%;
      display: flex;
      justify-content: center;
      animation: right_to_left 1s 1 ease 0.6s both;

      img {
        min-width: 350px;
        width: 65%;
      }
    }
  }

  #projectsDiv {
    margin-top: 24px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 56px;
    animation: go_up 1s 1 ease 0.9s both;

    .projectBox {
      max-width: 350px;
      min-width: 250px;
      width: 100%;
      padding: 12px;
      background-color: var(--white);
      color: var(--gray4);
      box-shadow: 0px 5px 8px var(--gray4);
      border-radius: 8px;
      :hover {
        cursor: pointer;
        background-color: var(--green);
        color: var(--white);
      }

      img {
        width: 100%;
      }

      h2 {
        font-size: 20px;
        font-weight: bold;
      }

      p {
        font-size: 16px;
      }
    }
  }

  @media screen and (max-width: 750px) {
    #upperDiv {
      margin-top: 16px;
      flex-direction: column;
      align-items: center;
      gap: 24px;

      #introDiv {
        width: unset;
        gap: 16px;

        h1 {
          width: unset;
        }

        p {
          width: unset;
        }
      }

      #devSvgDiv {
        min-width: 300px;
        width: 50%;

        img {
          min-width: unset;
          width: 100%;
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

  @keyframes go_up {
    from {
      opacity: 0;
      transform: translateY(100px);
    }
  }
`;

export default PortfolioContainer;
