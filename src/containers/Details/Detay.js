import React from "react";
import { Details } from "../../components";
import axios from "axios";
import {apiHost} from "../../constants";
import { Row, Col } from "reactstrap";

class Detay extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            book: ""
        }
    }

    componentDidMount() {
        const id = this.props.routerProps.match.params.id;
        if(id){
            axios.get(`${apiHost}/books/${id}`).then((result) => {
                this.setState({
                    book: result.data
                })
            });
        }
    }

    render(){
        const id = this.props.routerProps.match.params.id;
        console.log("detay book:", this.state.book)
        return (
            <Details book={this.state.book} id={id}/>
        );
    }
}


export default Detay;