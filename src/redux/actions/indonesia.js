const GET_DATA_INDONESIA = "GET_DATA_INDONESIA";

const getDataIndonesia = (data) => {
    return {
        type: GET_DATA_INDONESIA,
        data,
    };
};

const fetchDataIndonesia = () => async (dispatch) => {
    const url = `https://api.covid19api.com/summary`;
    const options = {
        method: "GET",
        headers: {
            "content-type": "application/json",
        },
    };
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    dispatch(getDataIndonesia(result));
};

export { getDataIndonesia, GET_DATA_INDONESIA, fetchDataIndonesia };
