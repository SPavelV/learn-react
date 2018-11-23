import React,{Component} from 'react'

class AddColorForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  render() {
    return (
      <form onSubmit={e=>e.preventDefault()}>
        <input type="text"
               placeholder="color title..." required/>
        <input type="color" required/>
        <button>ADD</button>
      </form>
    )
  }
}

export default AddColorForm;