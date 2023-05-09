import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Carrousel from "../components/Carrousel";
import Collapse from "../components/Collapse";
import Host from "../components/Host";
import Rate from "../components/Rate";
import Tag from "../components/Tag";

export default function FicheLogement() {
  // Get the URL parameter 'id' using useParams() hook
  const params = useParams();
  // Get the navigate() function to change the URL later on
  const navigate = useNavigate();
  // Set the picked apartment data as state
  const [pickedAppart, setPickedAppart] = useState();

  // Fetch data from the server using the 'id' URL parameter
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/housing.json");
        const data = await res.json();
        // Find the apartment with the same 'id' URL parameter
        const picked = data.find(({ id }) => id === params.id);
        // If no apartment is found, go to the 404 page
        if (picked === undefined) {
          navigate("/404", { state: { message: "Can't get data" } });
        } else {
          // Set the picked apartment data as state
          setPickedAppart(picked);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [params.id, navigate]);

  // Render the picked apartment data if it exists
  return (
    pickedAppart && (
      <div key={params.id} className="fiche-container">
        <Carrousel slides={pickedAppart.pictures} />
        <section className="hostInfo-container">
          <div className="title-tags-container">
            <div className="title-container redFont">
              <h1>{pickedAppart.title}</h1>
              <h3>{pickedAppart.location}</h3>
            </div>
            <div className="tags-container">
              {pickedAppart.tags.map((tag) => (
                <Tag key={tag} tag={tag} />
              ))}
            </div>
          </div>
          <div className="rate-host-container">
            <div className="host-container redFont">
              <Host
                hostName={pickedAppart.host.name}
                hostPic={pickedAppart.host.picture}
              />
            </div>
            <div className="rate-container">
              <Rate score={pickedAppart.rating} />
            </div>
          </div>
        </section>
        <div className="collapse-fiche-container">
          <Collapse
            aboutTitle="Description"
            aboutText={pickedAppart.description}
          />
          <Collapse aboutTitle="Équipements" aboutText={pickedAppart.equipments.map((item, index) => (
            <li key={index} className="equipList">
              {item}
            </li>
          ))} />
        </div>
      </div>
    )
  );
}
