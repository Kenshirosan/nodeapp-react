import React, { Component, Fragment } from 'react';
import axios from 'axios';

class ExampleComponent extends React.Component {
    constructor() {
        super();

        this.state = {
            html: [],
        };
    }

    async componentDidMount() {
        await axios
            .get('api/readme')
            .then(res => {
                this.setState({ html: res.data });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Fragment>
                <h1>Hello, {this.props.name}</h1>

                <div dangerouslySetInnerHTML={{ __html: this.state.html }} />
            </Fragment>
        );
    }
}

export default ExampleComponent;
