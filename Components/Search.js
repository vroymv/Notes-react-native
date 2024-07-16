import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import tw from "twrnc";

export default function Search() {
  const [text, setText] = useState("");
  return (
    <View style={tw`mt-10px`}>
      <TextInput
        style={tw`h-[50px] border-2 border-[#c9c7c7] w-[300px] rounded-2xl p-[10px]`}
        placeholder="Search..."
        onChangeText={(newText) => setText(newText)}
        value={text}
        enablesReturnKeyAutomatically
        enterKeyHint = "search"
        inutMode = "search"
      />
    </View>
  );
}
