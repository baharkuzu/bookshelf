import React from 'react';
import {Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardLink } from "reactstrap";
import {StyledBookCard} from "./BookStyles";
import {Link} from "react-router-dom";

const Book = (props) => {
    const {imageUrl, rating, title, id, review, goodreads} = props;
    return (
            <StyledBookCard className="card">
                <CardImg top width="100%" src={imageUrl} alt={title} />
                <CardBody>
                    <CardText>
                        <strong>{`${rating} / 5`}</strong>
                    </CardText>
                    <CardText className="title">
                        <strong>{title}</strong>
                    </CardText>
                    <CardText className="review-card-text">
                         Review: {review}
                    </CardText>
                    <CardLink>
                        Details
                    </CardLink>
                    <CardLink >
                        <Link to={`/edit-book/${id}`}>Edit Book</Link>
                    </CardLink>
                    <CardText>
                        <CardLink>
                            <Link to={`/goodreads/${id}`}>{goodreads}</Link>
                        </CardLink>
                    </CardText>
                </CardBody>
            </StyledBookCard>
    );
};

export default Book;