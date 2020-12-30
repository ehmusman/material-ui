
const EmployeeFormReducer = (state, action) => {
    switch (action.type) {
        case "ADD_EMPLOYEE":
            return {
                ...state,
                initialValues: [...state.initialValues, action.payload]
            };
        case "DELETE_EMPLOYEE":
            return {
                ...state,
                initialValues: state.initialValues.filter(employee => employee.id !== action.payload)
            };
        case "EDIT_EMPLOYEE":
            return {
                ...state,
                editValues: action.payload
            };
        case 'POPUP_TRUE':
            return {
                ...state,
                popup: true
            }
        case 'POPUP_FALSE':
            return {
                ...state,
                popup: false
            }
        case 'EDIT_POPUP_TRUE':
            return {
                ...state,
                popup: true
            }
        case 'EDIT_POPUP_FALSE':
            return {
                ...state,
                popup: false
            }
        default:
            return state
    }
}

export default EmployeeFormReducer;