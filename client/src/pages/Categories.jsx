import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";

export default function Categories() {
  const [types, setTypes] = useState([]);

  const fectchTypes = async () => {
    try {
      const response = await axios.get("/api/services/types");
      // console.log(response);
      setTypes(response.data);
    } catch (error) {
      console.error("Error fetching rankings:", error);
    }
  };
  useEffect(() => {
    fectchTypes();
  }, []);
  return (
    <>
      <div className="pt-5 pb-3">
        <Container>
          <Row className="m-5 justify-content-md-center">
            <Col xs={12} md={6}>
              <div className="welcome-title justify-content-md-center josefin-sans-400">
                Job categories
              </div>
              <hr />
              <div className="josefin-sans-300 mt-4">
                Jobs are posted according to categories. Check out the
                categories below and search for a specific job field.
              </div>
            </Col>
          </Row>
          <Row className="mr-5 ml-5 justify-content-md-center ">
            {types.map((type, i) => (
              <Col key={i} md={3} className="josefin-sans-300 mb-4">
                <Card>
                  <Card.Body>
                    <Image
                      fluid
                      className="icon mb-3 d-flex align-items-center"
                      src={
                        type.category_name === "Household"
                          ? "https://cdni.iconscout.com/illustration/premium/thumb/house-cleaning-service-4715607-3932688.png"
                          : type.category_name === "Social"
                          ? "https://cdni.iconscout.com/illustration/premium/thumb/couple-spending-time-at-park-9300356-7588868.png"
                          : type.category_name === "Tech assistance"
                          ? "https://cdni.iconscout.com/illustration/premium/thumb/boy-using-wireless-technology-4153015-3443561.png"
                          : type.category_name === "Handywork"
                          ? "https://cdni.iconscout.com/illustration/premium/thumb/craftsman-7281822-5950629.png?f=webp"
                          : type.category_name === "Pets"
                          ? "https://cdni.iconscout.com/illustration/premium/thumb/happy-woman-holding-bag-of-food-and-going-to-feed-dog-5560235-4635264.png?f=webp"
                          : type.category_name === "Errands"
                          ? "https://www.pngfind.com/pngs/b/509-5092285_last-mile-delivery-delivery-van-car-cartoon-hd.png"
                          : type.category_name === "Shopping & Groceries"
                          ? "https://cdni.iconscout.com/illustration/premium/thumb/delivery-boy-3012842-2627456.png?f=webp"
                          : type.category_name === "Babysitting"
                          ? "https://cdni.iconscout.com/illustration/premium/thumb/babysitter-or-mother-and-baby-girl-playing-with-toy-cubes-at-home-2931948-2463796.png?f=webp"
                          : ""
                      }
                    ></Image>
                    <Card.Title>{type.category_name}</Card.Title>
                    <Card.Text>{type.category_description}</Card.Text>
                    <Button
                      className="button josefin-sans-400 mt-2"
                      href={`/jobs?category=${type.id}`}
                    >
                      See jobs
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* Placeholder / ideas for icons:
      <Image
        className="icon"
        
        src="https://cdni.iconscout.com/illustration/premium/thumb/house-cleaning-service-4715607-3932688.png"
      ></Image>
      <Image
        className="icon"
        src="https://cdni.iconscout.com/illustration/premium/thumb/tech-support-6992603-5699712.png?f=webp"
      ></Image>
      <Image
        className="icon"
        src="https://cdni.iconscout.com/illustration/premium/thumb/babysitter-or-mother-and-baby-girl-playing-with-toy-cubes-at-home-2931948-2463796.png?f=webp"
      ></Image>
      <Image
        className="icon"
        src="https://americare-v1709151372.websitepro-cdn.com/wp-content/uploads/2022/01/ameriCARE_RunningErrands_Illustration.png"
      ></Image>
      <Image
        className="icon"
        src="https://cdni.iconscout.com/illustration/premium/thumb/craftsman-7281822-5950629.png?f=webp"
      ></Image>
      <Image
        className="icon"
        src="https://cdni.iconscout.com/illustration/premium/thumb/delivery-boy-3012842-2627456.png?f=webp"
      ></Image>
      <Image
        className="icon"
        src="https://www.pngfind.com/pngs/b/509-5092285_last-mile-delivery-delivery-van-car-cartoon-hd.png"
      ></Image> */}
    </>
  );
}
