import React from 'react';
import { Pressable, View, Text } from 'react-native';
import tw from 'twrnc';

function Addbutton({ navigation, Pressed }) {
  return (
        <Pressable onPress={()=>Pressed(navigation)} style={tw`w-[100px] rounded-xl bg-[#5e92e6] p-2`}>
            <Text style={tw`text-xl text-white`}>Add Note</Text>
        </Pressable>
  )
}

export default Addbutton