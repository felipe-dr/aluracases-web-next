import Link from "../src/components/link";
import PageTitle from "../src/components/page-title";

// SSG - Static Site Generation
// SSR - Server Side Rendering
// ISG - Incremental Static Generation

// export async function getServerSideProps() {
//   console.log("Executa a cada acesso recebido");
//   console.log("Em ambiente de desenvolvimento, sempre irá executar a cada acesso");
// }

export async function getStaticProps() {
  console.log("Executa somente em build time");
  console.log(
    "Em ambiente de desenvolvimento, sempre irá executar a cada acesso"
  );

  const FAQ_API_URL =
    "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";

  const faq = await fetch(FAQ_API_URL)
    .then((serverResponse) => {
      return serverResponse.json();
    })
    .then((response) => {
      return response;
    });

  return {
    props: {
      faq,
    },
  };
}

export default function FAQPage({ faq }) {
  return (
    <div>
      <PageTitle>FAQ - Alura Cases Campanha</PageTitle>
      <h1>Alura Cases - Página de Perguntas FAQ</h1>
      <Link href="/">Ir para a página home</Link>
      <ul>
        {faq.map(({ answer, question }) => (
          <li key={question}>
            <article>
              <h2>{question}</h2>
              <p>{answer}</p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
