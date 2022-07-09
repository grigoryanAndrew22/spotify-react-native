import React, { useRef, useState } from 'react';
import { Text, View } from '../components/Themed';
import { FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../styles/premiumScreen';
import { FlatListComponent } from '../components/FlatListComponent';

export const PremiumAdCard = ({
  colors,
  additionalStyle,
  title,
  children,
}: any) => {
  const updatedStyle = additionalStyle
    ? [styles.premiumAdCard, additionalStyle]
    : styles.premiumAdCard;

  return (
    <LinearGradient
      style={updatedStyle}
      colors={[colors[0], colors[1]]}
      start={{ x: 0, y: 0 }}
    >
      <Text style={styles.premiumAdCardTitle}>{title}</Text>
      <Text style={styles.premiumAdCardDescription}>{children}</Text>
    </LinearGradient>
  );
};
