import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {TableBuilder} from '../src/index';


export default storiesOf('DraftField', module)
  .add('without value', () => (
    <TableBuilder  label='My Text Field' 
                    onChange={action('change')}/>
  ));

  const initialValue = helpers.parseDraftState("We are taking control")