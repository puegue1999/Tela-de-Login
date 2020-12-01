import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    background:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#64A0C9'
      },
      containerLogo:{
        flex: 1,
        justifyContent: 'center',
      }, 
      container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        paddingBottom: 50
      },
      imput:{
        backgroundColor: '#FFF',
        width: '90%',
        marginBottom: 15,
        color: '#222', 
        fontSize: 17,
        borderRadius: 7,
        padding: 10
      },
      btnSubmit:{
        backgroundColor: '#2A539C',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        height: 45,
        width: '90%'
      },
      submitText:{
        color: '#FFF',
        fontSize: 18,
      },
      btnRegister:{
        marginTop: 10
      },
      registerText:{
        color: '#FFF',
      }
})