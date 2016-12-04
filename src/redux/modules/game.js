import { Map, List } from 'immutable';

// Constants

const INIT_LOCATIONS = 'game/INIT_LOCATIONS';
export const CHANGE_LOCATION = 'game/CHANGE_LOCATION';

const PICKUP_ITEM = 'game/PICKUP_ITEM';

const ADD_MESSAGE = 'game/ADD_MESSAGE';


// Action Creators

export function initLocations(locations) {
    return { type: INIT_LOCATIONS, locations };
}

export function changeLocation(location) {
    return { type: CHANGE_LOCATION, location };
}

export function pickupItem(item) {
    return { type: PICKUP_ITEM, item };
}

export function addMessage(text) {
    return { type: ADD_MESSAGE, text };
}

// Reducer
export const defaultState = Map({
    inventory: List([]),
    currentLocation: Map({}),
    messages: List(['Hello!']),
    locations: List([])
});

export default function(state = defaultState, action) {
    switch (action.type) {
        case INIT_LOCATIONS:
            return state.set('locations', action.locations);
        case CHANGE_LOCATION:
            const location = state.get('locations').find(l => {
                return l.get('id') === action.location
            });
            state = state.update('locations', locations => {
                return locations.map(l => {
                    if(l.get('id') === state.get('currentLocation').get('id'))
                        return state.get('currentLocation');
                    else
                        return l;
                });
            });
            state = state.updateIn(['messages'], m => {
                return m.push(location.get('introduction'))
            });
            return state.set('currentLocation', location);
        case PICKUP_ITEM:
            state = state.updateIn(['currentLocation', 'items'], items => {
                return items.filter(i => i.get('id') !== action.item.get('id'))
            });
            return state.update('inventory', i => i.push(action.item));
        case ADD_MESSAGE:
            return state.updateIn(['messages'], m => m.push(action.text));
        default:
            return state;
    }
}
