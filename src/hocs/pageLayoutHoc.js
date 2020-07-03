import React, { Component } from 'react';
import { isMobile } from 'react-device-detect';
import { withRouter } from 'react-router-dom';
import {Header, Footer} from '../shared_elements';
import { connect } from 'react-redux'
export default function pageLayoutHoc(HocComponent, extraProps={}){
  class PageLayout extends Component{
    constructor(props) {
      super(props);
      this.state = {
        
      }
    }
    render(){
      return (
        <>
          <Header />
          <main>
            <div>
              <HocComponent {...this.props} />
            </div>
          </main>
          <Footer />
        </>
      )
    }
  }
  return withRouter((PageLayout))
}