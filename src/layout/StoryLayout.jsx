import BackBtn from "./BackBtn"

const StoryLayout = ({ children }) => {
  return (
      <div className="storyLayout">
          <BackBtn/>
          <div className="storyContent">
              
              {children}
          </div>
        
    </div>
  )
}

export default StoryLayout
