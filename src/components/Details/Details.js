import React from "react";
import {DetailPageStyle} from "./DetailsStyles";
import {getBooks} from "../../state/ducks/books/action";
import { Card, CardBody, CardTitle, CardHeader, CardImg, Container, Row, Col, CardText } from 'reactstrap';
import { connect } from "react-redux";
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';

const Details = (props) => {
    return(
        <div>
            <Container>
            <DetailPageStyle>
                <Row>
                    <Col xs="3"> 
                    <CardImg className="detail-img" src={props.book.imageUrl} alt={`${props.book.title} book image`} />
                    </Col>
                    <Col xs="9">
                        <CardTitle className="card-title">
                            {props.book.title}
                        </CardTitle>
                        <hr/>
                        <CardText>
                            <b>Author:</b> {props.book.author}
                        </CardText>
                        <CardText>
                            <b>Category:</b> {props.book.category}
                        </CardText>

                        <b>Raiting:</b> 
                        <CardText className="rating">
                            <Rater rating={props.book.rating} total={5} interactive={false} starRatedColor="blue"/> 
                        </CardText>

                        <CardText>
                            
                            <b>Status:</b> {props.book.status}
                        </CardText>
                        <CardText>
                            <b>Description:</b> {props.book.description}
                        </CardText>
                    </Col>
                </Row>
            </DetailPageStyle> 
            </Container> 
        </div>
    )
}

/* const mapStateToProps = (state) => {
    return {
        books: state.books.data,
        loading: state.books.loading,
        filter: state.books.filter,
    }
} */

const mapDispatchToProps = {
    getBooks
}

export default connect(null, mapDispatchToProps)(Details);