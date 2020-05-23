import styled from "styled-components";
import {Card} from "reactstrap";

export const StyledBookCard = styled(Card)`
        height: 475px;
        font-size: 15px;
        border-radius: 10px;
        color: #545454 !important;
        margin-bottom: 20px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        text-align: center;

        .card-img-top {
            height: 250px;
            border-radius: 18px;
            padding: 10px 10px 0px;
        }
        .review-card-text {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .title{
            height: 50px;
        }

        .review{
            width: 80%;
        }  

        .row{
            padding: 3px;
        }  
`;
