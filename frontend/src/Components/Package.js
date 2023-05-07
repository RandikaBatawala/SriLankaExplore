import React, { Component } from "react";
import { Container, Row, CardColumns, Badge } from "reactstrap";
import TourCard from "./TourCard";
import "../App.css";
import imgCard1 from "../img/img-card (1).jpg";
import imgCard2 from "../img/img-card (2).jpg";
import imgCard3 from "../img/img-card (3).jpg";
import imgCard4 from "../img/img-card (4).jpg";
import imgCard5 from "../img/img-card (5).jpg";
import imgCard6 from "../img/img-card (6).jpg";
import imgCard7 from "../img/img-card (7).jpg";
import imgCard8 from "../img/img-card (8).jpg";
import imgCard9 from "../img/img-card (9).jpg";
import imgBarobaybay from "../img/barobaybay.jpg";
import imgCard11 from "../img/C_Brass work.jpg";
import imgCard12 from "../img/C_Cane products.jpg";
import imgCard13 from "../img/C_Clay (pottery).jpg";
import imgCard14 from "../img/C_Handloom.jpg";
import imgCard15 from "../img/C_Lacquer work (Laksha).jpg";
import imgCard16 from "../img/C_traditional drums.jpg";
import imgCard17 from "../img/F_ Kokis.jpg";
import imgCard18 from "../img/F_Aluwa.jpg";
import imgCard19 from "../img/F_Curd and treacle.jpg";
import imgCard20 from "../img/F_Kiribath.jpg";
import imgCard21 from "../img/F_Sri Lankan Crab Curry.jpg";

