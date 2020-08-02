import React from 'react'
import { Provider } from 'react-redux'
import store from '../store'

interface Props {
    children: React.ReactChild
}

export const Root: React.FC<Props> = ({ children }) => (
    <Provider store={store}>
        {children}
    </Provider>
)

export default Root