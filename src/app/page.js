import Image from "next/image";
import styles from "./page.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Banner from "@/components/molecules/BannerSection";

export default function Home() {
  return (
    <main>
      <Container>
        <Row>
          <Col md={12}>
            <Banner />
          </Col>
        </Row>
      </Container>
    </main>
  );
}
