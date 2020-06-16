import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardText, CardBody } from 'reactstrap';

class Dishdetail extends Component {

    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if(dish != null)
            return(
                <div className="row">
                <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {this.renderComments(this.props.dish.comments)}
                    </ul>
                </div>
                </div>
            );
        else
            return(
                <div></div>
            );
    }

    renderComments(comments) {       
        const list = comments.map((element) => {
            var d = new Date(element.date);
            var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            return(
                <li>
                    <p>{ element.comment }</p>
                    <p>--{ element.author }, { months[d.getMonth()] } { d.getDate()+1 }, { d.getFullYear() }</p>
                </li>
            );
        });      
        
        return(
            <div>{list}</div>
        );
    }

    render() {

        return(
            <div>
                {this.renderDish(this.props.dish)}
            </div>

        );
    }
} 

export default Dishdetail;