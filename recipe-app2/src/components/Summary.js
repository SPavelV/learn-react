import React, { Component } from 'react'
import PropTypes from 'prop-types'


//example FunctionsComponents:

const Summary = ({ ingredients=0, steps=0, title='[recipe]' }) => {
  return <div>
    <h1>{title}</h1>
    <p>{ingredients} Ingredients | {steps} Steps</p>
  </div>
};

Summary.propTypes = {
  ingredients: PropTypes.number.isRequired,
  steps: PropTypes.number.isRequired
};

//example React.Component(static properties):
// class Summary extends React.Component {
//
//   static propTypes = {
//     ingredients: PropTypes.number,
//     steps: PropTypes.number,
//     title: (props, propName) =>
//       (typeof props[propName] !== 'string') ?
//         new Error("A title must be a string") :
//         (props[propName].length > 20) ?
//           new Error(`title is over 20 charactes`) :
//           null
//   };
//
//   static defaultProps = {
//     ingredients: 0,
//     steps: 0,
//     title: "[recipe]"
//   };
//
//   render() {
//     const {ingredients, steps, title} = this.props;
//       return (
//         <div className="summary">
//           <h1>{title}</h1>
//           <p>
//             <span>{ingredients} Ingredients | </span>
//             <span>{steps} Steps</span>
//           </p>
//         </div>
//       )
//   }
// }

//example React.Component:
// class Summary extends React.Component {
//   render() {
//     const {ingredients, steps, title} = this.props;
//       return (
//         <div className="summary">
//           <h1>{title}</h1>
//           <p>
//             <span>{ingredients} Ingredients | </span>
//             <span>{steps} Steps</span>
//           </p>
//         </div>
//       )
//   }
// }

// Summary.propTypes = {
//   ingredients: PropTypes.number,
//   steps: PropTypes.number,
//   title: (props, propName) =>
//     (typeof props[propName] !== 'string') ?
//       new Error("A title must be a string") :
//       (props[propName].length > 20) ?
//         new Error(`title is over 20 charactes`) :
//         null
// };
//
// Summary.defaultProps = {
//   ingredients: 0,
//   steps: 0,
//   title: "[recipe]"
// };


// example for createClass
// export const Summary = createClass({
//   displayName: 'Summary',
//   propTypes: {
//     ingredients: PropTypes.array.isRequired,
//     steps: PropTypes.array.isRequired,
//     title: (props, propName) =>
//       (typeof props[propName] !== 'string') ?
//         new Error("A title must be a string") :
//         (props[propName].length > 20) ?
//           new Error(`title is over 20 charactes`) :
//           null
//   },
//   getDefaultProps() {
//     return {
//       ingredients: 0,
//       steps: 0,
//       title: "[untitled recipe]"
//     }
//   },
//   render() {
//     const {ingredients, steps, title} = this.props;
//     return (
//       <div className="summary">
//         <h1>{title}</h1>
//         <p>
//           <span>{ingredients} Ingredients</span>
//           <span>{steps} Steps</span>
//         </p>
//       </div>
//     )
//   }
// });


export default Summary;