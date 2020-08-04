import * as React from 'react'
import SpinnerIcon from 'components/icons/Spinner'

import './Loading.scss'

export const Loading: React.FC = () => (
  <div className="loading">
    <h3>Loading</h3>
    <SpinnerIcon />
  </div>
)
