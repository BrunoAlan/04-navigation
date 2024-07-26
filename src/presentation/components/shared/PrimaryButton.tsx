import { Pressable, Text, View } from 'react-native';
import { globalStyles } from '../../../config/themes/themes';

interface Props {
  label: string;
  onPress?: () => void;
}

const PrimaryButton = ({ label, onPress }: Props) => {
  return (
    <Pressable
      onPress={() => onPress && onPress()}
      style={globalStyles.primaryButton}
    >
      <Text style={globalStyles.buttonText}>{label}</Text>
    </Pressable>
  );
};
export default PrimaryButton;
