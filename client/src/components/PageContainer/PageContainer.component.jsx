import React, { Component, Fragment } from 'react';

import LeftSideBar from '../LeftSideBar/LeftSideBar.component';
import Header from '../Header/Header.component'


const PageContainer = (WrappedComponent) => {
    return class extends Component {
        render() {
            return (
                <Fragment>
                    <Header />
                    <div className='page'>
                        <LeftSideBar />
                        <div id='content'>
                            <WrappedComponent {...this.props} />
                        </div>
                    </div>
                </Fragment>
            )
        }
    }

}


export default PageContainer;