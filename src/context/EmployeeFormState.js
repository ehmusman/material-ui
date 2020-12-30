
import React, { useReducer } from 'react';
import EmployeeFormContext from './employeeFormContext';
import EmployeeFormReducer from './employeeFormReducer'

const FormState = (props) => {
    const initialState = {
        initialValues: [],
        popup: false,
        editPopup: false,
        editValues: null
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
    const clearEditValues = (action) => {
        dispatch({
            type: action.type
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
            editPopup: state.editPopup,
            editValues: state.editValues,
            addEmployee,
            deleteEmployee,
            editEmployee,
            clearEditValues,
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