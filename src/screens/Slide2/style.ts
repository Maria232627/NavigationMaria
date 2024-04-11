import { StyleSheet } from "react-native"
import { colors } from "../../styles/globalstyle"

export const styles = StyleSheet.create({
    main:{
        display:'flex',
        alignItems: 'center',
        justifyContent:'center',
        flex: 1
    },
    text:{
        fontSize: 40,
        color: '#000'
    },
    botao: {
        justifyContent: 'center',
        alignItems:'flex-end',
        flexDirection: 'row',
        padding: 20,

    },
    buttonSpace: {
        paddingHorizontal: 15,
    }
    
})