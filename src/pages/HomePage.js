import React, { useCallback } from "react";
import { Container, Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add'


import Header from "../components/header";
import PostList from "../components/postList";
import { useDispatch } from "react-redux";
import { showModal } from "../redux/actions";
import CreatePostModal from "../components/createPostModel";
import * as styles from "./styles"

const HomePage = () => {
  const fab = styles.fab;
  
  const dispatch = useDispatch();

  const openModal = useCallback(() => {
    dispatch(showModal());
  }, [dispatch]);

  return (
    <div>
      <Container maxWidth='xs' >
        <Header />
        <PostList />
        <CreatePostModal />
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
