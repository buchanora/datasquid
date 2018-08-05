# Overview

Datasquire provides a simple, flexible, declarative api for building beautiful data table/grid interfaces in [ReactJS](https://facebook.github.io/react) .

## Why anouther Table/grid API for React?

The React ecosystem boasts some really good datatable components like griddle. WHile these projects are powerful and highly configurable, they for the most part lack the visual appeal to be used as is. The goal of Datasquire is to provide a component and utility api that is can be dropped into any project as is without apending hours on styling configuration. Beyond being usable out of the box, datasquire still gives you the option to configure styles and functionality to your hearts desire as your project matures.

## Installation
```npm install --save datasquire```

## Basic Usage

```
  import React, {Component} from 'react';
  import {DataTable} from 'datasquire';

  class SampleForm extends Component{
    state: {
      values: {}
    }
    render(){
      const actions = {
        onChange: this.handleChange.bind(this)
      }
      return(
        <FieldStack formData={formData}
                    values={this.state.values}
                    actions={actions}/>
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

  const formData = {
    formTitle: 'Signup Form',
    fields: [
      {
        name: 'email',
        label: 'Email',
        type: 'email',
      },
      {
        name: 'password',
        label: 'Password',
        type: 'password',
      },
      {
        name: 'website',
        label: 'Company Website',
        type: 'url',
      },
      {
        name: 'about',
        label: 'Company Bio',
        type: 'multiLineText',
      },
      {
        name: 'regDate',
        label: 'Registration Date',
        type: 'date',
      },
      {
        name: 'time',
        label: 'Office Resumption Time',
        type: 'time',
      },
      {
        name: 'industry',
        label: 'Industry',
        type: 'optionText',
        options: [
          'Automobile',
          'Building',
          'Cosmetics',
          'Eduction',
        ]
      },
      {
        name: 'phone',
        label: 'Phone Number',
        type: 'tel',
      },
      {
        name: 'accountType',
        label: 'Account Type',
        type: 'selectFieldSet',
        options: [
          {value:'savings', name: 'Saving Account'},
          {value:'current', name: 'Current Account'},
          {value:'escrow', name: 'Escrow Account'},
          {value:'dom', name: 'Dom Account'},
        ]
      },
      {
        name: 'addon',
        label: 'Addon Features',
        type: 'multiSelectFieldSet',
        options: [
          {value:'social', name: 'Social Banking'},
          {value:'lifestyle', name: 'Lifestyle Banking'},
          {value:'mobile', name: 'Mobile Banking'}
        ]
      },
    ]
  }
```

## Components

### [Fieldstack](#fieldstack)
<!--- ### Example --->

#### Props
```
  activeFieldIndex: PropTypes.number,
  actions: PropTypes.object.isRequired,
  disabledForm: PropTypes.bool,
  disabledFields: PropTypes.object,
  formData: PropTypes.object,
  fieldErrors: PropTypes.object,
  formError: PropTypes.string,
  render: PropTypes.func,
  values: PropTypes.object
```


## Styles

Fieldstack relies on SCSS for styling. Be sure to import the library's style sheets into your application's SCSS.

### Sass Imports
```
@import '~fieldStack/lib/theme';
@import '~fieldstack/lib/config';
@import '~fieldstack/lib/styles';
```
`~` refereces node_modules directory

### Theming/Customisation
To customize theme colors, fonts etc, copy the contents of `fieldstack/lib/style_config.scss` and override the variable values in it with your custom values.



## Development
* To run FieldStack locally
* Clone the repo
* `npm install`
* `npm run storybook`
* Visit localhost:9001

## Contibution
* To build distribution run `npm run build`
* Run `npm test` for test



## License
MIT

<!---## Utilities
## Styles --->



