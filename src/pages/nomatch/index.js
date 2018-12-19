import React from 'react'
import {Card} from 'antd'
export default class NoMatch extends React.Component {

    render() {
        return (
            <div style={{textAlign:'center',fontSize:'24'}}>
              <Card style={{height: '100%'}}>
                404 No Found!!!
              </Card>
            </div>
        );
    }
}