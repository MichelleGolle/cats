var Cat = React.createClass({
  getInitialState() {
    return { editable: false }
  },
  handleEdit() {
    if (this.state.editable) {
      var name    = this.props.cat.name;
      var breed = this.props.cat.breed;
      console.log('in handleEdit', this.state.editable, name, breed);
      this.onUpdate();
    }
    this.setState({ editable: !this.state.editable })
  },
  onUpdate() {
    if (this.state.editable) {
      var id = this.props.cat.id;
      var name    = this.state.name;
      var breed = this.state.breed;
      var cat = { id: id, name: name, breed: breed }

      this.props.handleUpdate(cat);
    }
    this.setState({ editable: !this.state.editable })
  },
  render() {
    var name = this.state.editable ? <input type='text'
                                            onChange={ (e) => this.setState({ name: e.target.value }) }
                                            defaultValue={this.props.cat.name} />
                                    : <h3>{this.props.cat.name}</h3>
    var breed = this.state.editable ? <input type='text'
                                             onChange={ (e) => this.setState({ breed: e.target.value }) }
                                             defaultValue={this.props.cat.breed} />
                                    : <p>{this.props.cat.breed}</p>
    return (
      <div>
        {name}
        {breed}
        <button onClick={this.props.handleDelete}>
          Delete
        </button>
        <button onClick={this.handleEdit}>{this.state.editable ? 'Submit' : 'Edit'}</button>
      </div>
    )
  }
});
