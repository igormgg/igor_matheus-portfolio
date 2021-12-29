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

  #homeBox {
    max-width: 1500px;
    width: 100%;
    height: 100%;
    padding: 5px 0 5px 0;
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
  }
`;
