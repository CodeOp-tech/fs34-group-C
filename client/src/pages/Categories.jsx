import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Card, Row, Col } from "react-bootstrap";

export default function Categories() {
  const [types, setTypes] = useState([]);

  const fectchTypes = async () => {
    try {
      const response = await axios.get("/api/index/types");
      console.log(response);
      setTypes(response.data);
    } catch (error) {
      console.error("Error fetching rankings:", error);
    }
  };
  useEffect(() => {
    fectchTypes();
  }, []);
  return (
    <div>
      <Container>
        <h1>Browse jobs by Categories</h1>
        <Row xs={1} md={2} lg={4} className="g-4">
          {types.map((type, i) => (
            <Col key={i}>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>{type.category_name}</Card.Title>

                  <Card.Text>{type.category_description}</Card.Text>
                  <Card.Link as={Link} to={"/jobs"}>
                    See jobs
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
