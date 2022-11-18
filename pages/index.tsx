/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Container from "../components/Container";
import Footer from "../components/Footer";
import LinksList from "../components/LinksList";
import Paper from "../components/Paper";
import PaperBody from "../components/PaperBody";
import Title from "../components/Title";

export default function Home() {
  return (
    <div>
      <Head>
        <title>La Crypta Links</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Container>
        <Paper>
          <Title>LA CRYPTA | LINKS</Title>
          <div className='divide-y divide-gray-300/50'>
            <PaperBody>
              <LinksList />
            </PaperBody>
            <Footer>
              <p className='text-gray-900'>Libre y gratuito para Copiar.</p>
            </Footer>
          </div>
        </Paper>
      </Container>
    </div>
  );
}
