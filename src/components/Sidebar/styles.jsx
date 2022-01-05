import styled from "styled-components";

export const SidebarContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  #sidebarBox {
    width: 200px;
    background-color: var(--gray4);
    padding: 12px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    position: fixed;
    right: 0px;
    top: 100px;
    display: flex;
    flex-direction: column;
    animation: up_to_bottom 1s 1 ease;

    button {
      color: var(--gray1);
      background-color: unset;
      border: none;
      font-size: 20px;
      font-weight: bold;
      padding: 12px;

      svg {
        transform: translateY(2px);
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
