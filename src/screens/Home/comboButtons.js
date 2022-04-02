import React from 'react';
import styled from 'styled-components/native';

const bgCombo1 = require('../../assets/bgcombo1.png');
const bgCombo2 = require('../../assets/bgcombo2.png');
const bgCombo3 = require('../../assets/bgcombo3.png');
const bgCombo4 = require('../../assets/bgcombo4.png');

const infoCombo1 = require('../../assets/combo1.png');
const infoCombo2 = require('../../assets/combo2.png');
const infoCombo3 = require('../../assets/combo3.png');
const infoCombo4 = require('../../assets/combo4.png');

const Container = styled.View`
  margin-top: 20px;
  flex-direction: column;
`;

const SmallContainerButton = styled.View`
  flex-direction: row;
`;

const ImageBgCombo = styled.ImageBackground`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ImageInfoCombo = styled.Image`
`;

const ComboButton = styled.TouchableOpacity`
  width: 340px;
  height: 100px;
  margin: 10px;
  border-radius: 10px;
  overflow: hidden;
  elevation: 10;
`;

const SmallComboButton = styled.TouchableOpacity`
  width: 160px;
  height: 100px;
  background-color: #fff;
  margin: 10px;
  border-radius: 10px;
  overflow: hidden;
  elevation: 10;
`;

export default () => {
  return (
    <Container>
      <ComboButton>
        <ImageBgCombo source={bgCombo1} >
          <ImageInfoCombo source={infoCombo1}>
          </ImageInfoCombo>
        </ImageBgCombo>
      </ComboButton>

      <ComboButton>
        <ImageBgCombo source={bgCombo2} >
          <ImageInfoCombo source={infoCombo2}>
          </ImageInfoCombo>
        </ImageBgCombo>
      </ComboButton>
      
      <SmallContainerButton>
        <SmallComboButton>
          <ImageBgCombo source={bgCombo3} >
            <ImageInfoCombo source={infoCombo3}>
            </ImageInfoCombo>
          </ImageBgCombo>
        </SmallComboButton>
        
        <SmallComboButton>
          <ImageBgCombo source={bgCombo4} >
            <ImageInfoCombo source={infoCombo4}>
            </ImageInfoCombo>
          </ImageBgCombo>
        </SmallComboButton>
      </SmallContainerButton>
    </Container>
  )
}