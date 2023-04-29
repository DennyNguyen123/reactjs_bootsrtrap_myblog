import appstyle from "./app.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import MyCard from "./components/MyCard/MyCard";
import Posts from "./components/Posts/Posts";
import Tags from "./components/Tags/Tags";
import classNames from "classnames";

function App() {
  return (
    <>
      <Container className={appstyle.container}>
        <Row fluid className="pt-5">
          <Col className="text-center">
            <h1>MY BLOG</h1>
          </Col>
        </Row>
        <Row fluid className="pt-1">
          <Col className="text-center py-0">
            Welcome to the blog of{" "}
            <Badge className="rounded-0" bg="dark">
              unknown
            </Badge>
          </Col>
        </Row>
        <Row fluid className="mt-4">
          <Col lg={8}>
            <MyCard
              image={"https://www.w3schools.com/w3images/woods.jpg"}
              isButton
              comment={0}
              isSubtitle
              title="TITLE HEADING"
            >
              Mauris neque quam, fermentum ut nisl vitae, convallis maximus
              nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor
              magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies
              mi non congue ullam corper. Praesent tincidunt sed tellus ut
              rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies
              congue gravida diam non fringilla.
            </MyCard>
            <MyCard
              image={"https://www.w3schools.com/w3images/bridge.jpg"}
              isButton
              comment={2}
              isSubtitle
              title="BLOG ENTRY"
            >
              Mauris neque quam, fermentum ut nisl vitae, convallis maximus
              nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor
              magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies
              mi non congue ullam corper. Praesent tincidunt sed tellus ut
              rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies
              congue gravida diam non fringilla.
            </MyCard>
          </Col>
          <Col lg={4}>
            <MyCard
              image={"https://www.w3schools.com/w3images/avatar_g.jpg"}
              title="My Name"
            >
              Just me, myself and I, exploring the universe of uknownment. I
              have a heart of love and a interest of lorem ipsum and mauris
              neque quam blog. I want to share my world with you.
            </MyCard>

            <Posts></Posts>

            <Tags></Tags>
          </Col>
        </Row>
      </Container>

      <Row fluid className={appstyle.footer}>

      </Row>
    </>
  );
}

export default App;
