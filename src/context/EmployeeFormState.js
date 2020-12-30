
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
            },
            {
                id: 5, fullName: 'rashid', email: 'usman@gmail.com', mobile: '2345676545678', city: 'faisalabad'
            },
            {
                id: 6, fullName: 'hamza', email: 'ehsan@gmail.com', mobile: '2345676545678', city: 'faisalabad'
            },
            {
                id: 7, fullName: 'nawaz', email: 'ehsan@gmail.com', mobile: '2345676545678', city: 'faisalabad'
            },
            {
                id: 8, fullName: 'Umer', email: 'usman@gmail.com', mobile: '2345676545678', city: 'faisalabad'
            }

        ],
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
    const searchEmployee = (action) => {
        // console.log(action.payload)
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
            searchEmployee,
            setPopupTrue,
            setPopupFalse,
            setEditPopupTrue,
            setEditPopupFalse
        }}>
        {props.children}
    </EmployeeFormContext.Provider>

}

export default FormState;