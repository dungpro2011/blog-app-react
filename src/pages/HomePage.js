import React, { useCallback } from "react";
import { Container, Fab } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add'

import Header from "../components/header";
import PostList from "../components/postList";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { showModal } from "../redux/actions";
import CreatePostModal from "../components/createPostModel";

const HomePage = () => {
  const classes = useStyles();
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
          className={classes.fab}
          onClick={openModal}
        >
          <AddIcon />
        </Fab>
      </Container>
      </div>
  );
};

export default HomePage;
