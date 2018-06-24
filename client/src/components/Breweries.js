import React from 'react'
import axios from 'axios'
import { Container, Header, Card, Image, Button } from 'semantic-ui-react';

class Breweries extends React.Component {
  state = {breweries: {}, entries: [] }


  componentDidMount() {
    axios.get('/api/all_breweries')
      .then(res => {
        this.setState({breweries: res.data, entries: res.data.entries})
      })
  }

  allBreweries = () => {
    if (this.state.entries.length > 1) {
    return this.state.breweries.entries.map(brewery => {
      return(
        <Card key={brewery.id}>
          <Card.Content>
            {brewery.name}
          </Card.Content>
          <Card.Content>
            {/* {beer.description} */}
          </Card.Content>
          <Button>
            Here is Brewery
          </Button>
        </Card>
     )
    })
}}


  render() {
    const {entries} = this.state.breweries;
    return(
      <Container>
        <Header as="h1" color="brown" textAlign="center">ALL BREWERIES</Header>
          <Card.Group itemsPerRow={3}>
          {this.allBreweries()}
        </Card.Group>
      </Container>
    )
  }
}

export default Breweries;