import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import 'typeface-roboto';

const QuoteMachine = (props) => (
    
    <Card>
        <CardContent>
        <h3 id="text"> 
                <Typography>
                {
                    props.selectQuote ? props.selectQuote.quote : ''
                }
                </Typography>
            </h3>
            <span id="author">
                <Typography>
                {
                    props.selectQuote ? props.selectQuote.author : ''
                }
                </Typography>
            </span>
        </CardContent>
        <CardActions>
            <Button onClick={props.AssignNewQuoteIndex} id="new-quote">Next Quote</Button>
            <IconButton
                href="twitter.com/intent/tweet"
                id="tweet-quote"
            >
                <FontAwesomeIcon icon={faTwitter} size="md"></FontAwesomeIcon>
            </IconButton>
        </CardActions>
    </Card>
  
    );

export default QuoteMachine;