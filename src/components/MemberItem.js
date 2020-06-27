import React, {Component} from 'react';

class MemberItem extends Component{
    render(){
        return(
            <div className="member-item">
                
                <img className="member-profile" src={this.props.img}></img>
                <div className="member-name">{this.props.name}</div>
                <div className="member-position">{this.props.position}</div>
                
            </div>
        );
    };
}

export default MemberItem;