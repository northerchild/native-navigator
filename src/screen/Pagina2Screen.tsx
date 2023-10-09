import React, { useContext } from 'react'
import { Button, View } from 'react-native'
import { AuthContext } from '../context/AuthContext'

const Pagina2Screen = () => {
  const {signIn,authState} = useContext(AuthContext)
  return (
    <View>
      {
        !authState.isLoggedIn ? <Button title='SignIn' onPress={signIn}/> : <Button title='Logueado'/>
      }
    </View>
  )
}

export default Pagina2Screen
