import Header from "../../components/Header";
import HomeContainer from "./styles";
import profilePic from "../../img/profilePicTransparent.png";

import {
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiReact,
  SiGit,
  SiHeroku,
  SiPython,
  SiFlask,
  SiDjango,
} from "react-icons/si";

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
          <div>
            <p>Competências:</p>
            <div id="skillsDiv">
              <div>
                <SiJavascript /> JAVASCRIPT
              </div>
              <div>
                <SiCss3 /> CSS3
              </div>
              <div>
                <SiHtml5 /> HTML5
              </div>
              <div>
                <SiReact /> REACT
              </div>
              <div>
                <SiGit /> GIT
              </div>
              <div>
                <SiHeroku /> HEROKU
              </div>
            </div>
            <p>Aprendendo:</p>
            <div id="learningDiv">
              <div>
                <SiPython /> PYTHON
              </div>
              <div>
                <SiFlask /> FLASK
              </div>
              <div>
                <SiDjango /> DJANGO
              </div>
            </div>
          </div>
        </div>
      </HomeContainer>
    </>
  );
};

export default Homepage;
