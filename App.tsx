import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import * as Yup from 'yup';


const App = () => {

  const PasswordSchema = Yup.object().shape({
    passwordLength: Yup.number()
    .min(4, 'Should be min of 4 characters')
    .max(16, 'Should be max of 16 characters')
    .required('Length is required')
  })

  const [password, setPassword] = useState("");
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false)
  const [lowerCase, setLowerCase] = useState(true)
  const [upperCase, setUpperCase] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)

  const generatePasswordString = (passwordLength: number) => {
    let characterList = "";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz"
    const digitChars = "0123456789"
    const specialChars = "!@#$%^&*()_+"

    if(upperCase){
      characterList += upperCase
    }
    if(lowerCase){
      characterList += lowerCase
    }
    if(numbers){
      characterList += numbers
    }
    if(symbols){
      characterList += symbols
    }

    const passwordResult = createPassword(characterList, passwordLength)
    setPassword(passwordResult)
    setIsPasswordGenerated(true)
  }


  const createPassword = (characters: string, passLength: number) => {
    let result = "";
    for(let i=0; i<passLength; i++){
      const characterIndex = Math.round(Math.random() * characters.length)
      result += characters.charAt(characterIndex)
    }
    return result;
  }

  const resetPassword = () => {
    setPassword("")
    setIsPasswordGenerated(false)
    setLowerCase(true)
    setUpperCase(false)
    setNumbers(false)
    setSymbols(false)
  }
  
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}


const styles = StyleSheet.create({});


export default App;