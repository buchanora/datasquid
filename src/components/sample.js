  import React, {Component} from 'react';
  import {FieldStack, TextField, MultiLineField, FieldRow} from 'fieldstack';

  class SampleForm extends Component{
    state: {
      values: {}
    }
    render(){
      const actions = {
        onChange: this.handleChange.bind(this)
      }
      return(
        <FieldStack values={this.state.values}
                    actions={actions}
                    render={({values, actions, fieldErrors, disabledFields, disabledForm})=>{
                        return(
                            <div>
                              <FieldRow>
                              <TextField  label='First Name'
                                          value={values.firstName}
                                          onChange={actions.onChange.bind(null, 'firstName', )}/>
                              <TextField  label='Last Name'
                                          value={values.lastName}
                                          onChange={actions.onChange.bind(null, 'lastName', )}/>
                              <TextField  label='Email'
                                          value={values.email}
                                          onChange={actions.onChange.bind(null, 'email')}/>
                              <TextField  label='Phone Number'
                                          value={values.phone}
                                          onChange={actions.onChange.bind(null, 'phone')}/>
                              </FieldRow>
                              <MultiLineField   label='Bio'
                                                value={values.aboutMe}
                                                onChange={actions.onChange.bind(null, 'aboutMe', )}/>
                            </div>
                          )
                    }}/>
      );
    }
    handleChange(fieldName, event){
      this.setState(currentState=>({
        values: {
          [fieldName]: event.target.value,
          ...currentState.values
        }
      }))
    }
  }