import Head from "next/head";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

export default function Home({ props_shows }) {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Welcome to the Homepage</h1>
        <Link href="/about">
          <a>Link to About</a>
        </Link>

        <ul>
          {props_shows.map((ssss) => (
            <li key={ssss.id}>
              <Link href="/show/[id]" as={`/show/${ssss.id}`}>
                <a>{ssss.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

Home.getInitialProps = async function () {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=sherlock");
  const data = await res.json();
  console.log("/home: data... ", data);
  const showsFetched = { props_shows: data.map((entry) => entry.show) };
  console.log("/home: rendering... ", showsFetched);

  return showsFetched;
};
