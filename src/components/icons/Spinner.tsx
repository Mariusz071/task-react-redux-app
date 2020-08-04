import * as React from 'react'

const Icon: React.FC = () => (
  <svg width="24px" height="24px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
    <circle
      cx="50"
      cy="50"
      fill="none"
      stroke="currentColor"
      strokeWidth="10"
      r="36"
      strokeDasharray="169.64600329384882 58.548667764616276"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        calcMode="linear"
        values="0 50 50;360 50 50"
        keyTimes="0;1"
        dur="1s"
        begin="0s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
)

export default Icon
