import * as actionTypes from './actionTypes';

export const fetchAggregateDataSuccess = ( data ) => {
    return{
        type: actionTypes.FETCH_AGGREGATE_DATA_SUCCESS,
        data: data
    }
}

export const fetchAggregateData = () => {
    return dispatch => {
        fetch('https://api.covidtracking.com/v1/us/daily.json')
                .then(response=> response.json())
                .then(result=> {
                    console.log("result current>>>", result.slice(0, 10));
                    dispatch(fetchAggregateDataSuccess(result.slice(0, 10)));
                });       
    }
}

export const fetchCountryDataSuccess = (countryData) => {
    return{
        type: actionTypes.FETCH_COUNTRY_DATA_SUCCESS,
        data: countryData
    }
}

export const fetchCountryData = () => {
   return dispatch => {
    fetch('https://corona-api.com/countries')
        .then(response=>response.json())
        .then(result=> {
            dispatch(fetchCountryDataSuccess(result.data));
        });
   }
}



