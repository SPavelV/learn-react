import React,{Component} from 'react'
// import PropTypes from 'prop-types'


//Example functional components:
const AddColorForm = ({onNewColor=f=>f}) => {
  let _title, _color;
  const submit = e => {
    e.preventDefault();
    onNewColor(_title.value, _color.value);
    _title.value = '';
    _color.value = '#000000';
    _title.focus();
  };
  return (
    <form onSubmit={submit}>
      <input ref={input => _title = input}
             type="text"
             placeholder="color title..." required/>
      <input ref={input => _color = input}
             type="color" required/>
      <button>ADD</button>
    </form>
   )
};

export default AddColorForm;



// Example React.Component
// class AddColorForm extends Component {

//   constructor(props) {
//     super(props);
//     this.submit = this.submit.bind(this);
//   }
//
//   submit(e) {
//     const {_title, _color} = this.refs;
//     e.preventDefault();
//     this.props.onNewColor(_title.value, _color.value);
//     _title.value = '';
//     _color.value = '#000000';
//     _title.focus();
//   }
//
//   render() {
//     return (
//       <form onSubmit={e=>e.preventDefault()}>
//         <input type="text"
//                placeholder="color title..." required/>
//         <input type="color" required/>
//         <button>ADD</button>
//       </form>
//     )
//   }
// }
//
// AddColorForm.propTypes ={
//   onNewColor: PropTypes.func
// };
//
// AddColorForm.defaultProps ={
//   onNewColor: f=>f
// };

//
//
// export default AddColorForm;

