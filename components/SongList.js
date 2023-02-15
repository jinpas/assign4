import { Text, FlatList, View, Image, StyleSheet } from "react-native";
import images from "../assets/Images/images";
import { Images, Themes } from "../assets/Themes";
import Song from "./Song";


const SongList = ({tracks}) => {

    return (
    <View> 
        <View style={styles.header}>
            <Image source={Images.spotify} style={styles.logo}></Image>
                <Text style={styles.authText}> My Top Tracks </Text>
        </View>
            <FlatList 
            data={tracks}
            renderItem={({ item, index }) => {
            console.log(item);
            console.log(index);
                return (
                 <Song song={item} index={index}/>
                )
            }}
            keyExtractor={(item) => item.id}
            />
    </View>
   
    );
};



const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "center",
    },
    logo: {
        width: 20,
        height:20,
      },
    authText: {
        color: "white",
        fontSize: 15,
        fontWeight: 'bold',
      },
    albumPicture: {
        width: 20,
        height: 20,
    }
})

export default SongList;
