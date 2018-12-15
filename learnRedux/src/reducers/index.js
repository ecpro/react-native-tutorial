import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectReducer from './SelectReducer';

export default combineReducers({
    libraries: LibraryReducer, //reducer will set the data to libraries key in store's state object
    selectedLibraryId: SelectReducer 
});
