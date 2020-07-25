import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchDataIndonesia } from "../../redux/actions";
import Styled from "styled-components";

const Cards = Styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
text-align: center;
width: 20%;
margin: 10px;
height: 250px;
&:hover{
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
`;
const FlexWrap = Styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
`;

function CovidIndo(props) {
    useEffect(() => {
        props.dispatch(fetchDataIndonesia());

        // eslint-disable-next-line
    }, []);

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Update Covid-19</h1>
            <FlexWrap>
                {props.indonesia.Countries !== undefined &&
                    props.indonesia.Countries.map((item) => {
                        return (
                            <Cards>
                                <div key={item.CountryCode}>
                                    <h2>Negara: {item.Country}</h2>
                                    <p>
                                        <strong>Tanggal:</strong> {item.Date}
                                    </p>
                                    <p>
                                        <strong>Positif:</strong>{" "}
                                        {item.NewConfirmed}
                                    </p>
                                    <p>
                                        <strong>Meninggal:</strong>{" "}
                                        {item.NewDeaths}
                                    </p>
                                    <p>
                                        <strong>Sembuh: </strong>
                                        {item.NewRecovered}
                                    </p>
                                </div>
                            </Cards>
                        );
                    })}
            </FlexWrap>
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log(state.indonesia);
    return {
        indonesia: state.indonesia,
    };
};
export default connect(mapStateToProps)(CovidIndo);
