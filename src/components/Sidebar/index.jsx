import { FaHome } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { RiFilePaper2Fill, RiMessage2Fill } from "react-icons/ri";
import { SidebarContainer } from "./styles";
import { useHistory } from "react-router-dom";
import { useSidebar } from "../../providers/sidebar";

const Sidebar = () => {
  const { closeSidebar } = useSidebar();

  const history = useHistory();

  return (
    <SidebarContainer onClick={closeSidebar}>
      <div id="sidebarBox">
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
    </SidebarContainer>
  );
};

export default Sidebar;
