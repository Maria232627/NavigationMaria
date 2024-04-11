import { ImageBackground,TouchableOpacity, Text, Image, View } from "react-native";
import {styleContainer} from '../../styles/globalstyle';
import { styles } from "./style"
import { MenuStackTypes } from "../../navigation/MenuStack.navigation";

export function Slide1({navigation}: MenuStackTypes) {
    const slide = require('../../assets/BackgroundImage.png')
    const logo = require('../../assets/coelhologo.png')
    return (
        <ImageBackground source={slide} style={styleContainer.container}>
                <View style={styles.main}>
                    <Image source={logo} ></Image>
                    <Text style={styles.text}>Coelho</Text>
                </View>
                <View style={styles.botao}>
                <View style={styles.buttonSpace}>
                   <TouchableOpacity style={styles.botao}
                   onPress={() => navigation.push("Slide2")}
                    >
                    <Text>Próxima -></Text>
                   </TouchableOpacity>
                </View>
                <View style={styles.buttonSpace}>
                   
                </View>
            </View>
        </ImageBackground>
    )
}