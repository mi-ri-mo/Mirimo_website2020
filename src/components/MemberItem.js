import React, {Component} from 'react';
import '../styles/MemberItem.scss';

class MemberItem extends Component{
    render(){
        return(
            <div className="member-item">

                <div className="member-profile" style={{backgroundImage: `url(${this.props.profileImage})`}}></div>
                <div className="member-name">{this.props.name}</div>
                <div className="member-position">{this.props.position}</div>
                
            </div>
        );
    };
}

export default MemberItem;