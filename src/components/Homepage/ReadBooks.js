import React from "react";
import {Col, Row, Container} from "reactstrap";
import Book from "./Book";

const ReadBooks = (props) => {
    return(
        <Container>
            <Row>
            {            
            props.reads.map((item) => {
                    return <Col xs={3}>
                        <Book {...item} />
                    </Col>
            })                
            }
            </Row>
        </Container>
    )
}

export default ReadBooks;