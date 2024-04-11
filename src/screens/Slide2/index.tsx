import { ImageBackground, Text, Image, View } from "react-native";
import {styleContainer} from '../../styles/globalstyle';
import { styles } from "./style"

export function Slide2() {
    const slide = require('../../assets/BackgroundImage2.png')
    const logo = require('../../assets/pandalogo.png')
    return (
        <ImageBackground source={slide} style={styleContainer.container}>
                <View style={styles.main}>
                    <Image source={logo} ></Image>
                    <Text style={styles.text}>Coelho</Text>
                </View>

           
        </ImageBackground>
    )
}