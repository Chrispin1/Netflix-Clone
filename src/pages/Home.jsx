import Hero from "../components/Hero";
import Movierow from "../components/Movierow";
import endpoints from "../services/movieServices";

export const Home = () => {
  return (
    <>
      <Hero />
      <Movierow title="upcoming" url={endpoints.upcoming} />
      <Movierow title="trending" url={endpoints.trending} />
      <Movierow title="top rated" url={endpoints.topRated} />
      <Movierow title="comedy" url={endpoints.comedy} />
      <Movierow title="popular" url={endpoints.popular} />
    </>
  );
};
