import { Box, Divider, ScrollView, useTheme } from 'native-base';
import React, { forwardRef, useImperativeHandle } from 'react';
import {
  Animated,
  SafeAreaView,
  useColorScheme,
  StatusBar,
} from 'react-native';

interface IAppLayoutProps {
  header?: React.ReactNode | null;
  children: React.ReactNode;
  headerBgColor: string;
  statusTranslucent?: boolean;
  onScroll?: (scrollY: Animated.Value) => void | null;
}

const AppLayout = forwardRef(
  (props: IAppLayoutProps, ref: React.ForwardedRef<any>) => {
    const { colors } = useTheme();
    const isDarkMode = useColorScheme() === 'dark';

    useImperativeHandle(ref, () => {});

    const {
      header = null,
      children,
      statusTranslucent = false,
      headerBgColor,
    } = props;

    const layoutStyle = {
      flex: 1,
      height: global.gScreen.screen_height,
      backgroundColor: headerBgColor,
    };
    const statusStyle = {
      width: '100%',
      height: StatusBar.currentHeight,
      backgroundColor: headerBgColor,
    };
    const flexStyle = { flex: 1, width: '100%' };

    return (
      <SafeAreaView style={layoutStyle}>
        <StatusBar
          translucent={statusTranslucent}
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={statusTranslucent ? 'transparent' : headerBgColor}
        />
        <Box>
          {statusTranslucent && <Box style={statusStyle} />}
          {header}
        </Box>
        <Divider
          _light={{ bg: colors.light[200] }}
          _dark={{ bg: colors.dark[200] }}
        />
        <Box
          style={flexStyle}
          _dark={{ bg: colors.darkBlue[900] }}
          _light={{ bg: colors.white }}>
          <ScrollView>{children}</ScrollView>
        </Box>
      </SafeAreaView>
    );
  },
);

export default AppLayout;
