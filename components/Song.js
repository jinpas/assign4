import { Text, FlatList, View, Image, StyleSheet, useRef, Pressable } from "react-native";
import { Images, Themes } from "../assets/Themes";
import millisToMinutesAndSeconds from "../utils/millisToMinutesAndSeconds"
import Ionicons from '@expo/vector-icons/Ionicons';
import { getCurrentTimeInSeconds } from "expo-auth-session/build/TokenRequest";

const Song = ({song, index, navigation}) => {

return (
    <View style={styles.songContainer} >
        <View style={styles.play}>
            <Pressable onPress={() => navigation.navigate("PreviewScreen", {previewurl: song.previewUrl} )}>
                <Ionicons name="play-circle" size={30} color={Themes.colors.spotify} />
            </Pressable>
        </View>

        <Pressable style={styles.songContainer} onPress={() => navigation.navigate("DetailsScreen", {externalUrl: song.externalUrl} )}>
            <Image style={styles.albumPicture} source={{uri: song.imageUrl }}></Image>
        
            <View style={styles.titleAndSinger}>
                <Text numberOfLines={1} style={{color: "white"}}> {song.songTitle} </Text>
                <Text numberOfLines={1} style={{color: "gray"}}> {song.songArtists.map(singers => singers.name).join(", ")} </Text>
            </View>

            <View style={styles.album}>
            <Text numberOfLines={1} style={{color: "white"}}> {song.albumName} </Text>
            </View>

            <View style={styles.duration}>
            <Text style={{color: "white"}}> {millisToMinutesAndSeconds(song.duration)} </Text>
            </View>
        </Pressable>
    </View>
    );
};

const styles = StyleSheet.create({
    play: {
        padding: 10,
        width: 55,
    },
    songContainer: {
        flexDirection: "row",
        alignItems: "center",
    },

    titleAndSinger: {
        padding: 8,
        width: 130,
        flexDirection: "column",
    },
    albumPicture: {
        width: 60,
        height: 60,
        margin: 10,
    },
    album: {
        width: 100,
    },
    duration: {
        width: 100,
        padding: 10,
    }
 })
 

export default Song;


// index 
// picture 
// songtitle // artist 
// album 
// duratiom 