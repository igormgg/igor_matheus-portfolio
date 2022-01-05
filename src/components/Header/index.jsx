import Sidebar from "../Sidebar";

import { GiHamburgerMenu } from "react-icons/gi";
import { HeaderContainer } from "./styles";
import { useHistory } from "react-router-dom";
import { useSidebar } from "../../providers/sidebar";
import { FaHome } from "react-icons/fa";
import { RiFilePaper2Fill, RiMessage2Fill } from "react-icons/ri";
import { FaLaptopCode } from "react-icons/fa";

const Header = () => {
  const history = useHistory();

  const { isOpen, openSidebar, closeSidebar } = useSidebar();

  const menuHandler = () => {
    if (isOpen) {
      closeSidebar();
    } else {
      openSidebar();
    }
  };

  return (
    <>
      {isOpen && <Sidebar />}
      <HeaderContainer>
        <div id="homeBox">
          <div id="nameBox">
            <h1>Igor Matheus</h1>
            <h2>Front-End Developer</h2>
          </div>
          <div id="buttonsBox">
            <button onClick={() => history.push("/")}>
              <FaHome /> Página Inicial
            </button>
            <button onClick={() => history.push("/curriculum")}>
              <RiFilePaper2Fill /> Currículo
            </button>
            <button onClick={() => history.push("/portfolio")}>
              <FaLaptopCode /> Portfólio
            </button>
            <button onClick={() => history.push("/contact")}>
              <RiMessage2Fill /> Contato
            </button>
          </div>
          <div id="menuBox" onClick={menuHandler}>
            <GiHamburgerMenu />
          </div>
        </div>
      </HeaderContainer>
    </>
  );
};

export default Header;
