import styled from "styled-components";
import {Card} from "reactstrap";

export const StyledBookCard = styled(Card)`
        height: 475px;
        font-size: 15px;
        .card-img-top {
            height: 250px;
        }
        .review-card-text {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .title{
            height: 55px;
        }
        .card{
            padding-top: 5px;
        }
`;
