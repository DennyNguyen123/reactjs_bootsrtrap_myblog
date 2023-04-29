import React from 'react';
import { Stack } from 'react-bootstrap';
import PostsStyle from './Posts.module.scss'
import Post from './Post'

const Posts = props => {
    return (
        <div>
            {/* <ListGroup className='mt-3'>
                <ListGroup.Item variant='secondary' className={PostsStyle.header}>Popular Posts</ListGroup.Item>
                <ListGroup.Item className={PostsStyle.post__items}>
                    <Post title= 'Lorem' image="https://www.w3schools.com/w3images/workshop.jpg">Praes tinci sed</Post>
                </ListGroup.Item>
                <ListGroup.Item className={PostsStyle.post__items}>
                    <Post title= 'Lorem' image="https://www.w3schools.com/w3images/gondol.jpg">Praes tinci sed</Post>
                </ListGroup.Item>
                <ListGroup.Item className={PostsStyle.post__items}>
                    <Post title= 'Lorem' image="https://www.w3schools.com/w3images/skies.jpg">Praes tinci sed</Post>
                </ListGroup.Item>
                <ListGroup.Item className={PostsStyle.post__items}>
                    <Post title= 'Lorem' image="https://www.w3schools.com/w3images/rock.jpg">Praes tinci sed</Post>
                </ListGroup.Item>
            </ListGroup> */}

            <Stack className='border mt-3'>
                <div variant='secondary' className={PostsStyle.header}>Popular Posts</div>
                <div className={PostsStyle.post__items}>
                    <Post title= 'Lorem' image="https://www.w3schools.com/w3images/workshop.jpg">Praes tinci sed</Post>
                </div>
                <div className={PostsStyle.post__items}>
                    <Post title= 'Lorem' image="https://www.w3schools.com/w3images/gondol.jpg">Praes tinci sed</Post>
                </div>
                <div className={PostsStyle.post__items}>
                    <Post title= 'Lorem' image="https://www.w3schools.com/w3images/skies.jpg">Praes tinci sed</Post>
                </div>
                <div className={PostsStyle.post__items}>
                    <Post title= 'Lorem' image="https://www.w3schools.com/w3images/rock.jpg">Praes tinci sed</Post>
                </div>
            </Stack>
        </div>
    );
};


export default Posts;