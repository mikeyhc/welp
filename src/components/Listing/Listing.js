import React, { PropTypes as T } from 'react'
import classnames from 'classnames'

import Item from './Item'
import styles from './styles.module.css'

export class Listing extends React.Component {
    render() {
        console.log(this.props.places);
        return (
            <div className={classnames(styles.container)}>
                {this.props.places.map(place => {
                    console.log("adding " + place);
                    return(
                        <Item place={place}
                            onClick={this.props.onClick}
                            key={place.id} />);
                })}
            </div>)
    }
}

export default Listing
