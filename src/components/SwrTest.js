import React, { Component } from 'react';

class SwrTest extends Component {

    render() {
        
        let portvals = this.props.mainObj.state.portval_df.data[0];
        let spendvals = this.props.mainObj.state.spend_df.data[0];
        let n_rows = spendvals.length;
        let z = [];
        for (var i=0; i < n_rows; i++) {
            z.push({portval: portvals[i+1], spendval: spendvals[i]})
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <table>
                            <tr><td>1929 cohort portvals</td><td>spend</td></tr>
                {z.map(o => (
                    <tr><td>{o.portval}</td><td>{o.spendval}</td></tr>
                ))}
                        </table>
                    </div>
                </div>
            </div>
        );             
    }
}
  
export default SwrTest;

