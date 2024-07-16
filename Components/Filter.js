import React, { useState } from "react";
import { Pressable, Modal } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Filter({ sendModalVisible }) {
  const [modalVisibility, setmodalVisibility] = useState(false);

  function turnOnModalVisibility(params) {
    setmodalVisibility(!modalVisibility);
    sendModalVisible(modalVisibility);
  }

  // console.log(modalVisibility);

  return (
    <Pressable onPress={turnOnModalVisibility}>
      <Ionicons name="filter-circle" size={40} color="black" />
    </Pressable>
  );
}
