import Link from "next/link";

function Show({ props_show }) {
  return (
    <>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>

      <h1>{props_show.name}</h1>
      <p>Language: {props_show.language}</p>
      <p>
        <a href={props_show.officialSite}>{props_show.officialSite}</a>
      </p>
      <p>Genres: {props_show.genres.join(", ")}</p>
      <p>{props_show.summary}</p>

      {props_show.image ? <img src={props_show.image.medium} /> : null}
    </>
  );
}

Show.getInitialProps = async function (context) {
  const { id } = context.query;

  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const props_show = await res.json();
  console.log("/show: data... ", props_show);

  return { props_show };
};

export default Show;
