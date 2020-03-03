import {ADD_COUNTER} from "../constants";

const weather = (state = {title: ''}, { type, title }) => {
    switch (type) {
        case ADD_COUNTER:
            return {
                ...state,
                title: title
            };
        default:
            return state;
    }
};

export default weather;
