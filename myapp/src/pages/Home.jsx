import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Card from "../components/Cards";
import { Link } from "react-router-dom";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/housing.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Banner />
      <div className="cards-container">
        {data.map((appart, id) => (
          <div className="card_logement" key={id}>
            <Link className="link_card_logement" to={`/housing/${appart.id}`}>
              <Card cover={appart.cover} title={appart.title} />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
