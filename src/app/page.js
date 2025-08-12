import Image from "next/image";
import classes from "./page.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Banner from "@/components/molecules/BannerSection";

export default function Home() {
  return (
    <main>
      <div className={classes.heroSection}>
        <Container fluid>
          <Row>
            <Col md={7}>
              <Banner />
            </Col>
            <Col md={5} className="p-0">
              <div className={classes.imageBox}>
                <Image
                  src="/app-images/users.svg"
                  alt="cartoon"
                  className={classes.cartoonImage}
                  width={500}
                  height={500}
                />

                {/* Orbit container */}
                <div className={classes.orbit}>
                  <img
                    src="/app-images/figma.png"
                    alt="HTML5"
                    className={classes.logo}
                  />
                  <img
                    src="/app-images/css.svg"
                    alt="CSS3"
                    className={classes.logo}
                  />
                  <img src="/logos/js.svg" alt="JS" className={classes.logo} />
                  <img
                    src="/logos/nodejs.svg"
                    alt="Node.js"
                    className={classes.logo}
                  />
                  <img
                    src="/logos/figma.svg"
                    alt="Figma"
                    className={classes.logo}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
}
