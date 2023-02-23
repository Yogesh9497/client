import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { BsFillHandThumbsUpFill, BsFillHandThumbsDownFill } from "react-icons/bs";


function NewPost(props) {

    const [upVote, setUpVote] = useState(40);
    const [downVote, setDownVote] = useState(15);

    return (
        <div className='d-flex justify-content-center'>
            <Card style={{ width: '36rem'}}>
            {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.text}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Posted By: {props.username}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#"><BsFillHandThumbsUpFill onClick={()=>setUpVote(upVote+1)} />{upVote}</Card.Link>

                <Card.Link href="#"><BsFillHandThumbsDownFill onClick={()=>setDownVote(downVote-1)}/>{downVote}</Card.Link>
            </Card.Body>
        </Card>
        </div>
    );
}

export default NewPost;