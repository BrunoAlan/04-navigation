import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../../config/themes/themes';
import { Link, useRouter } from 'expo-router';
import PrimaryButton from '../../components/shared/PrimaryButton';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const SettingsScreen = () => {
  const router = useRouter();
  const { top } = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        marginTop: top,
      }}
    >
      <PrimaryButton label='Go Back' onPress={() => router.back()} />
      <Link asChild href={'/'}>
        <PrimaryButton label='Home' />
      </Link>
    </View>
  );
};
export default SettingsScreen;
