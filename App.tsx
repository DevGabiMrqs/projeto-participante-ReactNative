import { StatusBar } from 'react-native';
import { Participant } from './src/components/Participant';
import Home from './src/screens/Home'

export default function App(){
    return (
        <>
        <StatusBar 
        barStyle="light-content"/>
        <Home />
        </>
    );
}
