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
                fill
                alt="icons"
                className={classes.userImage}
              />
            </div>
          </Col>
        </Row>
      </Container>
      </div>
    </main>
  );
}
