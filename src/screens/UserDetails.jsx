import { StyleSheet, Text, View, Image } from 'react-native'
import _ from 'lodash';
import { useRoute } from '@react-navigation/native';

const UserDetails = () => {
  const route = useRoute();
  const { username, image, description } = route.params;

  return (
    <View style={styles.aboutContainer}>
          <Text style={styles.mainHeader}>{username}</Text>
          <View>
            <Image style={styles.imgStyle} source={{uri: `${image}`}} />
          </View>
          <View style={styles.aboutLayout}>
          <Text style={styles.aboutSubHeader}>About Me</Text>
          <Text style={[styles.paraStyle, styles.aboutPara]}>
          {description}
          </Text>
          </View>
        </View>
  )
}

export default UserDetails

const styles = StyleSheet.create({
  aboutContainer:{
    display: 'flex',
    alignItems: 'center'
  },
  imgStyle:{
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  mainHeader:{
    fontSize: 18,
    color: '#344055',
    textTransform: 'uppercase',
    fontWeight: '500',
    marginTop: 30,
    marginBottom: 10,
    lineHeight: 30,
  },
  paraStyle:{
    fontSize: 18,
    paddingHorizontal: 20,
    color: '#7d7d7d',
    textAlign: 'justify',
    paddingBottom: 30,
  },
  aboutLayout:{
    backgroundColor: '#4c5dab',
    paddingHorizontal: 30,
    marginVertical: 30
  },
  aboutSubHeader:{
    fontSize: 18,
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: '500',
    marginVertical: 15,
    lineHeight: 30,
    alignSelf: 'center'
  },
  aboutPara:{
    color: '#fff',
  },
  menuContainer:{
    
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  iconStyle:{
    width: '100%',
    height: 50,
    aspectRatio: 1
  }
})