//action types
const RECIPE_FORM_CHANGED = 'RECIPE_FORM_CHANGED'


//actions
export function recipeFormChanged(isOpen) {
    return {
        type: RECIPE_FORM_CHANGED,
        isOpen
    }
}

const initialState = {
    recipeButtonEnabled: true,
    recipeFormVisible:false
}

//reducer
export default function chummyReducer(state = initialState, action){
    switch (action.type){
        case RECIPE_FORM_CHANGED:
            return (action.isOpen)
                ? Object.assign({}, state, {
                    recipeButtonEnabled: false,
                    recipeFormVisible: true
                })
                : Object.assign({}, state,  {
                    recipeButtonEnabled: true,
                    recipeFormVisible: false
                })

        default:
            return state
    }

}