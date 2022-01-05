import Header from "../../components/Header";
import PortfolioContainer from "./styles";
import devSvg from "../../img/devSvg.svg";
import pcBuilder from "../../img/pcBuilder.png";
import hamburgueriaKenzie from "../../img/hamburgueriaKenzie.png";
import devHabits from "../../img/devHabits.png";
import kenzieHub from "../../img/kenzieHub.png";
import ligBallZ from "../../img/ligBallZ.png";
import pokemonJackpot from "../../img/pokemonJackpot.png";
import torreDeHanoi from "../../img/torreDeHanoi.png";

import { BsGithub } from "react-icons/bs";

const Portfolio = () => {
  return (
    <>
      <Header />
      <PortfolioContainer>
        <div id="upperDiv">
          <div id="introDiv">
            <h1>Veja alguns dos meus últimos projetos!</h1>
            <p>
              O código de todos os projetos se encontram no meu repositório do
              github. Sinta-se livre para visitar todos eles: {""}
              <a
                href="https://github.com/igormgg?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub />
              </a>
            </p>
          </div>
          <div id="devSvgDiv">
            <img src={devSvg} alt="Dev" />
          </div>
        </div>
        <div id="projectsDiv">
          <div className="projectBox">
            <img
              src={pcBuilder}
              alt="Pc Builder"
              onClick={() =>
                window.open(
                  "https://pc-builder-capstone-q2.vercel.app/",
                  "_blank"
                )
              }
            />
            <h2>PC Builder</h2>
            <p>Plataforma de venda de hardware</p>
          </div>
          <div className="projectBox">
            <img
              src={hamburgueriaKenzie}
              alt="Hamburgueria Kenzie"
              onClick={() =>
                window.open(
                  "https://react-entrega-s5-hamburgueria-2-0-com-typescript-json-s-igormgg.vercel.app/",
                  "_blank"
                )
              }
            />
            <h2>Hamburgueria Kenzie</h2>
            <p>Plataforma de venda de hambúrguer</p>
          </div>
          <div className="projectBox">
            <img
              src={devHabits}
              alt="Dev Habits"
              onClick={() =>
                window.open("https://habits-project-g2.vercel.app/", "_blank")
              }
            />
            <h2>Dev Habits</h2>
            <p>Gerenciamento de hábitos</p>
          </div>
          <div className="projectBox">
            <img
              src={kenzieHub}
              alt="Kenzie Hub"
              onClick={() =>
                window.open(
                  "https://react-entrega-s2-kenzie-hub-igormgg.vercel.app/",
                  "_blank"
                )
              }
            />
            <h2>Kenzie Hub</h2>
            <p>Cadastro de tecnologias</p>
          </div>
          <div className="projectBox">
            <img
              src={ligBallZ}
              alt="Lig Ball Z"
              onClick={() =>
                window.open(
                  "https://kenzie-academy-brasil-developers.github.io/entrega-lig-4-sprint-5-igormgg/",
                  "_blank"
                )
              }
            />
            <h2>Lig Ball Z</h2>
            <p>Jogo temático Lig-4</p>
          </div>
          <div className="projectBox">
            <img
              src={torreDeHanoi}
              alt="Torre de Hanói"
              onClick={() =>
                window.open(
                  "https://kenzie-academy-brasil-developers.github.io/entrega-torre-de-hanoi-sprint-5-GuilherminoL/",
                  "_blank"
                )
              }
            />
            <h2>Torre de Hanói</h2>
            <p>Jogo temático Torre de Hanói</p>
          </div>
          <div className="projectBox">
            <img
              src={pokemonJackpot}
              alt="Pokémon Jackpot"
              onClick={() =>
                window.open(
                  "https://kenzie-academy-brasil-developers.github.io/entrega-construa-um-jogo-de-azar-sprint-3-igormgg/",
                  "_blank"
                )
              }
            />
            <h2>Pokémon Jackpot</h2>
            <p>Jogo temático Jackpot</p>
          </div>
        </div>
      </PortfolioContainer>
    </>
  );
};

export default Portfolio;
