import { useTheme } from 'native-base';
import { useColorScheme } from 'react-native';

const useColorSelector: Record<string, any> = () => {
  const { colors } = useTheme();
  const isSystemDarkMode = useColorScheme() === 'dark';

  return {
    layoutBgColor: {},
  };
};

export default useColorSelector;
