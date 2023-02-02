import { Text, useTheme } from 'native-base';
import React from 'react';
import { useColorScheme } from 'react-native';
import AppLayout from '../components/common/AppLayout';
import AppTopNavigation from '../components/common/AppTopNavigation';

function HomeScreen(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const { colors } = useTheme();
  return (
    <AppLayout
      statusTranslucent
      headerBgColor={isDarkMode ? colors.darkBlue[900] : colors.white}
      header={<AppTopNavigation />}>
      <Text
        _dark={{ color: colors.lightText }}
        _light={{ color: colors.darkText }}>
        Home Screen
      </Text>
    </AppLayout>
  );
}

export default HomeScreen;
