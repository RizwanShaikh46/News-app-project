import React from 'react'
import NewsAPI from 'newsapi'
import './App.css'
import LoadingScreen from './components/LoadingScreen'
import ContentScreen from './components/ContentScreen'
import firebase from 'firebase'
import LoginPage from './components/LoginPage'

const newsapi = new NewsAPI('Your Api Key',
  { corsProxyUrl: 'https://cors-anywhere.herokuapp.com/' })


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: [],
      science: [],
      business: [],
      politics: [],
      sports: [],
      isLoggedIn: false
    }

    this.onbuttonClick = this.onbuttonClick.bind(this)
    this.onSignout = this.onSignout.bind(this)

  }

  onbuttonClick() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      
    }).catch(function(error) {
    console.log(error)
    });
  }

  onSignout() {
  firebase.auth().signOut().then(() => {
    // Sign-out successful
  }).catch(function(error){
    //An error occured
  })
  this.setState({
    isLoggedIn: false
  })
  
  }
  

  
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({isLoggedIn: true})
      }
    })
    
   newsapi.v2.topHeadlines({
      language: 'en',
      country: 'in'
    }).then(response => {
      this.setState({ articles: response.articles })

    });
    newsapi.v2.topHeadlines({
      category: 'science',
      language: 'en',
      country: 'in'
    }).then(response => {
      this.setState({ science: response.articles })
    });
    newsapi.v2.topHeadlines({
      category: 'business',
      language: 'en',
      country: 'in'
    }).then(response => {
      this.setState({ business: response.articles })
    });
    newsapi.v2.topHeadlines({
      category: 'politics',
      language: 'en',
      country: 'in'
    }).then(response => {
      this.setState({ politics: response.articles })
    });
    newsapi.v2.topHeadlines({
      category: 'sports',
      language: 'en',
      country: 'in'
    }).then(response => {
      this.setState({ sports: response.articles })
    });

  }

/**return <div><button onClick={this.onbuttonClick}>Sign in</button></div>*/

  render() {
    if (!this.state.isLoggedIn) {
      
      return <LoginPage onbuttonClick={this.onbuttonClick}/>
    }
    else if (this.state.articles.length === 0)
      return <LoadingScreen />
    else
      return <ContentScreen
        politics={this.state.politics}
        sports={this.state.sports}
        business={this.state.business}
        science={this.state.science}
        articles={this.state.articles}
        onSignout={this.onSignout}
      />
  }
}






export default App;
