import PropTypes from "prop-types"
const Read = ({onClick}) => {

  return (
      <>
          
      <button className="Readbtn" onClick={onClick}><span>READ</span></button>
      
      </>
      
  )
}


Read.propTypes = {
    onClick: PropTypes.func,
}
export default Read

