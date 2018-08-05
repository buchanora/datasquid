import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {DateTable} from '../src/index';


export default storiesOf('DateField', module)
  .add('without value', () => (
    <DataTable  label='My Date Field' 
                onChange={action('change')}/>
  ))