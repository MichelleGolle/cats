var AllCats = React.createClass({
  handleDelete(id) {
    this.props.handleDelete(id);
  },
  handleEdit() {
    console.log('editing')
  },
  onUpdate(cat) {
    this.props.handleUpdate(cat)
  },
  render() {
    var cats = this.props.cats.map((cat) => {
      return(
        <div key={cat.id}>
          <Cat cat={cat}
               handleDelete={this.handleDelete.bind(this, cat.id)}
               handleUpdate={this.onUpdate}/>
        </div>
      )
    });
  return(
  <div>
    {cats}
  </div>
  )
}
});
