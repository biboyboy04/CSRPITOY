import { FaTimes } from "react-icons/fa"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const StoryView = ({ isClose, id, story }) => {
  // Find the correct story based on the provided id
  const selectedStory = story.find((item) => item.id === id)
  const { title, author, imageUrl, desc } = selectedStory
  // Log the selectedStory object to the console
  const selectedStoryIdString = selectedStory.id.toString()

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <FaTimes className="close" onClick={isClose} />
        </div>
        <div className="modal-body">
          <div className="storyProfile">
            <img src={imageUrl} alt="" />
            <h3>{title}</h3>
            <h4>{author}</h4>
          </div>

          <div className="storyDescription">
            <h4>Description:</h4>
            <p>{desc}</p>
          </div>
          <div className="startButton">
            <Link to={selectedStoryIdString}>
              <button>START READING</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

StoryView.propTypes = {
  isClose: PropTypes.func,
}
export default StoryView

// <div className="musicRecommender">
//                             <h3>Music Recommendation:</h3>
//                             {/* CHANGE IMAGE TO ACTUAL COVER OF SONG, THIS IS ONLY SAMPLE */}
//                             <div className="musicContainer">
//                                 {/* the box for the muisic */}
//                                 <div>
//                                     <img src="/images/pfp.jpg"></img>
//                                 </div>
//                                 <div className="musicProfileParent">
//                                     <h6>Ang frog ay cow</h6>
//                                     <h6>Genre: sadboi</h6>
//                                 </div>

//                             </div>
//                             <div className="musicContainer">
//                                 {/* the box for the muisic */}
//                                 <div>
//                                     <img src="/images/pfp.jpg"></img>
//                                 </div>
//                                 <div className="musicProfileParent">
//                                     <h6>Tinurbo ni otit</h6>
//                                     <h6>Genre: awts</h6>
//                                 </div>

//                             </div>
//                             <div className="musicContainer">
//                                 {/* the box for the muisic */}
//                                 <div>
//                                     <img src="/images/pfp.jpg"></img>
//                                 </div>
//                                 <div className="musicProfileParent">
//                                     <h6>Halaman ay dahon</h6>
//                                     <h6>Genre: vegetarian</h6>
//                                 </div>

//                             </div>
//                         </div>
