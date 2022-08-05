import React, { useCallback } from "react";
import { Avatar, Container, Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add'


import Header from "../components/header";
import PostList from "../components/postList";
import { useDispatch } from "react-redux";
import { showModal } from "../redux/actions";
import { getPosts } from "../redux/actions";


import CreatePostModal from "../components/createPostModel";
import * as styles from "./styles"

const HomePage = ({name}) => {
  const fab = styles.fab;  
  const dispatch = useDispatch();

  dispatch(getPosts.getPostsRequest());

  const openModal = useCallback(() => {
    dispatch(showModal());
  }, [dispatch]);

  const username = name.toUpperCase();

  return (
    <div style={{position: 'relative'}}>
      <Avatar sx={{position: 'absolute',width: '60px',height: '60px', right: '10px', background: 'green'}} >{ username }</Avatar>
      
      <Container maxWidth='xs' >
        <Header />
        <PostList />
        <CreatePostModal name={name} />
        <Fab
          color='primary'
          onClick={openModal}
          sx={fab}
        >
          <AddIcon />
        </Fab>


      </Container>
      </div>
  );
};

export default HomePage;
