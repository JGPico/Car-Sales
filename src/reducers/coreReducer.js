
import { TEMP_CASE, ADD_FEATURE, REMOVE_FEATURE } from '../actions/coreActions';

export const initialState = 
    {
        additionalPrice: 0,
        car: {
          price: 26395,
          name: '2019 Ford Mustang',
          image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
          features: []
        },
        additionalFeatures: [
          { id: 1, name: 'V-6 engine', price: 1500 },
          { id: 2, name: 'Racing detail package', price: 1500 },
          { id: 3, name: 'Premium sound system', price: 500 },
          { id: 4, name: 'Rear spoiler', price: 250 }
        ]
      };

export const coreReducer = (state = initialState, action) => {
    console.log("This is the action",action);
    switch (action.type) {
        case TEMP_CASE:
            return {
                ...state,

            }
        case ADD_FEATURE:
          //const addFeatureBit = state.additonalFeatures.find(el => el.id === action.payload);
          //console.log("ADD_FEATURE fn", addFeatureBit);
          return {
            ...state,
            car: {
              ...state.car,
              features: [...state.car.features, action.payload]
            },
            additionalPrice: state.additionalPrice + action.payload.price
          }
          case REMOVE_FEATURE:
            console.log("Remove Feature Case ",state.car.features);
            console.log("Remove Feature payload ", action.payload);
            console.log("Features array length ", state.car.features.length)
            return {
              ...state,
              car: {
                ...state.car,
                features: 
                  state.car.features.filter(item => item.id !== action.payload.id)
              },
              additionalPrice: state.additionalPrice - action.payload.price
            }    
        default:
            return state;
    }
          
}