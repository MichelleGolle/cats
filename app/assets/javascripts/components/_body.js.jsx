var Body = React.createClass({
  getInitialState() {
    return { cats: [] }
  },
  componentDidMount() {
    $.getJSON('api/v1/cats.json', (response) => { this.setState({ cats: response }) });
  },
  handleSubmit(cat) {
    var newState = this.state.cats.concat(cat);
    this.setState({ cats: newState })
  },
  handleDelete(id) {
    $.ajax({
      url: `api/v1/cats/${id}`,
      type: 'DELETE',
      success: () => {
        this.removeCatFromDom(id);
      }
    });
  },
  handleUpdate(cat) {
    $.ajax({
      url: `api/v1/cats/${cat.id}`,
      type: 'PUT',
      data: {cat: cat},
      success: () => {
        this.updateCats(cat);
      }
    });
  },

  updateCats(cat) {
    var cats = this.state.cats.filter((c) => { return c.id != cat.id });
    cats.push(cat);

    this.setState({cats: cats});
  },

  removeCatFromDom(id) {
    var newCats = this.state.cats.filter((cat) => {
      return cat.id != id;
    })
    this.setState({cats: newCats});
  },
  render() {
    return (
    <div>
    <AllCats cats={ this.state.cats }
             handleDelete={this.handleDelete}
             handleUpdate={this.handleUpdate} />
    <NewCat handleSubmit={this.handleSubmit} />
    </div>
    )
  }
});
