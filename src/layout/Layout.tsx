import React from 'react'
import './Layout.scss'

interface Props {
    children: React.ReactChild
}

const Layout: React.FC<Props> = ({ children }) => <div className="layout">{children}</div>

export default Layout
