import { View, FlatList } from "react-native";
import tw from "twrnc";
import { StatusBar } from "expo-status-bar";
import Search from "../Components/Search";
import Note from "../Components/Note";
import NewNote from "../Components/NewNote";
import { Notes } from "../Constants/Index";
import Filtermodal from "../Components/Filtermodal";
import Profilemodal from "../Components/Profilemodal";

export default function HomeScreen({ navigation }) {
  return (
    <>
      <View style={tw`flex-1`}>
        <View style={tw`items-center`}>
          <Search />
        </View>
        <View style={tw`items-center`}>
          {
            <FlatList
              data={Notes}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <Note
                  author={item.author}
                  color={item.color}
                  content={item.content}
                  date={item.formatedDate}
                  title={item.title}
                />
              )}
              numColumns={2}
              horizontal={false}
            />
          }
        </View>

        <NewNote navigation={navigation} />

        <StatusBar style="dark" />
      </View>
      <Filtermodal />
      <Profilemodal />
    </>
  );
}
