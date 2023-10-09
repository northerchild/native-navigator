import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { AuthContext } from '../context/AuthContext';

const Pagina1Screen = () => {

  const {signIn,authState} = useContext(AuthContext)

  return (
    <View>
      <Text>Pagina 1</Text>
      <Text style={{color:"#0000"}}>{JSON.stringify(authState,null,4)}</Text>
      {
        !authState.isLoggedIn ? <Button title='SignIn' onPress={signIn}/> : <Button title='Logueado'/>
      }
    </View>
  )
}

export default Pagina1Screen
