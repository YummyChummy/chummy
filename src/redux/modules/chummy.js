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
    let retState = null

    switch (action.type){
        case RECIPE_FORM_CHANGED:
            retState = (action.isOpen)
                ? Object.assign({},state,{
                    recipeButtonEnabled: false,
                    recipeFormVisible: true
                })
                : Object.assign({}, state, {
                    recipeButtonEnabled: true,
                    recipeFormVisible: false
                })

        default:
            retState = state;
    }

    return retState
}