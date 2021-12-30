import Header from "../../components/Header";
import HomeContainer from "./styles";
import profilePic from "../../img/profilePicTransparent.png";

const Homepage = () => {
  return (
    <>
      <Header />
      <HomeContainer>
        <div id="photoDiv">
          <img src={profilePic} alt="Igor"></img>
        </div>
        <div id="aboutDiv">
          <h1>Olá mundo!</h1>
          <h2>Eu sou Igor Matheus Gomes Gonçalves</h2>
          <h3>Front-End Developer</h3>
          <div>
            <p>Moro em Brasília - DF.</p>
            <p>
              Sou formado em Direito pelo UniCEUB. Tenho diploma de conclusão
              nos cursos de inglês, espanhol, e francês.
            </p>
            <p>
              Atualmente sou formado como desenvolvedor front-end nas linguagens
              JavaScript, HTML e CSS pela Kenzie Academy Brasil, e estou
              iniciando meus estudos em back-end na linguagem Python também pela
              Kenzie Academy Brasil.
            </p>
          </div>
        </div>
      </HomeContainer>
    </>
  );
};

export default Homepage;
