import { View, Text, FlatList } from 'react-native'
import RecintoItem from './RecintoItem';

const RecintoList = ({ recintos }) => {
    const renderItem = ({ item }) => {
        return  <RecintoItem recinto={item}/>
    };
return (
    <FlatList
        data={recintos}
        keyExtractor={(item)=> item.RUP}
        renderItem={renderItem}
    />
);
}
export default RecintoList