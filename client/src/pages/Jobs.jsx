import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "../App.css";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { useSearchParams } from "react-router-dom";

export default function Jobs() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");
  const [servicesByCat, setServicesByCat] = useState([]);

  // useEffect(() => {
  //   getJobsByCategory();
  // }, []);

  // const getJobsByCategory = async () => {
  //   try {
  //     // get All Jobs listed under a certain Category Id (which is given to me by usesearchParams)
  //     const response = await fetch(`/index/services?category=${category}`);
  //     const data = await response.json();
  //     console.log(data);
  // // setServicesByCat(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <>
      {/* <div>
        <ul>
          {serviceByCat.map((job) => (
            <li key={job.id}>
              <div className="container">
                <div className="separateItems row">
                  <Link
                    className="text-decoration-none text-success col-6"
                    to={`/singleitem?item=${item.id}`}
                  >
                    <span>
                      {item.colour} {item.type}
                    </span>
                  </Link>
                  <div className="col">
                    {item.image ? (
                      <img src={item.image} className="small_img" />
                    ) : (
                      <img src={default_picture} className="small_img" />
                    )}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div> */}

      <Container>
        <Row className="mt-5 mr-5 ml-5 justify-content-md-center ">
          <Col xs={12} md={6}>
            <div className="sacramento-regular welcome-title justify-content-md-center">
              Marketplace
            </div>
            <hr />
            <div className="josefin-sans-300 mt-4 mb-4">
              Browse through the listed service requests and find a match!
              Please make sure to check your availability with the listed hiring
              date. Once you accept a job, it will automatically be assigned to
              you and a new Chat will appear in your Chatbox.
            </div>
          </Col>
        </Row>
        <Row className="mr-5 ml-5 justify-content-md-center ">
          <Col className="job-box col-3 m-2">
            <Image
              className="icon"
              src="https://cdni.iconscout.com/illustration/premium/thumb/gardening-5590072-4671964.png?f=webp"
            ></Image>
            <div>Jobs name</div>
            <div>Description blablablablkajsdlkfjalskdjflaksjdf</div>
            <div>Date / Time: </div>
            <div>Points</div>
            <Button className="button josefin-sans-400" href="/Request">
              Details
            </Button>
          </Col>
          <Col className="job-box col-3 m-2">
            <Image
              className="icon"
              src="https://cdni.iconscout.com/illustration/premium/thumb/gardening-5590072-4671964.png?f=webp"
            ></Image>
            <div>Jobs name</div>
            <div>Description blablablablkajsdlkfjalskdjflaksjdf</div>
            <div>Date / Time: </div>
            <div>Points</div>
            <Button className="button josefin-sans-400" href="/Request">
              Details
            </Button>
          </Col>
          <Col className="job-box col-3 m-2">
            <Image
              className="icon"
              src="https://cdni.iconscout.com/illustration/premium/thumb/gardening-5590072-4671964.png?f=webp"
            ></Image>
            <div>Jobs name</div>
            <div>Description blablablablkajsdlkfjalskdjflaksjdf</div>
            <div>Date / Time: </div>
            <div>Points</div>
            <Button className="button josefin-sans-400" href="/Request">
              Details
            </Button>
          </Col>
          <Col className="job-box col-3 m-2">
            <Image
              className="icon"
              src="https://cdni.iconscout.com/illustration/premium/thumb/gardening-5590072-4671964.png?f=webp"
            ></Image>
            <div>Jobs name</div>
            <div>Description blablablablkajsdlkfjalskdjflaksjdf</div>
            <div>Date / Time: </div>
            <div>Points</div>
            <Button className="button josefin-sans-400" href="/Request">
              Details
            </Button>
          </Col>
          <Col className="job-box col-3 m-2">
            <Image
              className="icon"
              src="https://cdni.iconscout.com/illustration/premium/thumb/gardening-5590072-4671964.png?f=webp"
            ></Image>
            <div>Jobs name</div>
            <div>Description blablablablkajsdlkfjalskdjflaksjdf</div>
            <div>Date / Time: </div>
            <div>Points</div>
            <Button className="button josefin-sans-400" href="/Request">
              Details
            </Button>
          </Col>
          <Col className="job-box col-3 m-2">
            <Image
              className="icon"
              src="https://cdni.iconscout.com/illustration/premium/thumb/gardening-5590072-4671964.png?f=webp"
            ></Image>
            <div>Jobs name</div>
            <div>Description blablablablkajsdlkfjalskdjflaksjdf</div>
            <div>Date / Time: </div>
            <div>Points</div>
            <Button className="button josefin-sans-400" href="/Request">
              Details
            </Button>
          </Col>
        </Row>
      </Container>
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