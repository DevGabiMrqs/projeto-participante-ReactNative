import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#131016',
      padding: 24,
    },
    eventName: {
      color:'#fff',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 48,
    },
    eventDate: {
      color:'#6b6b6b',
      fontSize: 14,
    },
    input: {
      flex:1,
      backgroundColor: '#1F1E25',
      height: 56,
      borderRadius: 10,
      color: '#fff',
      padding: 15,
      fontSize: 15,
      marginRight: 10,
    },
    buttonText: {
      color: '#fff',
      fontSyze: 24,
    },
    button: {
      width: 56,
      height: 56,
      backgroundColor: '#318F67',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },
    form: {
      width: '100%',
      flexDirection: 'row',
      marginTop: 20,
      marginBottom: 40,
    },
    listEmptyText: {
      color:'#fff',
      fontSize: 14,
      
    }
  });