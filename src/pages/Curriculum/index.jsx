import Header from "../../components/Header";
import CurriculumContainer from "./styles";

import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";

const Curriculum = () => {
  return (
    <>
      <Header />
      <CurriculumContainer>
        <div id="header">
          <div id="profile">
            <h1>Igor Matheus Gomes Gonçalves</h1>
            <h2>15 de Maio de 1996</h2>
            <h2>Águas Claras, Brasília - DF</h2>
          </div>
          <div id="socialContact">
            <h2>
              <RiWhatsappFill /> +55 61 983353420
            </h2>
            <h2>
              <MdEmail /> igormgg@hotmail.com
            </h2>
            <h2>
              <BsLinkedin /> linkedin.com/in/igormgg/
            </h2>
          </div>
        </div>
        <div id="curriculumBody">
          <div id="courses" className="textBox">
            <h3>Cursos</h3>
            <div>
              <h4>Desenvolvedor Front-End</h4>
              <h5>Kenzie Academy, 1.000 horas, conclusão em 2021</h5>
            </div>
            <div>
              <h4>Empreendedorismo</h4>
              <h5>SENAI, 14 horas, conclusão em 2021</h5>
            </div>
            <div>
              <h4>Lógica de Programação</h4>
              <h5>SENAI, 14 horas, conclusão em 2021</h5>
            </div>
            <div>
              <h4>Introdução à programação com Python</h4>
              <h5>Kenzie Academy, 10 horas, conclusão em 2021</h5>
            </div>
            <div>
              <h4>Privacidade e Proteção de Dados (LGPD)</h4>
              <h5>SENAI, 4 horas, conclusão em 2021</h5>
            </div>
            <div>
              <h4>Tecnologia da Informação e Comunicação</h4>
              <h5>SENAI, 14 horas, conclusão em 2021</h5>
            </div>
            <div>
              <h4>Desvendando a Indústria 4.0</h4>
              <h5>SENAI, 20 horas, conclusão em 2021</h5>
            </div>
            <div>
              <h4>Get Connected</h4>
              <h5>SENAI, 30 horas, conclusão em 2021</h5>
            </div>
            <div>
              <h4>Introduction to Cybersecurity</h4>
              <h5>SENAI, conclusão em 2021</h5>
            </div>
            <div>
              <h4>Cybersecurity Essencials</h4>
              <h5>SENAI, 30 horas, conclusão em 2021</h5>
            </div>
            <div>
              <h4>NDG Linux Unhatched</h4>
              <h5>CISCO, 8 horas, conclusão em 2021</h5>
            </div>
          </div>
          <div id="objective" className="textBox">
            <h3>Objetivo</h3>
            <h4>Desenvolvedor Front-End.</h4>
            <h5>
              Profissional responsável, com excelente comunicação verbal e
              escrita. Objetivo, organizado, com facilidade de aprendizagem e
              bom relacionamento interpessoal.
            </h5>
          </div>
          <div id="graduation" className="textBox">
            <h3>Formação acadêmica</h3>
            <div>
              <div>
                <h4>Kenzie Academy, 2021 - 2022</h4>
                <h5>Desenvolvimento Web Fullstack</h5>
                <h5>Previsão de conclusão em Junho de 2022</h5>
              </div>
              <div>
                <h4>UniCEUB - Centro Universitário de Brasília, 2014 - 2018</h4>
                <h5>Ensino superior em Direito</h5>
              </div>
            </div>
          </div>
          <div id="skills" className="textBox">
            <h3>Competências</h3>
            <h4>
              Javascript | Typescript | React | HTML | CSS | Python | Flask |
              GIT | Scrum
            </h4>
          </div>
          <div id="jobs" className="textBox">
            <h3>Experiência</h3>
            <div>
              <h4>
                TJDFT - Tribunal de Justiça do Distrito Federal e Territórios,
                2017 - 2018
              </h4>
              <h5>Estagiário</h5>
              <ul>
                <li>Atendimento em Balcão</li>
                <li>Análise de processos judiciais</li>
                <li>
                  Gerenciamento de informações em sistema judicial informatizado
                </li>
              </ul>
            </div>
            <div>
              <h4>Kenzie Academy Brasil, 2021 - Atualmente</h4>
              <h5>Peer Coach</h5>
              <ul>
                <li>Monitoria em Javascript, HTML, CSS e React.JS</li>
                <li>Coreção de atividades</li>
                <li>Assistência na elaboração de códigos</li>
              </ul>
            </div>
          </div>
          <div id="languages" className="textBox">
            <h3>Idiomas</h3>
            <div>
              <h4>Inglês Avançado</h4>
              <h5>Eagle, conclusão em 2011</h5>
            </div>
            <div>
              <h4>Espanhol Avançado</h4>
              <h5>CNA, conclusão em 2010</h5>
            </div>
            <div>
              <h4>Francês Intermediário</h4>
              <h5>Wizard, conclusão em 2013</h5>
            </div>
          </div>
          <div id="aditionalInfo" className="textBox">
            <h3>Informações adicionais</h3>
            <div>
              <h4>Disponibilidade de mudança de endereço</h4>
              <h4>CNH categoria AB</h4>
              <h4>Carteira da OAB</h4>
            </div>
          </div>
        </div>
      </CurriculumContainer>
    </>
  );
};

export default Curriculum;
