import React from 'react';
import Post from './Post';

export default function Feed(props) {

    const { posts, likes, comments } = props;

    return (
        <div>
            {posts.map((post) => {
                const { id } = post;
                const postLikes = likes.filter(like => like.postId === id);
                const postComments = comments.filter(comment => comment.postId === id);
                return (
                    <Post key={post.id} post={post} likes={postLikes} comments={postComments} />
                )
            })}
        </div>
    );
}

