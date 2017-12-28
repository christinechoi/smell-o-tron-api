import React from 'react';
import { Card, Button, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { likeRecommendation } from '../actions/perfumesActions';

class CardComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      likes: 0
    };
  }

  handleClick = (recommendation, event) => {
    this.props.likeRecommendation(recommendation) 
  }

  render() {

    // {debugger};
    return (
      <div>
      <Card>
        <Image src={this.props.recommendation.pictureURL}  />
        <Card.Content extra > 
          <Button
            content='Like'
            icon='heart'
            label={this.props.recommendation.likes}
            labelPosition='right'
            onClick={() => this.handleClick(this.props.recommendation)} 
             
          />
        </Card.Content> 
        <Card.Content >
          <Card.Header> {this.props.recommendation.name} </Card.Header> 
          <Card.Description > by {this.props.recommendation.brand} </Card.Description>
        </Card.Content>
    </Card>
      </div>
    );
  }


}

const mapStateToProps = (state) => { 
  // {debugger};
  return { 
    likes: state.perfumes.likes
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    likeRecommendation: likeRecommendation    
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CardComponent);