const app = "I don't do much.";

class ControlledInput extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: '',
    };
  }

  handleChange(ev) {
    this.setState({
      value: ev.target.value,
    });
  }

  render() {
    return (
      <input type="text" value={this.state.value} onChange={this.handleChange} />
    );
  }
}
