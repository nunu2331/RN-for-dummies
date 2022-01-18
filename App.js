/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
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
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView>
        <ScrollView horizontal>
          <View
            style={{
              borderWidth: 1,
              padding: 20,
              margin: 12,
            }}>
            <Text>INI judul artikel2</Text>
            <Text>Ini deskripsi blablabla2</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              padding: 20,
              margin: 12,
            }}>
            <Text>INI judul artikel2</Text>
            <Text>Ini deskripsi blablabla2</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              padding: 20,
              margin: 12,
            }}>
            <Text>INI judul artikel2</Text>
            <Text>Ini deskripsi blablabla2</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              padding: 20,
              margin: 12,
            }}>
            <Text>INI judul artikel2</Text>
            <Text>Ini deskripsi blablabla2</Text>
          </View>
        </ScrollView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <View
            style={{
              borderWidth: 1,
              padding: 20,
              marginVertical: 12,
            }}>
            <Text>INI judul artikel</Text>
            <Text>Ini deskripsi blablabla</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              padding: 20,
              marginVertical: 12,
            }}>
            <Text>INI judul artikel2</Text>
            <Text>Ini deskripsi blablabla2</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              padding: 20,
              marginVertical: 12,
            }}>
            <Text>INI judul artikel2</Text>
            <Text>Ini deskripsi blablabla2</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              padding: 20,
              marginVertical: 12,
            }}>
            <Text>INI judul artikel2</Text>
            <Text>Ini deskripsi blablabla2</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              padding: 20,
              marginVertical: 12,
            }}>
            <Text>INI judul artikel2</Text>
            <Text>Ini deskripsi blablabla2</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              padding: 20,
              marginVertical: 12,
            }}>
            <Text>INI judul artikel2</Text>
            <Text>Ini deskripsi blablabla2</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              padding: 20,
              marginVertical: 12,
            }}>
            <Text>INI judul artikel2</Text>
            <Text>Ini deskripsi blablabla2</Text>
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
