import { StyleSheet,Dimensions} from "react-native";
import { theme } from "../../global/theme";


export const style = StyleSheet.create({
    boxInput:{
        width:'100%',
        height:40,
        borderWidth:1,
        borderRadius:40,
        borderColor:theme.colors.primary,
        backgroundColor:theme.colors.bgScreen,
        marginTop:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        // paddingHorizontal:20
    },
    input:{
        // backgroundColor:'red',
        height:'100%',
        width:'100%',
        borderRadius:40,
        // paddingHorizontal:20
    },
    titleInput:{
        marginLeft:5,
        color:theme.colors.primary,
        marginTop:20
    },
    Button:{
        width:'10%',
    },
    Icon:{
        width:'100%',
    }
    
})