import { useHistory } from "react-router-dom";
import { HeaderContainer } from "./styles";

const Header = () => {
  const history = useHistory();

  return (
    <HeaderContainer>
      <div id="homeBox">
        <div id="nameBox">
          <h1>Igor Matheus</h1>
          <h2>Front-End Developer</h2>
        </div>
        <div id="buttonsBox">
          <button onClick={() => history.push("/")}>Página Inicial</button>
          <button onClick={() => history.push("/curriculum")}>Currículo</button>
          <button onClick={() => history.push("/portfolio")}>Portfólio</button>
          <button onClick={() => history.push("/contact")}>Contato</button>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
