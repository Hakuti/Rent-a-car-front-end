// /* eslint-disable jsx-a11y/accessible-emoji */
// import React from 'react'
// import { render } from 'react-dom'
// import { Field } from 'react-final-form'
// import Wizard from './Wizard';

// const onSubmit = async values => {
//     await sleep(300)
//     window.alert(JSON.stringify(values, 0, 2))
//   }
  
//   const Error = ({ name }) => (
//     <Field
//       name={name}
//       subscribe={{ touched: true, error: true }}
//       render={({ meta: { touched, error } }) =>
//         touched && error ? <span>{error}</span> : null
//       }
//     />
//   )
  
//   const required = value => (value ? undefined : 'Required')