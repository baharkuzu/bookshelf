import React, {useState} from 'react';
import {Modal, CardImg, CardText, CardBody,
    ModalBody, ModalFooter, Button, CardLink, ModalHeader, ButtonToggle, Row, Col } from "reactstrap";
import {StyledBookCard} from "./BookStyles";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

const Book = (props) => {

    const {
        className
      } = props;

      const [modal, setModal] = useState(false);
      const toggle = () => setModal(!modal);

    const {imageUrl, rating, title, id, review, goodreads} = props;
    return (
            <StyledBookCard className="card">
                <CardImg top width="100%" src={imageUrl} alt={title}/>
                <CardBody>
                    <CardText>
                        <strong>{ rating ? `${rating}/ 5`: `- / 5` }</strong>
                    </CardText>
                    <CardText className="title">
                        <strong>{title}</strong>
                    </CardText>

                    <Row className="row">
                        <Col>
                        <Button className="review" color="primary" size="sm" onClick={toggle}>Review</Button>{' '}
                        </Col>
                    </Row>
                    <Modal isOpen={modal} toggle={toggle} className={className}>
                        <ModalHeader>{title} Book Review</ModalHeader>
                        <ModalBody>
                            {review ? review: "No Book Review Available"}
                        </ModalBody>
                        <ModalFooter>
                        <Button color="danger" onClick={toggle}>Çıkış</Button>
                        </ModalFooter>
                    </Modal>

                    <Row className="row">
                        <Col>
                            <CardLink>
                            <Link to={`/details/${id}`}>Details</Link>
                            </CardLink>
                        </Col>
                        <Col>
                            <CardLink >
                            <Link to={`/edit-book/${id}`}>Edit Book</Link>
                            </CardLink>
                        </Col>
                    </Row>

                    <CardLink>
                        {goodreads ? <Link to={`/goodreads/${id}`}>{goodreads}</Link> : "No Book Link Available"}
                    </CardLink>    

                </CardBody>
            </StyledBookCard>
    );
};

const mapStateToProps = (state) => {
    return {
        reviewStatus: state.books.reviewStatus,
    }
  };

  export default connect(mapStateToProps)(Book);