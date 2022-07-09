import React, { Fragment, useRef, useState } from 'react';
import { Text, View } from '../components/Themed';
import { FlatList, TouchableOpacity } from 'react-native';
import styles from '../styles/premiumScreen';

const viewConfigRef = { viewAreaCoveragePercentThreshold: 95 };

interface CarouselItem {
  free: string;
  premium: string;
}

const listData = [
  {
    free: 'Ad breaks',
    premium: 'Listen to music without ads',
  },
  {
    free: 'Random play',
    premium: 'Playing any songs',
  },
  {
    free: '6 misses per hour',
    premium: 'Unlimited skip',
  },
  {
    free: 'Playback only',
    premium: 'Offline listening',
  },
  {
    free: 'Basic sound quality',
    premium: 'High sound quality',
  },
];

export const FlatListComponent = () => {
  let flatListRef = useRef<FlatList<CarouselItem> | null>();
  const [currentIndex, setCurrentIndex] = useState(0);

  const onViewRef = useRef(({ changed }: { changed: any }) => {
    if (changed[0].isViewable) {
      setCurrentIndex(changed[0].index);
    }
  });

  const renderItems: React.FC<{ item: CarouselItem }> = ({ item }) => {
    return (
      <TouchableOpacity activeOpacity={1}>
        <View style={styles.adCard}>
          <View style={styles.adCardTextLeft}>
            <Text style={styles.adTextHeader}>FREE</Text>
            <Text style={styles.adText}>{item.free}</Text>
          </View>
          <View style={styles.adCardTextRight}>
            <Text style={styles.adTextHeader}>PREMIUM</Text>
            <Text style={styles.adText}>{item.premium}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Fragment>
      <FlatList
        data={listData}
        renderItem={renderItems}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        ref={(ref) => {
          flatListRef.current = ref;
        }}
        style={styles.carousel}
        contentContainerStyle={styles.listContentContainer}
        viewabilityConfig={viewConfigRef}
        onViewableItemsChanged={onViewRef.current}
      />
      <View style={styles.dotView}>
        {listData.map((_, index: number) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.circle,
              { backgroundColor: index == currentIndex ? '#fff' : 'grey' },
            ]}
          />
        ))}
      </View>
    </Fragment>
  );
};
