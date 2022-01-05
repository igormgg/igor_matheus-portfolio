import styled from "styled-components";

const CurriculumContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 12px;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 28px;
    font-weight: bold;
    color: var(--darkgreen);
  }

  h2 {
    font-size: 20px;
  }

  h3 {
    font-size: 24px;
    font-weight: bold;
    text-decoration: underline;
    margin-bottom: 8px;
    color: var(--darkgreen);
  }

  h4 {
    font-size: 20px;
    font-weight: bold;
  }

  h5 {
    font-size: 16px;
  }

  #header {
    display: flex;
    text-align: center;
    padding: 12px;
    margin-top: 24px;
    margin-bottom: 24px;
    border-radius: 12px;
    background: var(--greenGradient);
    animation: show_up 1s 1 ease 0.5s both;

    #profile {
      width: 50%;
    }

    #socialContact {
      width: 50%;
    }
  }

  .textBox {
    width: 45%;
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
  }

  #curriculumBody {
    animation: left_to_right 1s 1 ease 0.8s both;
    #graduation {
      div {
        margin-bottom: 8px;
      }
    }

    #jobs {
      div {
        margin-bottom: 8px;

        ul {
          li {
            list-style: disc inside;
            font-size: 16px;
          }
        }
      }
    }

    #languages {
      float: right;
      transform: translateY(-110px);
      animation: right_to_left 1s 1 ease 1.1s both;

      div {
        margin-bottom: 8px;
      }
    }

    #courses {
      float: right;
      animation: right_to_left 1s 1 ease 1.1s both;

      div {
        margin-bottom: 8px;
      }
    }
  }

  @media screen and (max-width: 750px) {
    h1 {
      font-size: 24px;
    }

    h2 {
      font-size: 16px;
    }

    h3 {
      font-size: 20px;
    }

    h4 {
      font-size: 16px;
    }

    h5 {
      font-size: 12px;
    }

    #header {
      flex-direction: column;

      #profile {
        width: unset;
        margin-bottom: 4px;
      }

      #socialContact {
        width: unset;
      }
    }

    .textBox {
      width: 48%;
    }

    #curriculumBody {
      #jobs {
        div {
          ul {
            li {
              font-size: 12px;
            }
          }
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

  @keyframes show_up {
    from {
      opacity: 0;
    }
  }
`;

export default CurriculumContainer;
