import { Stack } from 'expo-router/stack';
import { globalColors } from '../../../src/config/themes/themes';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name='Products'
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: globalColors.primary,
          },
        }}
      />
    </Stack>
  );
}
