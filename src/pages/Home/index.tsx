import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import AboutContent from "../../content/AboutContent.json";
import ContactContent from "../../content/ContactContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
// const MiddleBlock = lazy(() => import("../../components/MiddleBlock")); // Mantido comentado para uso futuro
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="cat-code.svg"
        id="intro"
      />
      <ContentBlock
        direction="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="cat-graph.svg"
        id="about"
      />
      {/* Blocos adicionais (Mission, Product, MiddleBlock) mantidos comentados; reative quando necessário */}
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
        icon="cat-talk.svg"
      />
    </Container>
  );
};

export default Home;
