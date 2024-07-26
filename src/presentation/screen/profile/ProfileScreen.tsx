import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const ProfileScreen = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        marginTop: top,
      }}
    >
      <Text>ProfileScreen</Text>
    </View>
  );
};
export default ProfileScreen;
const styles = StyleSheet.create({});
