import Header from "../../components/Header";
import HomeContainer from "./styles";
import profilePic from "../../img/profilePicTransparent.png";

import {
  SiCss3,
  SiDjango,
  SiFlask,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiPython,
  SiReact,
  SiTypescript,
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
              Desde criança eu me interessava pela área da tecnologia. Acabei
              optando por Direito na faculdade, mas vi que esse não era um curso
              que me despertava estusiasmo. Durante a pandemia de 2020, percebi
              o quanto o campo da tecnologia cresceu, e então vislumbrei a
              oportunidade de mudar de área e fazer o que eu sempre gostei.
            </p>
            <p>
              Atualmente sou formado como desenvolvedor front-end nas linguagens
              JavaScript, HTML e CSS pela Kenzie Academy Brasil, e estou
              iniciando meus estudos em back-end na linguagem Python também pela
              Kenzie Academy Brasil.
            </p>
            <p>
              Tenho diploma de conclusão nos cursos de inglês, espanhol, e
              francês.
            </p>
          </div>
          <div>
            <p>Competências:</p>
            <div id="skillsDiv">
              <div>
                <SiJavascript /> JAVASCRIPT
              </div>
              <div>
                <SiTypescript /> TYPESCRIPT
              </div>
              <div>
                <SiReact /> REACT.JS
              </div>
              <div>
                <SiHtml5 /> HTML5
              </div>
              <div>
                <SiCss3 /> CSS3
              </div>
              <div>
                <SiPython /> PYTHON
              </div>
              <div>
                <SiFlask /> FLASK
              </div>
              <div>
                <SiGit /> GIT
              </div>
            </div>
            <p>Aprendendo:</p>
            <div id="learningDiv">
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
