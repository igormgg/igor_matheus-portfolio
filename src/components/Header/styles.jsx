import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  position: sticky;
  top: 0px;
  height: 100px;
  z-index: 2;
  background-color: var(--gray4);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 8px 10px var(--gray4);
  animation: up_to_bottom 1s 1 ease;

  #homeBox {
    max-width: 1200px;
    width: 100%;
    height: 100%;
    padding: 4px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    #nameBox {
      h1 {
        color: var(--gray1);
        font-size: 24px;
        font-weight: bold;
      }

      h2 {
        color: var(--gray2);
        font-size: 16px;
        font-weight: normal;
      }
    }

    #buttonsBox {
      width: 50%;
      display: flex;
      justify-content: space-between;

      button {
        color: var(--gray1);
        background-color: unset;
        border: none;
        font-size: 16px;
        font-weight: bold;
        :hover {
          color: var(--green);
        }
      }
    }

    #menuBox {
      display: none;
    }
  }

  @media screen and (max-width: 750px) {
    #homeBox {
      padding: 4px 36px;

      #buttonsBox {
        display: none;
        color: red;
      }

      #menuBox {
        color: var(--white);
        display: block;
        font-size: 36px;
      }
    }
  }

  @keyframes up_to_bottom {
    from {
      opacity: 0;
      transform: translateY(-100px);
    }
  }
`;
