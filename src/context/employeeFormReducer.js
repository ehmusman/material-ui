
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
        case 'CLEAR_EDIT_EMPLOYEE':
            return {
                ...state,
                editValues: null
            }
        case "EDIT_EMPLOYEE":
            return {
                ...state,
                editValues: action.payload
            };
        case 'UPDATE_EMPLOYEE':
            return {
                ...state,
                initialValues: state.initialValues.map(employee => employee.id === action.payload.id ? (employee = action.payload) : employee)
            }

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
                editPopup: true
            }
        case 'EDIT_POPUP_FALSE':
            return {
                ...state,
                editPopup: false
            }
        default:
            return state
    }
}

export default EmployeeFormReducer;