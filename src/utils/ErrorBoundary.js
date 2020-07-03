import React, { Component } from 'react'
import {Grid, Container} from '@material-ui/core';
import { Link, withRouter } from 'react-router-dom'
// import { Header, Footer, SideBar } from '../shared_elements';

class ErrorBoundary extends Component{
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }
    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        this.setState({
            hasError: true
        })
    }
    componentWillReceiveProps(){
        if(this.state.hasError){
            return
        }
    }
    render() {
        if (this.state.hasError) {
            return (
              <section className="pageNotfound">
                <Container className="pageNotFoundContainer" maxWidth="lg">
                    <Grid container direction="row" justify="flex-start" alignItems="center">
                        <Grid item md={12} xs={12}>
                            {/* <div className="contentBlk textCenter">
                              <h1 className="heading2">Oops! Something went wrong</h1>
                              <p className="sub-heading1">
                                <Link to="/" className="primaryBtn">
                                  <span>Go to home page</span>
                                </Link>
                              </p>
                              <img src={imageBasePath+'banner_404.svg'} alt="404" />
                            </div> */}
                        </Grid>
                    </Grid>
                </Container>
              </section>
            )
        }else{
            return this.props.children;
        }
    }
}
export default withRouter(ErrorBoundary)