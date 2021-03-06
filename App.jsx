// App component - represents the whole app
App = React.createClass({

  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  // Loads items from the Tasks collection and puts them on this.data.tasks
  getMeteorData() {
    return {
      firms: Firms.find({}).fetch()
    }
  },

  renderFirms() {
    // Get tasks from this.data.tasks
    return this.data.firms.map((firm) => {
      return <Firm key={firm._id} firm={firm} />;
    });
  },

  handleSubmit(event) {
    event.preventDefault();
 
    // Find the text field via the React ref
    var text = React.findDOMNode(this.refs.textInput).value.trim();
 
    Firms.insert({
      name: text,
      createdAt: new Date() // current time
    });
 
    // Clear form
    React.findDOMNode(this.refs.textInput).value = "";
  },
 

  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>

          <form className="new-firm" onSubmit={this.handleSubmit} >
            <input
              type="text"
              ref="textInput"
              placeholder="Type to add new firms" />
          </form>
        </header>

        <ul>
          {this.renderFirms()}
        </ul>
      </div>
    );
  }
});