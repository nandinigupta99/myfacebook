import React, { Component } from 'react'
import {Segment,Item,Icon,List,Button} from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';
class EventListItem extends Component {
    render() {
        return (
                 <Segment.Group>
                    <Segment>
                      <Item.Group>
                        <Item>
                          <Item.Image size="tiny" circular 
                          src={this.props.event.hostPhotoURL} />
                          <Item.Content>
                            <Item.Header as="a">{this.props.event.title}</Item.Header>
                            <Item.Description>
                              Hosted by {this.props.event.hostedBy}
                            </Item.Description>
                          </Item.Content>
                        </Item>
                      </Item.Group>
                    </Segment>
                    <Segment>
                      <span>
                        <Icon name="clock" /> {this.props.event.date}
                        <Icon name="marker" /> {this.props.event.venue}
                      </span>
                    </Segment>
                    <Segment secondary>
                      <List horizontal>
            {this.props.event.attendees && this.props.event.attendees.map((attendee)=>(

                   <EventListAttendee key={attendee.id} attendee={attendee}/>
                    ))}

                      
                      

                      </List>
                    </Segment>
                    <Segment clearing>
                    <span>{this.props.event.description}</span>
                    <Button 
                    onClick ={()=>this.props.deleteEvent(this.props.event.id)}
                    as="a" color="red" floated="right" content="Delete" />

                      <Button 
                      onClick ={()=>this.props.selectEvent(this.props.event)}
                      as="a" color="teal" floated="right" content="View" />
                    </Segment>
                  </Segment.Group>
        )
    }
}

export default EventListItem;
