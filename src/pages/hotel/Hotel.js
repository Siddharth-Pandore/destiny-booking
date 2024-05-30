import { useState } from "react";
import "./hotel.css";
import Navbar from "../../components/navbar/Navbar.js";
import Header from "../../components/header/Header.js";
import MailList from "../../components/maiList/MailList.js";
import Footer from "../../components/footer/Footer.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCircleXmark,
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square600/523515968.webp?k=b983f9ab977c5ef48b843307d07ee02b88b780ae789455bb1efe598e15fd6488&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square600/489495570.webp?k=a0fa90511ee3900faff70d916636aed09887241530528a2e5fd9a738201deeeb&o=",
    },

    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/505706814.jpg?k=38405a3298b419477777bafeeb6e7e9ae4cdb4b0e3fb2fb6477311ff6a91e34e&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/505706815.jpg?k=222aaadd1d3f0c70ee95b12d7f18750f06d53ac7064fa53b245527c24c4a6713&o=&hp=1",
    },

    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/523515978.jpg?k=59e9966ccc5779be9f11fb9556e940e090e0c57a9b8f38dca4f6274a20824bd7&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/505706816.jpg?k=a6aeacbaba564f94436679a0da4eead7bb55ddc254a95701a1d6f2d57974e2c7&o=&hp=1S",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Hotel Royal Pearl</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Kalam Street</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                  onClick={() => handleOpen(i)}
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Mountains</h1>
              <p className="hotelDesc">
                Located a 5-minute walk from Kalam Street in Krakow, Tower
                Street Apartments has accomodations with air conditioning and
                free WiFi. the units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and coffee machine.
                Popular points of intrest near the aprtment include Cloth Hall,
                Main market square and Town Hall Tower. The nearest airport is
                John Paul II International Krakow-Balice, 16.1 km from Tower
                Street Apartments, and the property offers a paid airport
                shuttel service.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this porperty has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b>(9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
