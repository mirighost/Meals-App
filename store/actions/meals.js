export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

export const togglFavorite = (id) => {
    return {
        type: TOGGLE_FAVORITE,
        mealId: id,
    };
};
