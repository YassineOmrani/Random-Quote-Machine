import React from 'react';
import { random } from 'lodash';
import QuoteMachine from './components/QuoteMachine'
import { withStyles, Grid } from '@material-ui/core';
import 'typeface-roboto';

const styles = {
  container: {
      alignItems : 'center',
      display: 'flex',
      height: '100vh'
  }
}

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state={
        quotes: [],
        selectedQuoteIndex : null
    }
    this.AssignNewQuoteIndex = this.AssignNewQuoteIndex.bind(this);
    this.generateNewQuoteIndex = this.generateNewQuoteIndex.bind(this);
    //this.selectQuote = this.selectQuote.bind(this);
  }

  componentDidMount(){
    fetch('https://gist.githubusercontent.com/shreyasminocha/7d5dedafc1fe158f82563c1223855177/raw/325d51aca7165b2498971afcff9bed286a52dc0e/quotes.json')
    .then(data => data.json())
    .then(quotes => this.setState({quotes}, this.AssignNewQuoteIndex));
    }

   get selectQuote() {
    if (!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex))
      return undefined;
    else{
      return this.state.quotes[this.state.selectedQuoteIndex];
    }
  }

  AssignNewQuoteIndex(){
    this.setState({
      selectedQuoteIndex : this.generateNewQuoteIndex() 
    });
  }
  
  generateNewQuoteIndex(){
    if (!this.state.quotes.length)
        return;
      else 
        return random(0 , this.state.quotes.length-1);
  }
  
  render(){
      return (
        <Grid id="quote-box" className={this.props.classes.container} justify="center" container>
          <Grid xs={11} lg={8} item>
            <QuoteMachine selectQuote={this.selectQuote} AssignNewQuoteIndex={this.AssignNewQuoteIndex} />
          </Grid>
        </Grid>
      );
  }
}

export default withStyles(styles)(App);
