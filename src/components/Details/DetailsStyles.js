import styled from "styled-components";
import {Card} from "reactstrap";

export const DetailPageStyle = styled(Card)`
        height: 400px;
        margin-top: 70px;
        background-color:transparent;
        .detail-img{
                width: 100%;
                height: 400px;
        } 
        .card-title{
                padding-top: 15px;
                text-align: center;
                font-size: 25px;
                font-weight: bold;
                color: #3c4245;
        }
        .rating{
                font-size: 25px;
                color: yellow;
        }
`;