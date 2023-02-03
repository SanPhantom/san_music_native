import {
  ChevronLeftIcon,
  Flex,
  Heading,
  IconButton,
  useTheme,
} from 'native-base';
import React from 'react';
import { StyleSheet, useColorScheme } from 'react-native';

interface IAppTopNavigationProps {
  title: string;
  isBack?: boolean;
}

const AppTopNavigation = ({
  title,
  isBack = false,
}: IAppTopNavigationProps) => {
  const { colors } = useTheme();
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Flex
      direction={'row'}
      alignItems={'center'}
      justifyItems={'flex-start'}
      style={{ ...styles.topWrapper }}
      _dark={{ bg: colors.darkBlue[900] }}
      _light={{ bg: colors.white }}
      _text={{ color: isDarkMode ? colors.lightText : colors.darkText }}>
      {isBack && (
        <IconButton
          colorScheme={'lightText'}
          variant="ghost"
          icon={<ChevronLeftIcon />}
          _icon={{ color: isDarkMode ? 'lightText' : 'darkText' }}
          onPress={() => {
            console.log('hello');
          }}
        />
      )}
      <Heading size={'sm'}>{title}</Heading>
    </Flex>
  );
};

const styles = StyleSheet.create({
  topWrapper: {
    minHeight: 48,
    padding: 8,
  },
});

export default AppTopNavigation;
