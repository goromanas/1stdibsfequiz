import React from "react"

import LoadMoreButtonStyles from './load-more-button.module.scss';

const LoadMoreButton = (props) => {
  return (
    <>
      <button
        className={LoadMoreButtonStyles.button}
        onClick={() => props.handleLoadMore()}
      >
        Load More
      </button>
    </>
  )
}

export default LoadMoreButton