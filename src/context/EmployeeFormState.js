
import React, { useReducer } from 'react';
import EmployeeFormContext from './employeeFormContext';
import EmployeeFormReducer from './employeeFormReducer'

const FormState = (props) => {
    const initialState = {
        initialValues: [
            {
                id: 1, fullName: 'Usman', email: 'usman@gmail.com', mobile: '2345676545678', city: 'faisalabad'
            },
            {
                id: 2, fullName: 'Ehsan', email: 'ehsan@gmail.com', mobile: '2345676545678', city: 'faisalabad'
            },
            {
                id: 3, fullName: 'ehsan', email: 'ehsan@gmail.com', mobile: '2345676545678', city: 'faisalabad'
            },
            {
                id: 4, fullName: 'Usman', email: 'usman@gmail.com', mobile: '2345676545678', city: 'faisalabad'
            }

        ]
    }

    const [state, dispatch] = useReducer(EmployeeFormReducer, initialState)
    const addEmployee = (action) => {
        dispatch({
            type: action.type,
            payload: action.payload
        })
    }

    const deleteEmployee = (action) => {
        dispatch({
            type: action.type,
            payload: action.payload
        })
    }

    return <EmployeeFormContext.Provider
        value={{
            initialValues: state.initialValues,
            addEmployee,
            deleteEmployee
        }}>
        {props.children}
    </EmployeeFormContext.Provider>

}

export default FormState;