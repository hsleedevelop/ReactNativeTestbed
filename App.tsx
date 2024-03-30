/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {StrictMode} from "react";
import type {PropsWithChildren} from "react";

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";

import {NavigationContainer} from "@react-navigation/native";

import {Colors, Header} from "react-native/Libraries/NewAppScreen";

import TestComponent1 from "./components/TestComponent1";

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === "dark";
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

interface InnerAppProps {
  isDarkMode: boolean;
  backgroundStyle: {
    backgroundColor: string;
  };
}

const InnerApp: React.FC<InnerAppProps> = props => (
  <SafeAreaView style={props.backgroundStyle}>
    <StatusBar
      barStyle={props.isDarkMode ? "light-content" : "dark-content"}
      backgroundColor={props.backgroundStyle.backgroundColor}
    />
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={props.backgroundStyle}>
      <Header />
      <View
        style={{
          backgroundColor: props.isDarkMode ? Colors.black : Colors.white,
        }}>
        <Text>Testbed</Text>
      </View>
      <TestComponent1 />
    </ScrollView>
  </SafeAreaView>
);

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <StrictMode>
      <NavigationContainer>
        <InnerApp isDarkMode backgroundStyle={backgroundStyle} />
      </NavigationContainer>
    </StrictMode>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
});

export default App;
