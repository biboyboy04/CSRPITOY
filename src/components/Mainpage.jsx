// import { useState } from 'react'
import PropTypes from "prop-types"
import Fables from "./fables"
const Mainpage = ({ isOpen, story, viewStory }) => {
  return (
    <div className="background-image fade-in">
      <div className="aesop storyTitle">
         <h1>STORIES</h1>       
        <div className="image-grid">
          <Fables story={story} isOpen={isOpen} viewStory={viewStory} />
        </div>
      </div>
    </div>
  )
}

Mainpage.propTypes = {
  isOpen: PropTypes.func,
}

export default Mainpage

{
  /* <div className="image-container">
            <img src="/images/frog1.jpg" alt="Image 1" />
            <div className="overlay">
              <h2>The Frog & The Ox</h2>
              <a onClick={isOpen}>Read</a>
            </div>
          </div>
          <div className="image-container">
            <img src="/images/cat.jpg" alt="Image 2" />
            <div className="overlay">
              <h2>Belling the Cat</h2>
              <a onClick={isOpen}>Read</a>
            </div>
          </div>

          <div className="image-container">
            <img src="/images/tree.jpg" alt="Image 3" />
            <div className="overlay">
              <h2>The Plane Tree</h2>
              <a onClick={isOpen}>Read</a>
            </div>
          </div> */
}
