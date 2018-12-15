/*this method is a action creator which returns a action object 
whose payload depends on the libraryId passed */
export const selectLibrary = (libraryId) => {
    return {
        type: 'select_library',
        payload: libraryId
    };
};
