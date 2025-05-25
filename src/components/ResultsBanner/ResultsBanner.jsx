import React from 'react'
import './ResultsBanner.css'
function ResultsBanner({img}) {
  return (
    <div className="results-banner">
      <img src={img} alt="" />
    </div>
  )
}

export default ResultsBanner
