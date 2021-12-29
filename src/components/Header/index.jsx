import { useHistory } from "react-router-dom";
import { HeaderContainer } from "./styles";

const Header = () => {
  const history = useHistory();

  return (
    <HeaderContainer>
      <div id="homeBox">
        <div id="nameBox">
          <h1>Igor Matheus</h1>
          <h2>Desenvolvedor Front-End</h2>
        </div>
        <div>
          <button onClick={() => history.push("/")}>Homepage</button>
          <button onClick={() => history.push("/contact")}>Contact</button>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
