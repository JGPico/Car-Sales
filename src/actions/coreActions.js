export const TEMP_CASE = "TEMP_CASE";
export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const tempAction = () => {
    return { type: TEMP_CASE };
}

export const addFeature = (payload) => {
    // console.log("Payload", payload);
    return { type: ADD_FEATURE, payload: payload };
}

export const removeFeature = payload => {
    // console.log("Payload", payload);
    return { type: REMOVE_FEATURE, payload: payload };
}