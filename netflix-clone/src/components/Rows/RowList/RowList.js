import Row from "../Row/Row"; // Import the Row component
import requests from "../../../utils/requests"; // Import the requests object

const RowList = () => {
  return (
    <>
      {/* Rendering a Row with specific fetch URL */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true} // Passing isLargeRow prop as true
      />
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        isLargeRow={true} // Passing isLargeRow prop as true
      />
      <Row
        title="TOP RATED MOVIES"
        fetchUrl={requests.fetchTopRatedMovies}
        isLargeRow={true} // Passing isLargeRow prop as true
      />
      <Row
        title="ACTION MOVIES"
        fetchUrl={requests.fetchActionMovies}
        isLargeRow={true} // Passing isLargeRow prop as true
      />
      <Row
        title="COMEDY MOVIES"
        fetchUrl={requests.fetchComedyMovies}
        isLargeRow={true} // Passing isLargeRow prop as true
      />
      <Row
        title="HORROR MOVIES"
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow={true} // Passing isLargeRow prop as true
      />
      <Row
        title="ROMANCE MOVIES"
        fetchUrl={requests.fetchRomanceMovies}
        isLargeRow={true} // Passing isLargeRow prop as true
      />
      <Row
        title="DOCUMENTARIES"
        fetchUrl={requests.fetchDocumentaries}
        isLargeRow={true} // Passing isLargeRow prop as true
      />
      <Row
        title="TV SHOW"
        fetchUrl={requests.fetchTvShow}
        isLargeRow={true} // Passing isLargeRow prop as true
      />
      {/* Additional Rows can be added similarly */}
    </>
  );
};

export default RowList;
