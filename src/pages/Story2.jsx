import StoryLayout from "../layout/StoryLayout";
import Loading from "../components/Loading";
import { useState, useEffect } from "react";
import EmotionPlaylist from "../components/SpotifyPlaylist";

// THIS CAN BE DYNAMIC DEPENDING ON WHERE TO GET THE CONTENT, PASS THROUGH THE ID AS A PROP TO GET THE RIGHT CONTENT, IF EVER.
const Story1 = () => {
  //loading screen
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <div className="story">
          <StoryLayout>
            <h1>Belling the Cat</h1>
            <p>
              The Mice once called a meeting to decide on a plan to free
              themselves of their enemy, the Cat. At least they wished to find
              some way of knowing when she was coming, so they might have time
              to run away. Indeed, something had to be done, for they lived in
              such constant fear of her claws that they hardly dared stir from
              their dens by night or day. Many plans were discussed, but none of
              them was thought good enough. At last a very young Mouse got up
              and said: "I have a plan that seems very simple, but I know it
              will be successful. All we have to do is to hang a bell about the
              Cat's neck. When we hear the bell ringing we will know immediately
              that our enemy is coming." All the Mice were much surprised that
              they had not thought of such a plan before. But in the midst of
              the rejoicing over their good fortune, an old Mouse arose and
              said: "I will say that the plan of the young Mouse is very good.
              But let me ask one question: Who will bell the Cat?
            </p>
          </StoryLayout>
          <EmotionPlaylist
            storyText={`The Mice once called a meeting to decide on a plan to free themselves of their enemy, the Cat. At least they wished to find some way of knowing when she was coming, so they might have time to run away. Indeed, something had to be done, for they lived in such constant fear of her claws that they hardly dared stir from their dens by night or day.

Many plans were discussed, but none of them was thought good enough. At last a very young Mouse got up and said:

"I have a plan that seems very simple, but I know it will be successful.

All we have to do is to hang a bell about the Cat's neck. When we hear the bell ringing we will know immediately that our enemy is coming."

All the Mice were much surprised that they had not thought of such a plan before. But in the midst of the rejoicing over their good fortune, an old Mouse arose and said:

"I will say that the plan of the young Mouse is very good. But let me ask one question: Who will bell the Cat?`}
          />
        </div>
      )}
    </div>
  );
};

export default Story1;
