import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Card from "../components/Cards";
import { Link } from "react-router-dom";

export default function Home() {
  // Define state to store data received from the server
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from server when the component mounts
    fetch("/housing.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      {/* Render a banner */}
      <Banner />
      <div className="cards-container">
        {/* Map over the data and render cards for each */}
        {data.map((appart, id) => (
          <div className="card_logement" key={id}>
            {/* Add a link to each card to navigate to the housing detail page */}
            <Link className="link_card_logement" to={`/housing/${appart.id}`}>
              <Card cover={appart.cover} title={appart.title} />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
