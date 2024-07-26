import { View } from 'react-native';
import { globalStyles } from '../../../config/themes/themes';
import PrimaryButton from '../../components/shared/PrimaryButton';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  return (
    <View
      style={{
        ...globalStyles.container,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Link asChild push href={{ pathname: '/(product)' }}>
        <PrimaryButton label='Products' />
      </Link>
    </View>
  );
};

export default HomeScreen;
