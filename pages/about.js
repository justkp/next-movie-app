import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>About Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Welcome to the About Page!</h1>
        <Link href="/">
          <a>Link to Home</a>
        </Link>
      </main>
    </div>
  );
}
