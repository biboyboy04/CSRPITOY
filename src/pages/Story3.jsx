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
            <h1>The Plane Tree</h1>
            <p>
              Two Travellers, walking in the noonday sun, sought the shade of a
              widespreading tree to rest. As they lay looking up among the
              pleasant leaves, they saw that it was a Plane Tree. "How useless
              is the Plane!" said one of them. "It bears no fruit whatever, and
              only serves to litter the ground with leaves." "Ungrateful
              creatures!" said a voice from the Plane Tree. "You lie here in my
              cooling shade, and yet you say I am useless! Thus ungratefully, O
              Jupiter, do men receive their blessings!"
            </p>
          </StoryLayout>
          <EmotionPlaylist
            storyText={`Two Travellers, walking in the noonday sun, sought the shade of a
            widespreading tree to rest. As they lay looking up among the
            pleasant leaves, they saw that it was a Plane Tree. "How useless is
            the Plane!" said one of them. "It bears no fruit whatever, and only
            serves to litter the ground with leaves." "Ungrateful creatures!"
            said a voice from the Plane Tree. "You lie here in my cooling shade,
            and yet you say I am useless! Thus ungratefully, O Jupiter, do men
            receive their blessings!"`}
          />
        </div>
      )}
    </div>
  );
};

export default Story1;
