import { Heading, Icon, useTheme } from 'native-base';
import React from 'react';
import { useColorScheme } from 'react-native';
import AppLayout from '../components/common/AppLayout';
import AppTopNavigation from '../components/common/AppTopNavigation';
import AntDesign from 'react-native-vector-icons/AntDesign';

function HomeScreen(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const { colors } = useTheme();
  return (
    <AppLayout
      statusTranslucent
      headerBgColor={isDarkMode ? colors.darkBlue[900] : colors.white}
      header={<AppTopNavigation title={'Home Title'} isBack />}>
      <Heading>Home Screen page as</Heading>
      <Icon
        as={AntDesign}
        name="android1"
        color="coolGray.800"
        _dark={{ color: colors.lightText }}
        _light={{ color: colors.darkText }}
      />
      <Heading>Home Screen page as</Heading>
      <Icon
        as={AntDesign}
        name="android1"
        color="coolGray.800"
        _dark={{ color: colors.lightText }}
        _light={{ color: colors.darkText }}
      />
      <Heading>Home Screen page as</Heading>
      <Icon
        as={AntDesign}
        name="android1"
        color="coolGray.800"
        _dark={{ color: colors.lightText }}
        _light={{ color: colors.darkText }}
      />
      <Heading>Home Screen page as</Heading>
      <Icon
        as={AntDesign}
        name="android1"
        color="coolGray.800"
        _dark={{ color: colors.lightText }}
        _light={{ color: colors.darkText }}
      />
      <Heading>Home Screen page as</Heading>
      <Icon
        as={AntDesign}
        name="android1"
        color="coolGray.800"
        _dark={{ color: colors.lightText }}
        _light={{ color: colors.darkText }}
      />
      <Heading>Home Screen page as</Heading>
      <Icon
        as={AntDesign}
        name="android1"
        color="coolGray.800"
        _dark={{ color: colors.lightText }}
        _light={{ color: colors.darkText }}
      />
      <Heading>Home Screen page as</Heading>
      <Icon
        as={AntDesign}
        name="android1"
        color="coolGray.800"
        _dark={{ color: colors.lightText }}
        _light={{ color: colors.darkText }}
      />
      <Heading>Home Screen page as</Heading>
      <Icon
        as={AntDesign}
        name="android1"
        color="coolGray.800"
        _dark={{ color: colors.lightText }}
        _light={{ color: colors.darkText }}
      />
      <Heading>Home Screen page as</Heading>
      <Icon
        as={AntDesign}
        name="android1"
        color="coolGray.800"
        _dark={{ color: colors.lightText }}
        _light={{ color: colors.darkText }}
      />
      <Heading>Home Screen page as</Heading>
      <Icon
        as={AntDesign}
        name="android1"
        color="coolGray.800"
        _dark={{ color: colors.lightText }}
        _light={{ color: colors.darkText }}
      />
      <Heading>Home Screen page as</Heading>
      <Icon
        as={AntDesign}
        name="android1"
        color="coolGray.800"
        _dark={{ color: colors.lightText }}
        _light={{ color: colors.darkText }}
      />
      <Heading>Home Screen page as</Heading>
      <Icon
        as={AntDesign}
        name="android1"
        color="coolGray.800"
        _dark={{ color: colors.lightText }}
        _light={{ color: colors.darkText }}
      />
      <Heading>Home Screen page as</Heading>
      <Icon
        as={AntDesign}
        name="android1"
        color="coolGray.800"
        _dark={{ color: colors.lightText }}
        _light={{ color: colors.darkText }}
      />
      <Heading>Home Screen page as</Heading>
      <Icon
        as={AntDesign}
        name="android1"
        color="coolGray.800"
        _dark={{ color: colors.lightText }}
        _light={{ color: colors.darkText }}
      />
      <Heading>Home Screen page as</Heading>
      <Icon
        as={AntDesign}
        name="android1"
        color="coolGray.800"
        _dark={{ color: colors.lightText }}
        _light={{ color: colors.darkText }}
      />
      <Heading>Home Screen page as</Heading>
      <Icon
        as={AntDesign}
        name="android1"
        color="coolGray.800"
        _dark={{ color: colors.lightText }}
        _light={{ color: colors.darkText }}
      />
      <Heading>Home Screen page as</Heading>
      <Icon
        as={AntDesign}
        name="android1"
        color="coolGray.800"
        _dark={{ color: colors.lightText }}
        _light={{ color: colors.darkText }}
      />
    </AppLayout>
  );
}

export default HomeScreen;
