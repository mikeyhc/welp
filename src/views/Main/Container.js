import React from 'react'
import Map,{GoogleApiWrapper} from 'google-maps-react'
import {searchNearby} from 'utils/googleApiHelpers'
import Header from 'components/Header/Header'
import Sidebar from 'components/Sidebar/Sidebar'
import Listing from 'components/Listing/Listing'
import MapComponent from 'views/Main/Map/Map'

import styles from './styles.module.css'

export class Container extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            places: [],
            pagination: null
        }
    }

    onReady(mapProps, map) {
        const {google} = this.props;
        const opts = {
            location: map.center,
            radius: '500',
            types: ['cafe']
        }
        searchNearby(google, map, opts)
            .then((results, pagination) => {
                this.setState({
                    places: results,
                    pagination
                })
            }).catch((status, result) => {
                console.log('gmaps:' + status + ': ' + result);
            });
    }

                  // <div className={styles.content}>
                  //   {this.state.places.map(place => {
                  //     return (<div key={place.id}>{place.name}</div>)
                  //   })}
                  // </div>
    render() {
        let children = null;
        if(this.props.children) {
            children = React.cloneElement(
                    this.props.children,
                    {
                        google: this.props.google,
                        places: this.state.places,
                        loaded: this.props.loaded
                    });
        } else {
            console.log("no child provided as prop");
        }
        return(
            <div>
                Hello from the Container
                <Map
                  onReady={this.onReady.bind(this)}
                  google={this.props.google}
                  className={styles.wrapper}
                  visible={false}>
                  <Header />
                  <Sidebar
                    title={'Restaurants'}
                    places={this.state.places}
                    />
                  <div className={styles.content}>
                    <MapComponent places={this.state.places} google={this.props.google}></MapComponent>
                  </div>
                </Map>
            </div>);
    }
}

export default GoogleApiWrapper({
    apiKey: __GAPI_KEY__
})(Container)
