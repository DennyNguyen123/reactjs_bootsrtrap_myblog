import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import TagsStyle from "./Tags.module.scss";
import classNames from "classnames";

const Tags = () => {
  return (
    <Stack className={classNames(TagsStyle.tags)}>
      <div className={classNames(TagsStyle.tags__header)}>Tags</div>
      <Container>
        <Row className={classNames(TagsStyle.tags__items)} fluid>
          <Col className={classNames(TagsStyle.tags__item)} xs={2}>
            <p className={classNames(TagsStyle.tags__text,TagsStyle["tags__text-active"])}>Travel</p>
          </Col>
          <Col className={classNames(TagsStyle.tags__item)} xs={2}>
            <p className={classNames(TagsStyle.tags__text)}>New York</p>
          </Col>
          <Col className={classNames(TagsStyle.tags__item)} xs={2}>
            <p className={classNames(TagsStyle.tags__text)}>London</p>
          </Col>
          <Col className={classNames(TagsStyle.tags__item)} xs={2}>
            <p className={classNames(TagsStyle.tags__text)}>IKEA</p>
          </Col>
          <Col className={classNames(TagsStyle.tags__item)} xs={2}>
            <p className={classNames(TagsStyle.tags__text)}>NORWAY</p>
          </Col>
          <Col className={classNames(TagsStyle.tags__item)} xs={2}>
           <p className={classNames(TagsStyle.tags__text)}> DIY</p>
          </Col>
          <Col className={classNames(TagsStyle.tags__item)} xs={2}>
            <p className={classNames(TagsStyle.tags__text)}>Ideas</p>
          </Col>
          <Col className={classNames(TagsStyle.tags__item)} xs={2}>
            <p className={classNames(TagsStyle.tags__text)}>Baby</p>
          </Col>
          <Col className={classNames(TagsStyle.tags__item)} xs={2}>
            <p className={classNames(TagsStyle.tags__text)}>Family</p>
          </Col>
          <Col className={classNames(TagsStyle.tags__item)} xs={2}>
            <p className={classNames(TagsStyle.tags__text)}>News</p>
          </Col>
          <Col className={classNames(TagsStyle.tags__item)} xs={2}>
            <p className={classNames(TagsStyle.tags__text)}>Clothing</p>
          </Col>
          <Col className={classNames(TagsStyle.tags__item)} xs={2}>
            <p className={classNames(TagsStyle.tags__text)}>Shopping</p>
          </Col>
          <Col className={classNames(TagsStyle.tags__item)} xs={2}>
            <p className={classNames(TagsStyle.tags__text)}>Sports</p>
          </Col>
          <Col className={classNames(TagsStyle.tags__item)} xs={2}>
            <p className={classNames(TagsStyle.tags__text)}>Games</p>
          </Col>
        </Row>
      </Container>
    </Stack>
  );
};

export default Tags;
