import React, {useState}from 'react';
import { Nav, Container, Row, Col, Button, InputGroupAddon, InputGroupText, Input} from 'reactstrap';
import {connect} from "react-redux";
import {StyledNavbarText, StyledInputGroup} from "./FilterSortBarStyles";
import {categories} from "../../constants";
import {setFilter, searchBooks, sortBooks} from "../../state/ducks/books/action";

const FilterSortBar = (props) => {
    return (
        <div>
                <Container fluid className="bg-white" style={{padding: "15px"}}>
                    <Row>
                        <Col xs={5}>
                            <Nav className="bg-white">
                                <StyledNavbarText><strong>Categories:</strong></StyledNavbarText>
                                <StyledNavbarText active={!props.activeFilter} onClick={() => {
                                    props.changeFilter("");
                                }}>All</StyledNavbarText>
                                {
                                    categories.map((category) => {
                                        return <StyledNavbarText active={props.activeFilter === category} onClick={() => {
                                            props.changeFilter(category);
                                        }}>{category}</StyledNavbarText>
                                    })
                                }
                            </Nav>
                        </Col>

                        <Col xs={6}>
                            <StyledInputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>Search by name</InputGroupText>
                                </InputGroupAddon>
                                <Input onChange={(e) => {
                                    //e.target.value
                                    props.search(e.target.value)
                                }}
                                
                               placeholder="Book Name or Author"/>
                            </StyledInputGroup>

                            <StyledInputGroup>
                                <Input type="select" name="select" id="exampleSelect" onChange={(e) => {
                                    props.sort(e.target.value);
                                }}>
                                    <option value="">No Sort</option>
                                    <option value="alphabetical">Sort Alphabetical</option>
                                    <option value="rating">Sort by Rating</option>
                                </Input>
                            </StyledInputGroup>
                        </Col>
                        <Col >
                        <Button outline color="secondary" size="sm">Card</Button>{' '}  
                        <Button outline color="secondary" size="sm">List</Button>
                        </Col>
                    </Row>
                </Container>
        </div>
    );
};
const mapStateToProps = (state) =>{
    return {
        activeFilter: state.books.filter
    }
};

const mapDispatchToProps = {
  changeFilter: setFilter,
  search: searchBooks,
  sort: sortBooks
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterSortBar);