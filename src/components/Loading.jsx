
import ClipLoader from "react-spinners/PacmanLoader"

const Loading = ({loading}) => {


    
  return (
    <div className="loading">
      <ClipLoader color={"#6c14d2"} loading={loading} size={60} />
    </div>
  )
}

export default Loading
