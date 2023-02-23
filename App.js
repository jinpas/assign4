import SongList from "./components/SongList";
import SpotifyAuthButton from "./components/SpotifyAuthButton";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import DetailsScreen from "./screens/DetailsScreen";
import PreviewScreen from "./screens/PreviewScreen";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer> 
        <Stack.Navigator>
        <Stack.Screen name="HomeScreen" options={{headerShown: false}}
          component={HomeScreen}/>
        <Stack.Screen name="DetailsScreen" 
         options={
          { headerStyle: {
            backgroundColor: 'black'},
            headerTintColor: '#fff',
            title: "Track Page",
            headerBackTitle: "Back",
          }
        }
        component={DetailsScreen}/>

        <Stack.Screen name="PreviewScreen"         
        options = {
          { headerStyle: {
            backgroundColor: 'black'},
            headerTintColor: '#fff',
            title: "Track Preview",
            headerBackTitle: "Back",
          } 
        }
        component={PreviewScreen}/>
        </Stack.Navigator>
   </NavigationContainer>
  );
  }
