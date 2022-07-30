import React, { useEffect } from 'react'
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {getPosts} from '../../redux/actions';
import { postsState$ } from '../../redux/selectors';
import Post from './Post';

export default function PostList() {
  const dispatch = useDispatch();

  const posts = useSelector(postsState$);
  console.log('[postsList]', posts);

  useEffect(() => {
    dispatch(getPosts.getPostsRequest());
  }, [dispatch]);

  return (
    <Grid container spacing={2} alignItems='stretch'>
      {posts.map((post) => (
        <Grid key={post._id}  item xs={12} sm={12}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  )
}
