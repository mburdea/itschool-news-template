import React from "react";
import styles from "./Page404.module.css";
import Container from "react-bootstrap/Container";

import Layout from '../components/Layout';

function Page404() {
  return (
    <Layout
      className={`${styles.page404} bg-primary text-white d-flex flex-column justify-content-center align-items-center`}
    >
      <Container className="d-flex flex-column justify-content-center align-items-center">
        <p className="h4 text-center">
          Avem o știre nu tocmai grozavă... pagina pe care ai încercat să o
          accesezi nu (mai) există.
        </p>
        <strong className={`${styles.error404}`}>404 :(</strong>
        <p className="h4 text-center">
          Hai înapoi pe site să vezi o nouă știre!
        </p>
      </Container>
    </Layout>
  );
}

export default Page404;
