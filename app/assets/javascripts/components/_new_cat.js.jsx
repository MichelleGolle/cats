var NewCat = React.createClass({
  getInitialState() {
    return { name: '', breed: '' }
  },
  handleClick() {
    var name = this.state.name;
    var breed = this.state.breed;
    $.ajax({
      url: 'api/v1/cats',
      type: 'POST',
      data: { cat: { name: name, breed: breed } },
      success: (cat) => {
        this.props.handleSubmit(cat);
      }
    })
  },
  render() {
    return (
      <div>
      <input onChange={ (e) => this.setState({ name: e.target.value }) } placeholder='Enter Name Here'/>
      <input onChange={ (e) => this.setState({ breed: e.target.value }) } placeholder='Enter Breed Here'/>
      <button onClick={ this.handleClick }>Submit</button>
      </div>
    )
  }
});
