import React from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RootDispatch, RootState } from '../../store';
import { useThemeColors } from '../../lib/common';
import colors from '../../constants/colors';

const themes = [
  'gradientPeach',
  'gradientGold',
  'gradientOrange',
  'gradientYellow',
  'gradientMint',
  'gradientTeal',
  'gradientGreen',
  'gradientCyan',
  'gradientLavender',
  'gradientPurple',
  'gradientPink',
  'gradientRed',
  'gradientBrown',
  'gradientBlue',
];

const themeToBrandStyle = {
  gradientPeach: colors.brandStylePeach,
  gradientGold: colors.brandStyleGold,
  gradientOrange: colors.brandStyleOrange,
  gradientYellow: colors.brandStyleYellow,
  gradientMint: colors.brandStyleMint,
  gradientTeal: colors.brandStyleTeal,
  gradientGreen: colors.brandStyleGreen,
  gradientCyan: colors.brandStyleCyan,
  gradientLavender: colors.brandStyleLavender,
  gradientPurple: colors.brandStylePurple,
  gradientPink: colors.brandStylePink,
  gradientRed: colors.brandStyleRed,
  gradientBrown: colors.brandStyleBrown,
  gradientBlue: colors.brandStyleBlue,
};

const { width } = Dimensions.get('window');
const numColumns = 3;
const tileSize = (width - (numColumns + 1) * 10) / numColumns;

const styles = StyleSheet.create({
  grid: {
    paddingHorizontal: 5,
    justifyContent: 'center',
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
  const { colors: themeColors } = useThemeColors();
  const currentTheme = useSelector((state: RootState) => state.configuration.selectedTheme);
  const dispatch = useDispatch<RootDispatch>();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const handleColorSelect = (theme: string) => {
    const selectedBrandStyle = themeToBrandStyle[theme];
    dispatch.configuration.setSelectedTheme(theme);
    dispatch.configuration.setSelectedBrandStyle(selectedBrandStyle);
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, backgroundColor: themeColors.backgroundColor, paddingTop: insets.top }}>
      <FlatList
        data={themes}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.colorTile,
              { backgroundColor: themeToBrandStyle[item] },
              currentTheme === item && styles.selectedTile,
            ]}
            onPress={() => handleColorSelect(item)}
          />
        )}
        keyExtractor={(item) => item}
        numColumns={numColumns}
        contentContainerStyle={styles.grid}
      />
    </View>
  );
}
