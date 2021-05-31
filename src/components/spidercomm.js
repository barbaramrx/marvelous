import React from 'react'
import '../styles/spidercomm.css'
import spideyLogo from '../assets/img/spider_01.png'

class SpiderComm extends React.Component{
    render() {
        return(
            <div className="spider-comm">
                {this.props.children}
                <img className="spider-call" src={spideyLogo} alt="Spider Man" />
            </div>
        )
    }
}

export default SpiderComm