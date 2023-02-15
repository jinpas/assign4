import { Text, FlatList, View, Image, StyleSheet, useRef } from "react-native";
import { Images, Themes } from "../assets/Themes";
import millisToMinutesAndSeconds from "../utils/millisToMinutesAndSeconds"


const Song = ({song, index}) => {

return (
    <View style={styles.songContainer} >
        <View style={styles.index} >
            <Text style={{color: "gray"}}> {index + 1} </Text>

        </View>
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
    </View>
    );
};

const styles = StyleSheet.create({
    index: {
        padding: 15,
        width: 50,
    },
    songContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    titleAndSinger: {
        padding: 10,
        width: 130,
        flexDirection: "column",
    },
    albumPicture: {
        width: 60,
        height: 60,
        margin:10,
    },
    album: {
        width: 110,
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