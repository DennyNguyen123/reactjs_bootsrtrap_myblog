import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import MyCardStyle from "./MyCard.module.scss";
import { Badge } from "react-bootstrap";

function MyCard(props) {
    const {isButton,comment,image,isSubtitle,children,title,date} = props;
  return (
    <Card className="rounded-0 mt-4">
      <Card.Img
        variant="top"
        className="rounded-0"
        src={image}
      />
      <Card.Body>
        <Card.Title> {title}</Card.Title>
        {isSubtitle && (<Card.Subtitle  className="mt-3">Title description, {date}</Card.Subtitle>)}
        <Card.Text  className="mt-3">
          {children}
        </Card.Text>

        {isButton && (
          <Row fluid  className="mt-4">
            <Col>
              <Button variant="outline-dark rounded-0 px-4 py-2" className="float-start">
              READ MORE »
              </Button>
            </Col>
            <Col>
              <div className="px-4 py-2 float-end">
              Comments <Badge bg="dark" className="rounded-0">{comment}</Badge>
              </div>
            </Col>
          </Row>
        )}
      </Card.Body>
    </Card>
  );
}

export default MyCard;