const tours = [
  {
    id: 1,
    category: ["resort", "honeymoon"],
    img: imgCard1,
    alt: "blah blah",
    title: "Seaside Resort",
    subtitle: "Batangas Resort"
  },
  {
    id: 2,
    category: ["beach", "mountain"],
    img: imgCard2,
    alt: "blah blah",
    title: "Isla de Gigantes",
    subtitle: "Carles, Iloilo"
  },
  {
    id: 3,
    category: ["resort", "honeymoon"],
    img: imgCard3,
    alt: "blah blah",
    title: "The Farm",
    subtitle: "San Benito, Batangas"
  },
  {
    id: 4,
    category: ["climbing", "mountain"],
    img: imgCard4,
    alt: "blah blah",
    title: "Poog",
    subtitle: "Cebu"
  },
  {
    id: 5,
    category: ["resort", "honeymoon", "beach"],
    img: imgCard5,
    alt: "blah blah",
    title: "Koro Sun Resort & Rainforest Spa",
    subtitle: "Vanua Levu, Fiji"
  },
  {
    id: 6,
    category: ["climbing", "mountain"],
    img: imgCard6,
    alt: "blah blah",
    title: "Pi Shan",
    subtitle: "Yangshuo China"
  },
  {
    id: 7,
    category: ["beach", "climbing"],
    img: imgCard7,
    alt: "blah blah",
    title: "El-Nido",
    subtitle: "Palawan"
  },
  {
    id: 8,
    category: ["honeymoon", "beach", "resort"],
    img: imgCard8,
    alt: "blah blah",
    title: "Shangri-La’s Boracay Resort and Spa",
    subtitle: "Boracay Resort"
  },
  {
    id: 9,
    category: ["beach", "resort"],
    img: imgCard9,
    alt: "blah blah",
    title: "HUMANA Island Resort & Spa",
    subtitle: "Palawan"
  },
  {
    id: 10,
    category: ["camping", "beach"],
    img: imgBarobaybay,
    alt: "camping in the lake",
    title: "Barobaybay Camp Site",
    subtitle: "Barobaybay, Lavezares N. Samar"
  },
  {
    id: 11,
    category: ["cultural item"],
    img: imgCard11,
    alt: "camping in the lake",
    title: "Brass work",
    subtitle: "Products made out of brass have been used in everyday life in Sri Lanka"
  },
  {
    id: 12,
    category: ["cultural item"],
    img: imgCard12,
    alt: "camping in the lake",
    title: "traditional drums",
    subtitle: "Cane crafts are found within certain areas in Sri Lanka"
  },
  {
    id: 13,
    category: ["cultural item"],
    img: imgCard13,
    alt: "camping in the lake",
    title: "Clay (pottery)",
    subtitle: "One of the oldest lines of craftwork in Sri Lanka"
  },
  {
    id: 14,
    category: ["cultural item"],
    img: imgCard14,
    alt: "camping in the lake",
    title: "Handloom",
    subtitle: "Long ago handloom was reserved exclusively for the royalty and the renowned in the country and special villages were designated to practice the craft"
  },
  {
    id: 15,
    category: ["cultural item"],
    img: imgCard15,
    alt: "camping in the lake",
    title: "Lacquer work",
    subtitle: "One of the oldest lines of craftwork in Sri Lanka"
  },
  {
    id: 16,
    category: ["cultural item"],
    img: imgCard16,
    alt: "camping in the lake",
    title: "Lacquer work",
    subtitle: "One of the oldest lines of craftwork in Sri Lanka"
  },
  {
    id: 17,
    category: ["traditional food"],
    img: imgCard17,
    alt: "camping in the lake",
    title: "Kokis",
    subtitle: "Kokis is a Sri Lankan dessert with Dutch origins"
  },
  {
    id: 18,
    category: ["traditional food"],
    img: imgCard18,
    alt: "camping in the lake",
    title: "Aluwa",
    subtitle: "this traditional Sri Lankan dessert combines toasted rice flour, sugar syrup, ground cashew nuts"
  },
  {
    id: 19,
    category: ["traditional food"],
    img: imgCard19,
    alt: "camping in the lake",
    title: "Curd and treacle",
    subtitle: "Curd and treacle is a popular Sri Lankan sweet treat that is mainly enjoyed for breakfast."
  },
  {
    id: 20,
    category: ["traditional food"],
    img: imgCard20,
    alt: "camping in the lake",
    title: "Kiribath",
    subtitle: "This simple combination of rice and coconut milk is a staple dish throughout Sri Lanka."
  },
  {
    id: 21,
    category: ["traditional food"],
    img: imgCard21,
    alt: "camping in the lake",
    title: "Sri Lankan Crab Curry",
    subtitle: "This famous Sri Lankan curry is made with a combination of crab meat"
  }





];

const itemCategories = [
  "all",
  "beach",
  "mountain",
  "resort",
  "climbing",
  "camping",
  "honeymoon",
  "cultural item",
  "traditional food"
];

class Package extends Component {
  state = {
    cards: [],
    category: "all"
  };

  componentDidMount() {
    this.setState({ cards: tours });
  }

  render() {
    const { cards, category } = this.state;
    return (
      <div className="subComponent-lg" id="packageBody">
        <Container>
          <header className="headerTitle text-center">
            <h1>Tour Packages</h1>
            <p>A Great Collection of Our Tour Packages</p>
          </header>
          <section className="packageBody text-center">
            {itemCategories.map((badge, index) => (
              <Badge
                key={index}
                href=""
                color={badge === category ? "dark" : "light"}
                onClick={() => this.setState({ category: badge })}
              >
                {badge}
              </Badge>
            ))}

            <Row className="text-left">
              <CardColumns>
                {category !== "all"
                  ? cards.map(tourcard => {
                    return tourcard.category.map(catItem => {
                      return catItem === category ? (
                        <TourCard key={tourcard.id} tourcard={tourcard} />
                      ) : null;
                    });
                  })
                  : cards.map(tourcard => (
                    <TourCard key={tourcard.id} tourcard={tourcard} />
                  ))}
              </CardColumns>
            </Row>
          </section>
        </Container>
      </div>
    );
  }
}

export default Package;
