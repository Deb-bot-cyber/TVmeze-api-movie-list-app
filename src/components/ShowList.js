import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card} from "react-bootstrap";
const ShowList= () => {
  // Declare and initialize a state variable called "shows" with an empty array
  const [shows, setShows] = useState([]);

  // Use the useEffect hook to make an HTTP GET request to the TVMaze API when the component mounts
  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => setShows(response.data))
      .catch((error) => console.error(error));
  }, []);

  // Return JSX to render a list of TV shows
  return (
    <div className="container">
      <h1 className="text-center mb-4 fs-4 mt-2">TV Shows</h1>
      <div className="row">
        {/* Use the map method to iterate over the "shows" array and render a Bootstrap Card for each TV show */}
        {shows.map((show) => (
          <div className="col-md-4 mb-4" key={show.show.id}>
            {/* Render a Bootstrap Card for the TV show */}
            <Link to={`/show/${show.show.id}`}>
            <Card className="text-decoration-none">
              <Card.Img variant="top" src={show.show.image?.medium} />
              <Card.Body>
                {/* Render the name of the TV show */}
                <Card.Title className="text-decoration-none">{show.show.name}</Card.Title>
                {/* Render the genre of the TV show */}
                <Card.Text className="text-decoration-none">{show.show.genres.join(", ")}</Card.Text>
                <Card.Text className="text-decoration-none">{show.show.rating.average}</Card.Text>
                {/* Render a link to view details about the TV show */}
              </Card.Body>
            </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowList;
