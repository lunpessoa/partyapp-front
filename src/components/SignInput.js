import React, {useState} from 'react';
import styled from 'styled-components/native';

import SvgVisible from '../assets/visibility.svg';
import SvgNovisible from '../assets/novisibility.svg';

const InputArea = styled.View`
  width: 100%;
  height: 45px;
  background-color: #fff;
  flex-direction: row;
  border-radius: 10px;
  padding: 10px;
  align-items: center;
  margin-bottom: 20px;
  elevation: 10;
`;

const SvgButton = styled.TouchableOpacity`
  margin: 10px
`;

const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #222831;
  margin-left: 10px;
`;

export default ({placeholder, value, onChangeText, password, keyboard}) => {
  const [showPassword, setshowPassword] = useState(password);
  const [svgIcon, setSvgicon] = useState(true);

  function togglePassword(){
    setSvgicon(!svgIcon);
    setshowPassword(!showPassword);
  }

  return (
    <InputArea>
      <Input 
        placeholder={placeholder}
        value={value}
        autoCorrect={false}
        keyboardType={keyboard}
        onChangeText={onChangeText}
        secureTextEntry={showPassword}
      />

      {password && (
        <SvgButton onPress={togglePassword}>   
          {svgIcon ? (
            <SvgVisible width="20" height="20" fill="#D0D0D0"/>
          ) : (
            <SvgNovisible width="20" height="20" fill="#124F99"/>
          )}
        </SvgButton> 
      )}
    </InputArea>
  );
}