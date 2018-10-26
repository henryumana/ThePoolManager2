class App extends Component {
 constructor(props) {
    super(props);
    this.state = { activeItem: 'Home' }
  }

  componentDidMount() {this.setState({ activeItem: 'Home' })}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
   const { activeItem } = this.state;
    return (
      <div>
         <Menu pointing secondary color='blue' stackable={true}>
           <Link to={'/Home'}>
            <Menu.Item name='Home' to="/Home" active={activeItem === 'Home'} onClick={this.handleItemClick} />
             </Link>
             <Link to={'/About'}>
              <Menu.Item name='About' to="/About" active={activeItem === 'About'} onClick={this.handleItemClick} />
              </Link>
              <Link to={'/Events'}>
              <Menu.Item name='Events' to="/Events" active={activeItem === 'Events'} onClick={this.handleItemClick} />
             </Link>
            <Link to={'/BookAVisit'}>
           <Menu.Item name='BookAVisit' to="/BookAVisit" active={activeItem === 'BookAVisit'} onClick={this.handleItemClick} />
          </Link>
          <Link to={'/registerServiceWorker'}>
        <Menu.Item name='registerServiceWorker' to="/registerServiceWorker" active={activeItem === 'registerServiceWorker'} onClick={this.handleItemClick} />
        </Link>
      </Menu>
    </div>
     );
   }
 };

 export default App;
