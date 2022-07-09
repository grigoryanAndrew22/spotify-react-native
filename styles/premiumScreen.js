import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#121212',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 50,
    width: '80%',
    textAlign: 'center',
  },

  adCard: {
    flexDirection: 'row',
    height: 140,
    marginHorizontal: 9,
    alignItems: 'center',
    width: 280,
    backgroundColor: 'transparent',
  },
  adCardTextLeft: {
    flex: 2,
    backgroundColor: '#343434',
    fontSize: 18,
    fontWeight: 'bold',
    height: '100%',
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  adCardTextRight: {
    flex: 2,
    backgroundColor: '#057859',
    fontSize: 18,
    fontWeight: 'bold',
    height: '100%',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  carousel: {
    marginTop: 20,
    maxHeight: 162,
  },
  adText: {
    flex: 2,
    alignSelf: 'center',
    fontSize: 17,
    fontWeight: 'bold',
    flexDirection: 'column',
    width: '90%',
    textAlign: 'center',
  },
  adTextHeader: {
    flex: 1,
    textAlign: 'center',
    fontSize: 11,
    letterSpacing: 1,
    paddingTop: 7,
  },
  dotView: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    marginTop: 20,
  },
  circle: {
    width: 7,
    height: 7,
    backgroundColor: 'grey',
    borderRadius: 50,
    marginHorizontal: 5,
  },
  listContentContainer: {
    justifyContent: 'space-between',
    paddingHorizontal: 58,
  },
  smallParagraph: {
    backgroundColor: 'transparent',
    width: '87%',
    marginTop: 17,
  },
  smallParagraphText: {
    textAlign: 'center',
    fontSize: 13,
  },
  currPlanCard: {
    marginTop: 25,
    width: '90%',
    backgroundColor: '#343434',
    borderRadius: 7,
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  premiumAdCard: {
    marginTop: 15,
    width: '90%',
    borderRadius: 7,
    height: 205,
    justifyContent: 'center',
    alignItems: 'center',
  },
  premiumAdCardTitle: {
    fontWeight: '700',
    fontSize: 21,
    marginTop: 35,
    marginBottom: 24,
  },
  premiumAdCardDescription: {
    flex: 2,
    width: '75%',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '500',
  },
  currPlanTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingLeft: 30,
  },
  currPlanText: {
    fontSize: 11,
    letterSpacing: 1,
    paddingRight: 30,
  },
});
export default styles;
