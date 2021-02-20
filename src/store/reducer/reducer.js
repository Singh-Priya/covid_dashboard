import * as actionTypes from '../action/actionTypes';

const initialState = {
    totalData: [],
    countryData: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_AGGREGATE_DATA_SUCCESS:
            return{
                ...state,
                totalData: action.data,
            };
        case actionTypes.FETCH_COUNTRY_DATA_SUCCESS:
            const updatedCountryData=[];
            for(let i in action.data){
                updatedCountryData.push({
                    name: action.data[i].name,
                    totalCases: action.data[i].latest_data.confirmed,
                    recoveredCases: action.data[i].latest_data.recovered,
                    flagURL: 'https://www.countryflags.io/' + action.data[i].code + '/flat/32.png',
                    coordinates: action.data[i].coordinates,
                    code: action.data[i].code
                })
            }
            return{
                ...state,
                countryData: updatedCountryData
            }
        default:
            return state;
    }
}

export default reducer;