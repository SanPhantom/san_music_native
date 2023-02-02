import { Flex, Text, useTheme } from 'native-base';
import React from 'react';
import { StyleSheet, useColorScheme } from 'react-native';

const AppTopNavigation = () => {
  const { colors } = useTheme();
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Flex
      direction={'row'}
      alignItems={'center'}
      style={{ ...styles.topWrapper }}
      _dark={{ bg: colors.darkBlue[900] }}
      _light={{ bg: colors.white }}
      _text={{ color: isDarkMode ? colors.lightText : colors.darkText }}>
      <Text>Home</Text>
    </Flex>
  );
};

const styles = StyleSheet.create({
  topWrapper: {
    minHeight: 56,
    padding: 8,
  },
});

export default AppTopNavigation;
