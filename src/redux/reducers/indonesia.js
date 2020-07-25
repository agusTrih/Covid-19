import { GET_DATA_INDONESIA } from "../actions";

const initialstate = [];

export default (state = initialstate, actions) => {
    switch (actions.type) {
        case GET_DATA_INDONESIA:
            return actions.data;

        default:
            return state;
    }
};
