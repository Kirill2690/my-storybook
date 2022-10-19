import React from 'react';
import {ControlledOnOff} from './СontrolledOnOff';
import {action} from '@storybook/addon-actions';


export default {
  title: 'Switch',
  component: ControlledOnOff
}

const callBack = action('on or off clicked')

export const OnOff = () => <ControlledOnOff onChange={callBack} defaultOn={true}/>

