import {Pressable, Image} from "react-native";
import { useState } from "react";

export default function Profile({Pressed}) {
  const [profileModalVis, setprofileModalVis] = useState(false);

  function activateModal() {
    setprofileModalVis(!profileModalVis);
    Pressed(profileModalVis);
  }

    return (
      <Pressable
        onPress={activateModal}
      >
        <Image
          style={{ width: 40, height: 40 }}
          source={require("../assets/user.png")}
        />
      </Pressable>
    );
  }