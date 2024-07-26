import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../../config/themes/themes';
import { Stack } from 'expo-router';

interface Props {
  id: string;
  name: string;
}

const ProductScreen = ({ id, name }: Props) => {
  return (
    <View style={globalStyles.container}>
      <Stack.Screen
        options={{
          headerTitle: '',
        }}
      />
      <Text>Producto</Text>
      <Text>{id}</Text>
      <Text>{name}</Text>
    </View>
  );
};
export default ProductScreen;
const styles = StyleSheet.create({});
