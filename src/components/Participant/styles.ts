import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#1F1E25',
        flexDirection: 'row',
        borderRadius: 10,
        alignItems: 'center', 
        marginBottom: 20    
    },
    name: {
        flex: 1,
        fontSize: 16,
        color: '#fff',
        marginLeft: 10
    },
    buttonText: {
        color: '#fff',
        fontSyze: 24,
    },
    button: {
        width: 56,
        height: 56,
        backgroundColor: '#E23C44',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
})