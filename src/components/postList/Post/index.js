import React, { useCallback } from 'react';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
  Tooltip
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import FavoriteIcon from '@material-ui/icons/Favorite';
import moment from 'moment';
import useStyles from './styles';
import { deletePost, updatePost } from '../../../redux/actions';
import { useDispatch } from 'react-redux'




export default function Post({ post }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const onClickLike = useCallback(() => {
    dispatch(
      updatePost.updatePostRequest({ ...post, likeCount: post.likeCount + 1 })
    );
  }, [dispatch, post]);

  const onClickDelete = useCallback(() => {
    dispatch(deletePost.deletePostRequest(post));

  }, [dispatch, post ]);

  return (
    <Card>
      <CardHeader
        avatar={<Avatar>A</Avatar>}
        title={post.author}
        subheader={moment(post.updatedAt).format('HH:MM MMM DD,YYYY')}
        action={
          <Tooltip title='delete' onClick={onClickDelete}>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        }
      />
      <CardMedia
        image={post.attachment || ''}
        title='Title'
        className={classes.media}
      />
      <CardContent>
        <Typography variant='h5' color='textPrimary'>
          {post.title}
        </Typography>
        <Typography variant='body2' component='p' color='textSecondary'>
          {post.content}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={onClickLike}>
          <FavoriteIcon />
          <Typography component='span' color='textSecondary'>
            {`${post.likeCount} likes`}
          </Typography>
        </IconButton>
      </CardActions>
    </Card>
  );
}