import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import tw from "twrnc";

function Header() {
  return (
    <View style={tw`flex-row gap-2 items-center`}>
      <Ionicons name="create" size={40} color="#5e92e6" />
      <Text style={tw`text-xl`}>Create Note</Text>
    </View>
  );
}

export default Header;
