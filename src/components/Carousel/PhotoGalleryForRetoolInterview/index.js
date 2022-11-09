import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [images, setImages] = useState([]);
  const [current, setCurrent] = useState(0);
  const [active, setActive] = useState(false);
  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("https://picsum.photos/v2/list");
        const data = await response.json();
        const imageData = data.map((image) => ({ ...image, likes: 0 }));
        setImages(imageData);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, []);

  useEffect(() => {
    setActive(true);
  }, [current]);
  console.log(images);
  const getPrevious = () => {
    if (current > 0) {
      setCurrent(current - 1);
      setActive(false);
    }
  };
  const getNext = () => {
    if (current < images.length) {
      setCurrent(current + 1);
      setActive(false);
    }
  };

  const setLike = () => {
    const newState = [...images];
    newState[current].likes++;
    setImages(newState);
  };
  return (
    <div className="App">
      <div className="gallery">
        <button className="button" onClick={getPrevious}>
          {"<"}
        </button>
        <div className="photo-card">
          <img
            className={`photo ${active ? "active" : ""}`}
            key={current}
            src={images[current] ? images[current].download_url : ""}
            alt=""
          />
          <div className="actions">
            <button className="like" onClick={setLike}>
              ♡
            </button>
            <p>{images[current]?.likes ?? 0}</p>
          </div>
        </div>
        <button className="button" onClick={getNext}>
          {">"}
        </button>
      </div>
    </div>
  );
}
