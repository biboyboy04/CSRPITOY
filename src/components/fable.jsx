const fable = ({ fable, isOpen, viewStory }) => {
  const handler = () => {
    viewStory(fable.id)
    isOpen()
  }

  return (
    <div className="image-container">
      <img src={fable.imageUrl} alt="Image 1" />
      <div className="overlay">
        <h2>{fable.title}</h2>
        <a onClick={handler}>Read</a>
      </div>
    </div>
  )
}

export default fable
