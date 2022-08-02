import Modal from '@mui/material/Modal/';
import Button from '@mui/material/Button';
import { TextField, TextareaAutosize, Box } from '@mui/material';


import FileBase64 from 'react-file-base64';
import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modalState$ } from '../../redux/selectors';
import { createPost, hideModal } from '../../redux/actions/index';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid gray',
  boxShadow: 14,

  p: 4,
};

export default function CreatePostModal() {
  const [data, setData] = useState({
    title: '',
    content: '',
    attachment: '',
  });
  const dispatch = useDispatch();
  const { isShow } = useSelector(modalState$);

  const onClose = useCallback(() => {
    dispatch(hideModal());
    setData({
      title: '',
      content: '',
      attachment: '',
    });
  }, [dispatch]);

  const onSubmit = useCallback(() => {
    // console.log({ data });
    dispatch(createPost.createPostRequest(data));
    onClose();
  }, [data, onClose, dispatch]);

  const body = (
    <Box sx={style} id='simple-modal-title'>
      <h2>Create New Post</h2>
      <form noValidate autoComplete='off' style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
        <TextField
          required
          label='Title'
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
          sx={{ marginBottom: '10px' }}
        />
        <TextareaAutosize
          sx={{
            padding: '10px',
            marginBottom: '10px',
          }}
          minRows={10}
          maxRows={15}
          placeholder='Content...'
          value={data.content}
          onChange={(e) => setData({ ...data, content: e.target.value })}

        />

        <FileBase64
          accept='image/*'
          multiple={false}
          type='file'
          value={data.attachment}
          onDone={({ base64 }) => setData({ ...data, attachment: base64 })} />

        <div style={{ marginTop: '10px' }} >
          <Button
            variant='contained'
            color='primary'
            component='span'
            fullWidth
            onClick={onSubmit}
          >
            Create
          </Button>
        </div>
      </form>
    </Box>
  );

  return (
    <div>
      <Modal open={isShow} onClose={onClose}>
        {body}
      </Modal>
    </div>
  );
}