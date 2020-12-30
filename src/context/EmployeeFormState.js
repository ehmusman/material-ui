
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

        ],
        popup: false,
        editValues: []
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
    const setPopupTrue = (action) => {
        dispatch({
            type: action.type
        })
    }
    const setPopupFalse = (action) => {
        dispatch({
            type: action.type
        })
    }
    const setEditPopupTrue = (action) => {
        dispatch({
            type: action.type
        })
    }
    const setEditPopupFalse = (action) => {
        dispatch({
            type: action.type
        })
    }
    const editEmployee = (action) => {
        dispatch({
            type: action.type,
            payload: action.payload
        })
    }
    const updateEmployee = (action) => {
        dispatch({
            type: action.type,
            payload: action.payload
        })
    }

    return <EmployeeFormContext.Provider
        value={{
            initialValues: state.initialValues,
            popup: state.popup,
            addEmployee,
            deleteEmployee,
            editEmployee,
            updateEmployee,
            setPopupTrue,
            setPopupFalse,
            setEditPopupTrue,
            setEditPopupFalse
        }}>
        {props.children}
    </EmployeeFormContext.Provider>

}

export default FormState;