import Header from "../../components/Header";
import ContactContainer from "./styles";
import { RiWhatsappFill } from "react-icons/ri";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { RiChatSmile2Fill } from "react-icons/ri";

const Contact = () => {
  return (
    <>
      <Header />
      <ContactContainer>
        <div id="introContact">
          <h1>Obrigado pelo interesse em entrar em contato!</h1>
          <h1>Abaixo estão minhas redes.</h1>
          <h1>
            O meio mais rápido de contato comigo é pelo Whatsapp{" "}
            <RiChatSmile2Fill />
          </h1>
        </div>
        <div id="whatsappDiv">
          <div className="svgDiv">
            <RiWhatsappFill />
          </div>
          <div className="infoDiv">
            <p>+55 61 983353420</p>
          </div>
        </div>
        <div
          id="linkedinDiv"
          onClick={() =>
            window.open("https://www.linkedin.com/in/igormgg/", "_blank")
          }
        >
          <div className="svgDiv">
            <BsLinkedin />
          </div>
          <div className="infoDiv">
            <p>linkedin.com/in/igormgg/</p>
          </div>
        </div>
        <div id="emailDiv">
          <div className="svgDiv">
            <MdEmail />
          </div>
          <div className="infoDiv">
            <p>igormgg@hotmail.com</p>
          </div>
        </div>
        <div
          id="githubDiv"
          onClick={() => window.open("https://github.com/igormgg", "_blank")}
        >
          <div className="svgDiv">
            <BsGithub />
          </div>
          <div className="infoDiv">
            <p>github.com/igormgg</p>
          </div>
        </div>
      </ContactContainer>
    </>
  );
};

export default Contact;
