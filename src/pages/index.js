//Libs
import React, { Component } from "react"
import axios from "axios"
import Card from "../components/Card"
import Loader from "../components/Loader"
import Helmet from 'react-helmet'


class IndexPage extends Component {

    setLoader = (action) => this.setState({ isFetching: action });

    constructor(props) {
        super(props);
        this.state = {
            info: [],
            query: ''
        }
    }

    handleChange = e => {
        let value = e.target.value;
        this.setState({
            query: value
        })
    }

    handleClick = e => {
        this.setLoader(true);

        let queryString = this.state.query.trim().split(' ').join("+").toLowerCase();

        console.log(queryString);
        axios.get(`http://itunes.apple.com/search?term=${queryString}`)
            .then((response) => {
                console.log("itunes >", response.data.results);
                this.setState({
                    info: response.data.results
                });

                this.setLoader(false);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        const isFetching = this.state.isFetching;

        return (
            <>
                <Helmet>
                    <title>Itunes Search App</title>
                </Helmet>
                <div className="container">
                    <div className="hero">
                        <h1>Itunes Search App</h1>
                        <input onChange={this.handleChange} type="text" />
                        <button onClick={this.handleClick}>Show Records</button>
                        {isFetching && <Loader />}
                    </div>
                    {!isFetching &&
                        <ul>
                            {
                                this.state.info.map(i => (
                                    <li key={i.trackId}>
                                        <Card info={i} />
                                    </li>
                                ))
                            }
                        </ul>
                    }
                </div>
            </>
        )
    }
}

export default IndexPage