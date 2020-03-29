import { Stylesheet } from 'react-native';

import Contants from 'expo-constants';

export default Stylesheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Contants.statusBarHeight + 20
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 16,
    marginTop: 48
  },

  incidentProperty: {
    fontSize: 14,
    color: '#41414d',
    marginTop: 24,
    fontWeight: 'bold'
  },

  incidentValue: {
    fontSize: 15,
    color: '#737380',

    marginTop: 8
  },

  contactBox: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 16
  },

  heroTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#13131a',
    lineHeight: 30
  },

  heroDescription: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#737380',
    marginTop: 16
  },

  actions: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  action: {
    backgroundColor: '#e02041',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    width: '48%',
    height: 50
  },

  actionText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold'
  }
});
