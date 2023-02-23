import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import NewPost from './NewPost';

function AddPost() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  
  function addNewPost(){
    handleClose();
      return (
        <NewPost title={title} text={text}/>
      )
  }

  return (
    <div className='d-flex justify-content-center my-5'>
      <Button variant="primary" onClick={handleShow}>
        Create New Post
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="title"
                value={title}
                onChange={(event) =>setTitle(event.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control 
              as="textarea" 
              rows={3} 
              value={text}
              onChange={(event) =>setText(event.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addNewPost}>
            Post to Feed
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

// render(<AddPost />);
export default AddPost;