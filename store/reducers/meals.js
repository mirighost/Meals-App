import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVORITE } from '../actions/meals';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            const existingIndex = state.favoriteMeals.findIndex(
                (meal) => meal.id === action.mealId,
            );
            if (existingIndex >= 0) {
                const udpatedFavMeals = [...state.favoriteMeals];
                udpatedFavMeals.splice(existingIndex, 1); //removing from favorites

                return { ...state, favoriteMeals: udpatedFavMeals };
            } else {
                const meal = state.meals.find(
                    (meal) => meal.id === action.mealId,
                ); //finding meal to add to favorites

                return {
                    ...state,
                    favoriteMeals: state.favoriteMeals.concat(meal),
                };
            }

        default:
            return state;
    }
};

export default mealsReducer;
