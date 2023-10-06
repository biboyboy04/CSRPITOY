import Sfable from './fable'
const fables = ( {story, isOpen, viewStory}) => {
  return (
    <>
          {story.map((story) => (
              <Sfable key={story.id} fable={story} isOpen={isOpen} viewStory={viewStory } />
      ))}
    </>
  )
}

export default fables
