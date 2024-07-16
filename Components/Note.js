import React from "react";
import { Text, View, Dimensions } from "react-native";
import tw from "twrnc";

export default function Note({ title, content, date, author, color}) {

    return (
    <View style={tw`w-[185px] h-[200px] border-2 border-[#d6d2d2] rounded-xl p-[10px] mt-[10px] bg-[${color}] mx-[2px]`}>
      <Text style={tw` text-white`}>{author}</Text>
      <Text style={tw`text-right text-white`}>{date}</Text>
      <Text style={tw`text-center text-white text-xl font-bold`}>{title}</Text>
      <Text style={tw` px-[5px] text-white`}>{content}</Text>
    </View>
  );
}
