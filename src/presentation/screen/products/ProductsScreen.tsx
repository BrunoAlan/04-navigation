import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import PrimaryButton from '../../components/shared/PrimaryButton';
import { globalStyles } from '../../../config/themes/themes';
import { Link, Stack, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const products = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
  { id: 3, name: 'Product 3' },
  { id: 4, name: 'Product 4' },
  { id: 5, name: 'Product 5' },
  { id: 6, name: 'Product 6' },
];
const ProductsScreen = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={{ marginBottom: 30, fontSize: 30 }}>Products</Text>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <Link
            key={item.id}
            asChild
            href={{
              pathname: `/products/${item.id}`,
              params: { name: item.name },
            }}
          >
            <PrimaryButton label={item.name} />
          </Link>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <Text style={{ marginBottom: 10, fontSize: 30 }}>Ajustes</Text>
      <Link asChild href={{ pathname: '/settings' }}>
        <PrimaryButton label='Ajustes' />
      </Link>
    </View>
  );
};
export default ProductsScreen;
const styles = StyleSheet.create({});
