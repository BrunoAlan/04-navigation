import { StyleSheet } from 'react-native';
import ProductScreen from '../../../src/presentation/screen/products/ProductScreen';
import { useLocalSearchParams } from 'expo-router';

const productDetails = () => {
  const { id, name } = useLocalSearchParams();
  return <ProductScreen id={`${id}`} name={`${name}`} />;
};
export default productDetails;
const styles = StyleSheet.create({});
