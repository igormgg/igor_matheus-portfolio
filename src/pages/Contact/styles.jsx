import styled from "styled-components";

const ContactContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  height: calc(100vh - 100px);
  padding: 12px;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

  #introContact {
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    animation: show_up 1s 1 ease 0.3s both;

    h1 {
      font-size: 24px;
      font-weight: bold;

      svg {
        color: #009688;
      }
    }
  }

  #whatsappDiv {
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    gap: 50px;
    animation: right_to_left 1s 1 ease 0.5s both;
    :hover {
      cursor: pointer;
      background: rgba(0, 0, 0, 0.15);
      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
      backdrop-filter: blur(4px);
      border-radius: 10px;
      border: 1px solid rgba(255, 255, 255, 0.18);
    }

    .svgDiv {
      width: 45%;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      svg {
        font-size: 88px;
        color: #009688;
      }
    }

    .infoDiv {
      width: 45%;
      font-size: 28px;
      display: flex;
      align-items: center;
    }
  }

  #linkedinDiv {
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    gap: 50px;
    animation: left_to_right 1s 1 ease 0.7s both;
    :hover {
      cursor: pointer;
      background: rgba(0, 0, 0, 0.15);
      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
      backdrop-filter: blur(4px);
      border-radius: 10px;
      border: 1px solid rgba(255, 255, 255, 0.18);
    }

    .svgDiv {
      width: 45%;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      svg {
        font-size: 88px;
        color: #0a66c2;
      }
    }

    .infoDiv {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 45%;
      font-size: 28px;
    }
  }

  #emailDiv {
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    gap: 50px;
    animation: right_to_left 1s 1 ease 0.5s both;
    :hover {
      cursor: pointer;
      background: rgba(0, 0, 0, 0.15);
      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
      backdrop-filter: blur(4px);
      border-radius: 10px;
      border: 1px solid rgba(255, 255, 255, 0.18);
    }

    .svgDiv {
      width: 45%;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      svg {
        font-size: 88px;
        color: #b2a840;
      }
    }

    .infoDiv {
      width: 45%;
      font-size: 28px;
      display: flex;
      align-items: center;
    }
  }

  #githubDiv {
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    gap: 50px;
    animation: left_to_right 1s 1 ease 0.7s both;
    :hover {
      cursor: pointer;
      background: rgba(0, 0, 0, 0.15);
      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
      backdrop-filter: blur(4px);
      border-radius: 10px;
      border: 1px solid rgba(255, 255, 255, 0.18);
    }

    .svgDiv {
      width: 45%;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      svg {
        font-size: 88px;
        color: var(--gray4);
      }
    }

    .infoDiv {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 45%;
      font-size: 28px;
    }
  }

  @media screen and (max-width: 750px) {
    height: unset;
    gap: 20px;

    #introContact {
      gap: 10px;

      h1 {
        font-size: 20px;
      }
    }

    #whatsappDiv {
      flex-direction: column;
      align-items: center;
      gap: 10px;

      .svgDiv {
        justify-content: center;
      }

      .infoDiv {
        width: unset;
        font-size: 24px;
        justify-content: center;
      }
    }

    #linkedinDiv {
      flex-direction: column;
      align-items: center;
      gap: 10px;

      .svgDiv {
        justify-content: center;
      }

      .infoDiv {
        width: unset;
        font-size: 24px;
        justify-content: center;
      }
    }

    #emailDiv {
      flex-direction: column;
      align-items: center;
      gap: 10px;

      .svgDiv {
        justify-content: center;
      }

      .infoDiv {
        width: unset;
        font-size: 24px;
        justify-content: center;
      }
    }

    #githubDiv {
      flex-direction: column;
      align-items: center;
      gap: 10px;

      .svgDiv {
        justify-content: center;
      }

      .infoDiv {
        width: unset;
        font-size: 24px;
        justify-content: center;
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

export default ContactContainer;
