import React from 'react';
import { Card } from 'react-bootstrap';
import PostStyle from "./Post.module.scss";
import classNames from 'classnames';

const Post = (props) => {
    const {image,title,children} = props;
    return (
        <Card className={classNames(PostStyle.mycard,'rounded-0')} fluid>
            <Card.Img src={image} className={PostStyle.mycard__img}></Card.Img>
            <Card.Body className={PostStyle.mycard__body}>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{children}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Post;
