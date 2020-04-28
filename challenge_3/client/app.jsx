class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onHome: true,
      onF1: false,
      onF2: false,
      onF3: false,
      onConfirmation: false,
      userInfo: {}
    };

    this.openCart = this.openCart.bind(this);
    this.openF2 = this.openF2.bind(this);
    this.openF3 = this. openF3.bind(this);
  }

  openCart(event) {
    this.setState({
      onHome: false,
      onF1: true
    })
  }

  openF2(event) {
    this.setState({
      onF1: false,
      onF2: true,
      userInfo: {
        name: '',
        email: '',
        password '',
      }
    })
  }

  openF3(event) {
    this.setState({
      onF2: false,
      onF3: true,
      userInfo: {
        address: '',
        phoneNumber: '',
      }
    })
  }

  sendUserData(event) {

  }

  render() {
    if (this.state.onHome) {
      return (
        <div>
          <button id='onHome' onClick={this.openCart}>Open Cart</button>
        </div>
      )
    } else if (this.state.onF1) {
      return (
        <div>
          <F1 openF2={this.openF2}/>
        </div>
      )
    } else if (this.state.onF2) {
      return (
        <div>
          <F2 openF3={this.openF3}/>
        </div>
      )
    } else if (this.state.onF3) {
      return (
      <div>
        <F3 userInfo={this.state.userInfo}/>
      </div>
      )
    }
  }
};


class F1 extends React.Component {
  constructor(props) {
    super(props);
  }

  this.state = {};
  this.handleName = this.handleName.bind(this);
  this.handleEmail = this.handleEmail.bind(this);
  this.handlePassword = this.handlePassword.bind(this);

  handleName(event) {
    this.setState({name: event.target.value})
  }

  handleEmail(event) {
    this.setState({email: event.email.value})
  }

  handlePassword(event) {
    this.setState(password: event.target.value)
  }

  render () {
    return (
      <div id='f1'>
        <form>
          <label> Name: </label>
          <input type='text' id='name' value={this.state.name} onChange={this.handleName}></input>
          <br></br>
          <label> Email: </label>
          <input type='email' id='email' onChange={this.handleEmail}></input>
          <button onClick={this.props.openF2}> Next </button>
        </form>
      </div>
    )
  }
}

class F2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
    this.handleAddress = this.handleAddress.bind(this);
    this.handlePhoneNumber = this.handlePhoneNumber.bind(this);
  }

  handleAddress(event) {
    this.setState({address: event.target.value})
  }

  render () {
    return (
      <div id='f2'>
        <form>
          <label> Address: </label>
          <input type='text' id='address' onChange={this.handleAddress}></input>
          <br></br>
          <label> Phone Number: </label>
          <input type='text' id='phoneNumber' onChange={this.handlePhoneNumber}></input>
          <button onClick={this.props.openF3}>Next</button>
        </form>
      </div>
    )
  }
}

class F3 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ccNumber: '',
      expDate: '',
      cvv: '',
      zip: ''
    }
  }

  render () {
    return (
      <div id='f3'>
        <form>
          <label> Credit Card Number: </label>
          <input type='text' id='ccNumber'></input>
          <br></br>
          <label> Exp. Date: </label>
          <input type='email' id='expDate'></input>
          <br></br>
          <label> CVV: </label>
          <input type='password' id='cvv'></input>
          <br></br>
          <label> Billing Zip Code: </label>
          <input type='password' id='zip'></input>
          <button>Next</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
