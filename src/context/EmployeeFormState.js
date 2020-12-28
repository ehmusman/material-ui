
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
                id: 5, fullName: 'Ehsan', email: 'ehsan@gmail.com', mobile: '2345676545678', city: 'faisalabad'
            },
            {
                id: 6, fullName: 'ehsan', email: 'ehsan@gmail.com', mobile: '2345676545678', city: 'faisalabad'
            },
            {
                id: 7, fullName: 'Usman', email: 'usman@gmail.com', mobile: '2345676545678', city: 'faisalabad'
            },
            {
                id: 8, fullName: 'Ehsan', email: 'ehsan@gmail.com', mobile: '2345676545678', city: 'faisalabad'
            },
            {
                id: 9, fullName: 'ehsan', email: 'ehsan@gmail.com', mobile: '2345676545678', city: 'faisalabad'
            },
            {
                id: 10, fullName: 'Usman', email: 'usman@gmail.com', mobile: '2345676545678', city: 'faisalabad'
            },
            {
                id: 11, fullName: 'Ehsan', email: 'ehsan@gmail.com', mobile: '2345676545678', city: 'faisalabad'
            },
            {
                id: 12, fullName: 'ehsan', email: 'ehsan@gmail.com', mobile: '2345676545678', city: 'faisalabad'
            },
            {
                id: 13, fullName: 'Usman', email: 'usman@gmail.com', mobile: '2345676545678', city: 'faisalabad'
            },
            {
                id: 14, fullName: 'Ehsan', email: 'ehsan@gmail.com', mobile: '2345676545678', city: 'faisalabad'
            },
            {
                id: 15, fullName: 'ehsan', email: 'ehsan@gmail.com', mobile: '2345676545678', city: 'faisalabad'
            },
            {
                id: 16, fullName: 'Usman', email: 'usman@gmail.com', mobile: '2345676545678', city: 'faisalabad'
            },
            {
                id: 17, fullName: 'Ehsan', email: 'ehsan@gmail.com', mobile: '2345676545678', city: 'faisalabad'
            },
            {
                id: 18, fullName: 'ehsan', email: 'ehsan@gmail.com', mobile: '2345676545678', city: 'faisalabad'
            }
        ]
    }

    const [state] = useReducer(EmployeeFormReducer, initialState)


    return <EmployeeFormContext.Provider
        value={{
            initialValues: state.initialValues,
        }}>
        {props.children}
    </EmployeeFormContext.Provider>

}

export default FormState;