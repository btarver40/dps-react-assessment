// in this component I need to be able to display all of the beers
// I need to make an axios get request for all the beers

import React from 'react'
import axios from 'axios'
import { Container, Header, Card, Image, Button } from 'semantic-ui-react';

class Beers extends React.Component {
  state = {beers: {}, entries: [] }


  componentDidMount() {
    axios.get('/api/all_beers')
      .then(res => {
        this.setState({beers: res.data, entries: res.data.entries})
      })
  }

  allBeers = () => {
    if (this.state.entries.length > 1) {
    return this.state.beers.entries.map(beer => {
      return(
        <Card key={beer.id}>
          <Card.Content>
            {beer.name}
          </Card.Content>
          <Card.Content>
            {/* {beer.description} */}
          </Card.Content>
          <Button>
            Here is Beer
          </Button>
        </Card>
     )
    })
}}


  render() {
    const {entries} = this.state.beers;
    return(
      <Container>
        <Header as="h1" color="brown" textAlign="center">ALL BEERS</Header>
          <Card.Group itemsPerRow={3}>
          {this.allBeers()}
        </Card.Group>
      </Container>
    )
  }
}

export default Beers;

      // <ul>
      //   <h1>ALL BEERS</h1>
      //   {beers.map (b => 
      //     <li key={b.id}>
      //       <Link to={`/beers/${b.id}`}>{b.name}</Link>
      //     </li>
      //   )
      // }
      // </ul>
