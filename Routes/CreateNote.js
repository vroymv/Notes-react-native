import React, { useState } from "react";
import { View, TextInput } from "react-native";
import tw from "twrnc";
import Addbutton from "../Components/CreateNote/Addbutton";
import { Notes } from "../Constants/Index";

export default function CreateNoteScreen({navigation}) {
  const [noteData, setNoteData] = useState({});
  // console.log(noteData);

  function SubmitNote(navigation) {
    noteData.formatedDate = new Date().toDateString();
    noteData.color = "#5e92e6";
    noteData.id = Notes.length + 1;
    Notes.push(noteData);
    navigation.navigate("Home");
  }
  
  return (
    <View style={tw`mt-2`}>
      <View
        style={tw`border-t-4 border-b-2 border-l-2 border-r-2  border-[#d6d2d2] h-15 rounded-t-lg`}
      >
        <TextInput
          style={tw`p-2 text-xl h-[100%] text-center`}
          placeholder="Title"
          onChangeText={(text) => {
            setNoteData({ ...noteData, title: text });
          }}
        />
      </View>
      <View style={tw`border h-10 border-[#d6d2d2]`}>
        <TextInput style={tw`p-2`} placeholder="Author"
        onChangeText={(text) => {
          setNoteData({ ...noteData, author: text });
        }}
         />
      </View>
      <View style={tw`border-2 h-50 border-[#d6d2d2]`}>
        <TextInput
          style={tw`p-2`}
          placeholder="Body"
          editable
          multiline
          numberOfLines={10}
          onChangeText={(text) => {
            setNoteData({ ...noteData, content: text });
          }}
        />
      </View>

      <View style={tw`items-end  mt-2 mr-2`}>
        <Addbutton navigation={navigation} Pressed={()=>SubmitNote(navigation)} />
      </View>
    </View>
  );
}
