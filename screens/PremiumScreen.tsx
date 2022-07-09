import React from 'react';
import { Text, View } from '../components/Themed';
import { ScrollView } from 'react-native';
import styles from '../styles/premiumScreen';
import { FlatListComponent } from '../components/FlatListComponent';
import { PremiumAdCard } from '../components/PremiumAdCard';

export const PremiumScreen = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Enjoy your music to the full with Premium
        </Text>

        <FlatListComponent />

        <View style={styles.smallParagraph}>
          <Text style={styles.smallParagraphText}>
            It is not possible to upgrade to Premium in the app. We know it's
            not ideal.
          </Text>
        </View>

        <View style={styles.currPlanCard}>
          <Text style={styles.currPlanTitle}>Spotify Free</Text>
          <Text style={styles.currPlanText}>CURRENT PLAN</Text>
        </View>

        <PremiumAdCard
          colors={['#065b48', '#15b06e']}
          title={'Premium Individual'}
          additionalStyle={null}
        >
          Ad-free music &bull; Play downloaded songs offline &bull; Unlimited
          skipping &bull; Play on task &bull; Resignation at any time
        </PremiumAdCard>

        <PremiumAdCard
          colors={['#f29923', '#cd7f51']}
          title={'Premium Student'}
          additionalStyle={{ height: 230 }}
        >
          Special price for students &bull; Ad-free music &bull; Play downloaded
          songs offline &bull; Unlimited skipping &bull; Play on Demand &bull;
          Cancel anytime
        </PremiumAdCard>

        <PremiumAdCard
          colors={['#588dbf', '#40427a']}
          title={'Premium Duo'}
          additionalStyle={null}
        >
          2 Premium accounts &bull; Ad-free music &bull; Play downloaded songs
          offline &bull; Unlimited skipping &bull; Playback on demand &bull;
          Cancel anytime
        </PremiumAdCard>

        <PremiumAdCard
          colors={['#253167', '#9a2790']}
          title={'Premium Family'}
          additionalStyle={{ marginBottom: 71, height: 230 }}
        >
          Up to 6 Premium Accounts &bull; Obscene Content Blocking &bull;
          Ad-free music &bull; Play downloaded songs offline &bull; Unlimited
          skipping &bull; Playback on demand &bull; Cancel anytime
        </PremiumAdCard>
      </View>
    </ScrollView>
  );
};
