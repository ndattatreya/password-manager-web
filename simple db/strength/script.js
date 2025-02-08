class ShowPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'input',
      score: 'null' };

    this.showHide = this.showHide.bind(this);
    this.passwordStrength = this.passwordStrength.bind(this);
  }

  showHide(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      type: this.state.type === 'input' ? 'password' : 'input' });

  }

  passwordStrength(e) {
    if (e.target.value === '') {
      this.setState({
        score: 'null' });

    } else
    {
      var pw = zxcvbn(e.target.value);
      this.setState({
        score: pw.score });

    }

  }

  render() {
    return /*#__PURE__*/(
      React.createElement("label", { className: "password" }, "Password", /*#__PURE__*/
      React.createElement("input", { type: this.state.type, className: "password__input", onChange: this.passwordStrength }), /*#__PURE__*/
      React.createElement("span", { className: "password__show", onClick: this.showHide }, this.state.type === 'input' ? 'Hide' : 'Show'), /*#__PURE__*/
      React.createElement("span", { className: "password__strength", "data-score": this.state.score })));


  }}


ReactDOM.render( /*#__PURE__*/React.createElement(ShowPassword, null), document.getElementById('react'));