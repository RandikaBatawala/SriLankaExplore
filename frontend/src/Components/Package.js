import React, { Component } from "react";
import { Container, Row, CardColumns, Badge } from "reactstrap";
import TourCard from "./TourCard";
import "../App.css";
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
import imgCard22 from "../img/H_sigiriya.jpg";
import imgCard23 from "../img/H_katharagama.jpg";
import imgCard24 from "../img/H_yapahuwa.jpg";

const tours = [
 
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
  },
  {
    id: 22,
    category: ["historical places"],
    img: imgCard22,
    alt: "camping in the lake",
    title: "Sigiriya",
    subtitle: "Its King, Kasyapa (477-495AD) reigned from this fortress, which was also his palace"
  },
  {
    id: 23,
    category: ["historical places"],
    img: imgCard23,
    alt: "camping in the lake",
    title: "Katharagama",
    subtitle: "If veneration takes you anywhere in Sri Lanka, then Kataragama should be your first place to visit"
  },
  {
    id: 24,
    category: ["historical places"],
    img: imgCard24,
    alt: "camping in the lake",
    title: "Yapahuwa",
    subtitle: "Yapahuwa is a 300ft rock fortress that was once home to Buddha’s Sacred Tooth Relic and also the capital of Sri Lanka"
  }




];

const itemCategories = [
  "all",
  "cultural item",
  "traditional food",
  "historical places",

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
            <h1>Information of Sri Lanka</h1>
            <p>One of the best Country in World</p>
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
