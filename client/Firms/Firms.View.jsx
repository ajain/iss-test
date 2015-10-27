// Task component - represents a single todo item
// Firm = React.createClass({
//   propTypes: {
//     // This component gets the task to display through a React prop.
//     // We can use propTypes to indicate it is required
//     firm: React.PropTypes.object.isRequired

//     deleteThisFirm() {
//     Firms.remove(this.props.firm._id);
 
//   },

//   render() {
//     return (
//       <li className={firmClassName}>
//         <button className="delete" onClick={this.deleteThisFirm}>
//           &times;
//         </button>
 
//         <span className="name">{this.props.task.name}</span>
//       </li>
//     );
//   }
// });

// Task component - represents a single todo item
Firm = React.createClass({
  propTypes: {
    firm: React.PropTypes.object.isRequired
  },
 
  toggleChecked() {
    // Set the checked property to the opposite of its current value
    Firms.update(this.props.firm._id, {
      $set: {checked: ! this.props.firm.checked}
    });
  },
 
  deleteThisFirm() {
    Firms.remove(this.props.firm._id);
  },
 
  render() {
    // Give tasks a different className when they are checked off,
    // so that we can style them nicely in CSS
    const firmClassName = this.props.firm.checked ? "checked" : "";
 
    return (
      <li className={firmClassName}>
        <button className="delete" onClick={this.deleteThisFirm}>
          &times;
        </button>
 
        <input
          type="checkbox"
          readOnly={true}
          checked={this.props.firm.checked}
          onClick={this.toggleChecked} />
 
        <span className="text">{this.props.firm.name}</span>
      </li>
    );
  }
});