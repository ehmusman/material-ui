
const EmployeeFormReducer = (state, action) => {
    switch (action.type) {
        case "ADD_EMPLOYEE":
            return {
                ...state,
                initialValues: [...state.initialValues, action.payload]
            }
        default:
            return state
    }
}

export default EmployeeFormReducer;