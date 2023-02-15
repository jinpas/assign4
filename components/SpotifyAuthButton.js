import { Pressable, Text, StyleSheet, Image } from "react-native";
import { Images, Themes } from "../assets/Themes";



const SpotifyAuthButton = ({authenticationFunction}) => {
    return (
    <Pressable style={styles.authButton} onPress={authenticationFunction} > 
          <Image source={Images.spotify} style={styles.logo}></Image>
          <Text style={styles.authText}> CONNECT WITH SPOTIFY</Text>
    </Pressable>
    );
}

const styles = StyleSheet.create({
    authButton: {
        backgroundColor: Themes.colors.spotify,
        padding: 12,
        borderRadius: 99999999,
        flexDirection: "row",
        alignItems: "center",
      },
      authText: {
        color: "white",
        fontSize: 15,
        fontWeight: 'bold',
      },
      logo: {
        width: 20,
        height:20,
      }
})

export default SpotifyAuthButton;