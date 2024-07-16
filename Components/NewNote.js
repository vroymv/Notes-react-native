import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import tw from 'twrnc';


export default function NewNote({navigation}) {

  return (
    <Pressable style={tw`border-2 w-[80px] h-[80px] rounded-[80px] items-center justify-center bg-white absolute top-[600px] left-[290px]`}
      onPress={()=>{navigation.navigate('Createnote')}}
    >
        <Entypo name="plus" size={24} color="black" />
    </Pressable>
  )
}
