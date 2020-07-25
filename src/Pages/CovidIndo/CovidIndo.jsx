import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchDataIndonesia } from "../../redux/actions";

function CovidIndo(props) {
    useEffect(() => {
        props.dispatch(fetchDataIndonesia());

        // eslint-disable-next-line
    }, []);

    return (
        <div>
            <h1>Update Covid-19</h1>
            {props.indonesia.Countries !== undefined &&
                props.indonesia.Countries.map((item) => {
                    return (
                        <div key={item.CountryCode}>
                            <h2>Negara: {item.Country}</h2>
                            <p>
                                <strong>Tanggal:</strong> {item.Date}
                            </p>
                            <p>
                                <strong>Positif:</strong> {item.NewConfirmed}
                            </p>
                            <p>
                                <strong>Meninggal:</strong> {item.NewDeaths}
                            </p>
                            <p>
                                <strong>Sembuh: </strong>
                                {item.NewRecovered}
                            </p>
                        </div>
                    );
                })}
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
