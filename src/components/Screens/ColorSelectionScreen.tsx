import React from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RootDispatch, RootState } from '../../store';
import { useThemeColors } from '../../lib/common';
import colors from '../../constants/colors';

const themes = [
  'gradientRed',
  'gradientOrange',
  'gradientLightOrange',
  'gradientGold',
  'gradientYellow',
  'gradientLightYellow',
  'gradientDarkGreen',
  'gradientGreen',
  'gradientMint',
  'gradientBlue',
  'gradientTeal',
  'gradientCyan',
  'gradientPurple',
  'gradientLavender',
  'gradientPink',
];

const themeToBrandStyle = {
  gradientRed: colors.brandStyleRed,
  gradientOrange: colors.brandStyleOrange,
  gradientLightOrange: colors.brandStyleLightOrange,
  gradientGold: colors.brandStyleGold,
  gradientYellow: colors.brandStyleYellow,
  gradientLightYellow: colors.brandStyleLightYellow,
  gradientDarkGreen: colors.brandStyleDarkGreen,
  gradientGreen: colors.brandStyleGreen,
  gradientMint: colors.brandStyleMint,
  gradientBlue: colors.brandStyleBlue,
  gradientTeal: colors.brandStyleTeal,
  gradientCyan: colors.brandStyleCyan,
  gradientPurple: colors.brandStylePurple,
  gradientLavender: colors.brandStyleLavender,
  gradientPink: colors.brandStylePink,
};

const { width } = Dimensions.get('window');
const numColumns = 3;
const tileSize = (width - (numColumns + 1) * 10) / numColumns;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  colorTile: {
    width: tileSize,
    height: tileSize,
    margin: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedTile: {
    borderWidth: 2,
    borderColor: 'black',
  },
});

export default function ColorSelectionScreen() {
  const currentTheme = useSelector((state: RootState) => state.configuration.selectedTheme || 'gradientOrange');
  const dispatch = useDispatch<RootDispatch>();
  const navigation = useNavigation();

  const handleColorSelect = (theme: string) => {
    const selectedBrandStyle = themeToBrandStyle[theme];
    dispatch.configuration.setSelectedTheme(theme);
    dispatch.configuration.setSelectedBrandStyle(selectedBrandStyle);
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      {themes.map((theme) => (
        <TouchableOpacity
          key={theme}
          style={[
            styles.colorTile,
            { backgroundColor: themeToBrandStyle[theme] },
            currentTheme === theme && styles.selectedTile,
          ]}
          onPress={() => handleColorSelect(theme)}
        />
      ))}
    </View>
  );
}
