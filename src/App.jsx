import { useState, useEffect } from "react";
import { useRef } from "react";
import Mainpage from "./components/Mainpage";
// import Navbar from './components/Navbar'
import StoryView from "./components/StoryView";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import TitleAnimation from "./components/TitleAnimation";
import Read from "./components/Read";
import Loading from "./components/Loading";
import BrandSlider from "./components/BrandSlider";
import Footer from "./components/footer";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStoryId, setSelectedStoryId] = useState(null);

  //loading screen
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const toggleModal = () => {
    setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
  };

  //for dynamic modal, get data from database. for now fixed values
  const [story, setStory] = useState([
    {
      id: 1,
      title: "The Frog & The Ox",
      author: "Aesop",
      imageUrl: "/images/frog1.jpg", // Add the image URL here
      desc: "In this fable, a small frog sees an ox and becomes envious of its large size and strength. The frog is so impressed by the ox that it desires to be just as big. It puffs itself up, trying to mimic the size of the ox, but ends up bursting in the process. The moral of the story warns against the dangers of envy and trying to be something we are not.",
    },
    {
      id: 2,
      title: "Belling the Cat",
      author: "Aesop",
      imageUrl: "/images/cat.jpg", // Add the image URL here
      desc: "This fable revolves around a group of mice who are troubled by a sneaky cat that hunts them. To solve the problem, they propose putting a bell around the cat's neck so they can hear it coming and escape in time. However, while the idea is good, none of the mice volunteer to actually carry out the plan, as it requires getting close to the dangerous cat. The moral of the story highlights the importance of practicality and the need for someone to take action, not just come up with ideas.",
    },
    {
      id: 3,
      title: "The Plane Tree",
      author: "Aesop",
      imageUrl: "/images/tree.jpg", // Add the image URL here
      desc: "In this fable, a young tree, the Plane Tree, is unhappy with its appearance and wishes to look like other trees, such as the Pine and the Palm. It constantly complains and asks the gods to change its form. The gods respond by transforming the Plane Tree into various shapes, but none of them satisfy the tree. Eventually, the Plane Tree asks to return to its original form, realizing that being content with what it naturally is, is the best way to be. The moral of the story teaches the value of self-acceptance and the futility of constant longing for something different.",
    },
  ]);

  const viewStory = (id) => {
    setSelectedStoryId(id);
  };
  const ref = useRef();

  const handleButton = () => {
    ref.current.scrollTo(1);
  };

  return (
    <div>
      {/* <Navbar />  diabled for now*/}
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <Parallax pages={2.46} className="animation" ref={ref}>
          <ParallaxLayer
            offset={0}
            speed={0.5}
            style={{
              backgroundImage: `linear-gradient(to bottom, #87ceeb, #b0e0e6, #f0f8ff)`,
            }}
          ></ParallaxLayer>

          <ParallaxLayer sticky={{ start: 0, end: 0.15 }} speed={0.25}>
            <div className="animation_layer parallax">
              <div className="aesop">
                <TitleAnimation />
                <Read onClick={handleButton} />
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.2}>
            <div className="animation_layer parallax" id="mnt1"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.15}>
            <div className="animation_layer parallax" id="mnt2"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.2}>
            <div className="animation_layer parallax" id="back"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.3}>
            <div className="animation_layer parallax" id="grassland"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.35}>
            <div className="animation_layer parallax" id="tree2r"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.35}>
            <div className="animation_layer parallax" id="tree2-2l"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.3}>
            <div className="animation_layer parallax" id="grass"></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.7}>
            <div className="animation_layer parallax" id="sun"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={1.05}>
            <div className="animation_layer parallax" id="clouds"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.38}>
            <div className="animation_layer parallax" id="tree1"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.38}>
            <div className="animation_layer parallax" id="tree1-2r"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.3}>
            <div className="animation_layer parallax" id="grass2l"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.3}>
            <div className="animation_layer parallax" id="grass2r"></div>
          </ParallaxLayer>
          {/* middle part or space between the pages*/}
          <div
            style={{
              backgroundImage: `linear-gradient(to top, #325e0a, #325e0a, #162b04)`,
              height: `200vh`,
              zIndex: 1,
            }}
          ></div>

          <ParallaxLayer
            offset={1}
            factor={1.7}
            speed={0.5}
            className="backgroundParallax"
          >
            <Mainpage
              isOpen={toggleModal}
              story={story}
              viewStory={viewStory}
            />
            <BrandSlider />
            <Footer />
            {isModalOpen && (
              <StoryView
                isClose={toggleModal}
                id={selectedStoryId}
                story={story}
              />
            )}
          </ParallaxLayer>
        </Parallax>
      )}
    </div>
  );
}

export default App;
