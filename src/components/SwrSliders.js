import React, { Component } from 'react';
import { Form, FormGroup, Col, Label, Button} from 'reactstrap';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../css/SwrSliders.css';

class SwrSliders extends Component {

    constructor(props) {
        super(props);
        this.bengen1 = this.bengen1.bind(this);
        this.ce1 = this.ce1.bind(this);
        this.ce2 = this.ce2.bind(this);
    }

    // slider callbacks
    onStocksChange = value => {
        // console.log(value);
        this.props.mainObj.setState({
            stock_alloc_pct: value,
            bond_alloc_pct: 100 - value,
            risk_label: "(None)"
        }, this.props.mainObj.do_recalc);
    }

    onBondsChange = value => {
        // console.log(value);
        this.props.mainObj.setState({
            stock_alloc_pct: 100 - value,
            bond_alloc_pct: value,
            risk_label: "(None)"
        }, this.props.mainObj.do_recalc);
    }

    onFixedChange = value => {
        // console.log(value);
        this.props.mainObj.setState({
            withdrawal_fixed_pct: value,
            risk_label: "(None)"
        }, this.props.mainObj.do_recalc);
    }

    onVariableChange = value => {
        // console.log(value);
        this.props.mainObj.setState({
            withdrawal_variable_pct: value,
            risk_label: "(None)"
        }, this.props.mainObj.do_recalc);
    }

    onFloorChange = value => {
        // console.log(value);
        this.props.mainObj.setState({
            withdrawal_floor_pct: value,
            risk_label: "(None)"
        }, this.props.mainObj.do_recalc);
    }

    onRiskChange = value => {
        switch (value)
        {
            case 0:
                this.props.mainObj.setState({
                    stock_alloc_pct: 50.0,
                    bond_alloc_pct: 50.0,
                    withdrawal_fixed_pct: 4.0,
                    withdrawal_variable_pct: 0.0,
                    withdrawal_floor_pct: 4.0,
                    risk_index: 0,
                    risk_label: 'Gamma: ∞'
                }, this.props.mainObj.do_recalc);
                break;
            case 1:
                this.props.mainObj.setState({
                    stock_alloc_pct: 75.0,
                    bond_alloc_pct: 25.0,
                    withdrawal_fixed_pct: 3.5,
                    withdrawal_variable_pct: 1.1,
                    withdrawal_floor_pct: 3.8,
                    risk_index: 1,
                    risk_label: 'Gamma: 16'
                }, this.props.mainObj.do_recalc);
                break;
            case 2:
                this.props.mainObj.setState({
                    stock_alloc_pct: 76.0,
                    bond_alloc_pct: 24.0,
                    withdrawal_fixed_pct: 3.4,
                    withdrawal_variable_pct: 1.3,
                    withdrawal_floor_pct: 3.7,
                    risk_index: 2,
                    risk_label: 'Gamma: 12'
                }, this.props.mainObj.do_recalc);
                break;
            case 3:
                this.props.mainObj.setState({
                    stock_alloc_pct: 77.0,
                    bond_alloc_pct: 23.0,
                    withdrawal_fixed_pct: 3.3,
                    withdrawal_variable_pct: 1.5,
                    withdrawal_floor_pct: 3.7,
                    risk_index: 3,
                    risk_label: 'Gamma: 10'
                }, this.props.mainObj.do_recalc);
                break;
            case 4:
                this.props.mainObj.setState({
                    stock_alloc_pct: 79.0,
                    bond_alloc_pct: 21.0,
                    withdrawal_fixed_pct: 3.2,
                    withdrawal_variable_pct: 1.8,
                    withdrawal_floor_pct: 3.4,
                    risk_index: 4,
                    risk_label: 'Gamma: 8'
                }, this.props.mainObj.do_recalc);
                break;
            case 5:
                this.props.mainObj.setState({
                    stock_alloc_pct: 82.0,
                    bond_alloc_pct: 18.0,
                    withdrawal_fixed_pct: 3.0,
                    withdrawal_variable_pct: 2.2,
                    withdrawal_floor_pct: 3.4,
                    risk_index: 5,
                    risk_label: 'Gamma: 6'
                }, this.props.mainObj.do_recalc);
                break;
            case 6:
                this.props.mainObj.setState({
                    stock_alloc_pct: 88.0,
                    bond_alloc_pct: 12.0,
                    withdrawal_fixed_pct: 2.6,
                    withdrawal_variable_pct: 3.0,
                    withdrawal_floor_pct: 3.4,
                    risk_index: 6,
                    risk_label: 'Gamma: 4'
                }, this.props.mainObj.do_recalc);
                break;
            case 7:
                this.props.mainObj.setState({
                    stock_alloc_pct: 99.0,
                    bond_alloc_pct: 1.0,
                    withdrawal_fixed_pct: 0.7,
                    withdrawal_variable_pct: 5.8,
                    withdrawal_floor_pct: 3.4,
                    risk_index: 7,
                    risk_label: 'Gamma: 2'
                }, this.props.mainObj.do_recalc);
                break;
            case 8:
                this.props.mainObj.setState({
                    stock_alloc_pct: 100.0,
                    bond_alloc_pct: 0.0,
                    withdrawal_fixed_pct: 0.0,
                    withdrawal_variable_pct: 6.7,
                    withdrawal_floor_pct: 3.4,
                    risk_index: 8,
                    risk_label: 'Gamma: 1'
                }, this.props.mainObj.do_recalc);
                break;
           default: 
                break;
        }
    }

    // quick button callbacks
    bengen1() {
        this.props.mainObj.setState({
            stock_alloc_pct: 50.0,
            bond_alloc_pct: 50.0,
            withdrawal_fixed_pct: 4.0,
            withdrawal_variable_pct: 0.0,
            withdrawal_floor_pct: 4.0,
            risk_index: 0,
            risk_label: 'Gamma: ∞'
        }, this.props.mainObj.do_recalc);
    }

    ce1() {
        this.props.mainObj.setState({
            stock_alloc_pct: 75.0,
            bond_alloc_pct: 25.0,
            withdrawal_fixed_pct: 3.5,
            withdrawal_variable_pct: 1.1,
            withdrawal_floor_pct: 3.8,
            risk_index: 1,
            risk_label: 'Gamma: 16'
        }, this.props.mainObj.do_recalc);
    }

    ce2() {
        this.props.mainObj.setState({
            stock_alloc_pct: 88.0,
            bond_alloc_pct: 12.0,
            withdrawal_fixed_pct: 2.6,
            withdrawal_variable_pct: 3.0,
            withdrawal_floor_pct: 3.4,
            risk_index: 6,
            risk_label: 'Gamma: 4'
        }, this.props.mainObj.do_recalc);
    }

    render() {
        return(
            <div className="container">
            <div className="row ">
    
            <div className="col-12 col-md-9">
                <div className="col-12 col-md-8">
                    <h3 className="text-left">Asset Allocation:</h3>
                </div>
                <Form onSubmit={this.props.mainObj.handleSubmit} classID="sliderForm">
                <FormGroup row className="align-items-center">
                            <Label data-testid="stock_alloc_pct_label" htmlFor="stock_alloc_pct" md={3} className="text-right">Stocks %: {this.props.mainObj.state.stock_alloc_pct}</Label>
                            <Col md={9}>
                                <Slider 
                                    value={this.props.mainObj.state.stock_alloc_pct}
                                    min={0} 
                                    max={100} 
                                    step={1}
                                    onChange={this.onStocksChange}
                                    onAfterChange={this.onStocksChange}
                                />
                            </Col>
                    </FormGroup>
                    <FormGroup row className="align-items-center">
                            <Label data-testid="bond_alloc_pct_label" htmlFor="bond_alloc_pct" md={3} className="text-right">Bonds %: {this.props.mainObj.state.bond_alloc_pct}</Label>
                            <Col md={9}>
                                <Slider 
                                    value={this.props.mainObj.state.bond_alloc_pct}
                                    min={0} 
                                    max={100} 
                                    step={1}
                                    onChange={this.onBondsChange}
                                    onAfterChange={this.onBondsChange}
                                />
                            </Col>
                    </FormGroup>
                    
                    <div className="col-12 col-md-9">
                        <h3 className="text-left">Annual Withdrawals:</h3>
                    </div>

                    <FormGroup row className="align-items-center">
                            <Label data-testid="withdrawal_fixed_label" htmlFor="withdrawal_fixed" md={3} className="text-right">Fixed %: {this.props.mainObj.state.withdrawal_fixed_pct}</Label>
                            <Col md={9}>
                                <Slider 
                                    value={this.props.mainObj.state.withdrawal_fixed_pct}
                                    min={-2} 
                                    max={6} 
                                    step={0.1}
                                    onChange={this.onFixedChange}
                                    onAfterChange={this.onFixedChange}
                                />
                            </Col>
                    </FormGroup>

                    <FormGroup row className="align-items-center">
                            <Label data-testid="withdrawal_variable_label" htmlFor="withdrawal_variable" md={3} className="text-right">Variable %: {this.props.mainObj.state.withdrawal_variable_pct}</Label>
                            <Col md={9}>
                                <Slider 
                                    value={this.props.mainObj.state.withdrawal_variable_pct}
                                    min={0} 
                                    max={10} 
                                    step={0.1}
                                    onChange={this.onVariableChange}
                                    onAfterChange={this.onVariableChange}
                                />
                            </Col>
                    </FormGroup>

                    <FormGroup row className="align-items-center">
                            <Label data-testid="withdrawal_floor_label" htmlFor="withdrawal_floor" md={3} className="text-right">Floor %: {this.props.mainObj.state.withdrawal_floor_pct}</Label>
                            <Col md={9}>
                                <Slider 
                                    value={this.props.mainObj.state.withdrawal_floor_pct}
                                    min={0} 
                                    max={6} 
                                    step={0.1}
                                    onChange={this.onFloorChange}
                                    onAfterChange={this.onFloorChange}
                                />
                            </Col>
                    </FormGroup>


                    <div className="col-12 col-md-9">
                        <h3 className="text-left">Risk Presets:</h3>
                    </div>

                    <div className="container">
                        <div className="row ">
                            <div className="col-12">
                                    <Button data-testid="button1" outline color="secondary" onClick={this.bengen1}>Bengen 4% rule</Button>
                                    &nbsp;
                                    <Button data-testid="button3" outline color="secondary" onClick={this.ce1}>Low risk rule (gamma=16)</Button>
                                    &nbsp;
                                    <Button  data-testid="button4" outline color="secondary" onClick={this.ce2}>High risk rule (gamma=4)</Button>
                            </div>
                        </div>
                    </div>
                    
                    <FormGroup row className="align-items-center">
                            <Label data-testid="risk_presets_label" htmlFor="risk_presets" md={3} className="text-right">{this.props.mainObj.state.risk_label}</Label>
                            <Col md={9}>
                                <Slider
                                    id="risk_presets"
                                    value={this.props.mainObj.state.risk_index}
                                    min={0} 
                                    max={8} 
                                    step={1}
                                    onChange={this.onRiskChange}
                                    onAfterChange={this.onRiskChange}
                                />
                            </Col>
                    </FormGroup>

                    <div className="col-12 col-md-9">
                        &nbsp; <br />
                        <h3 className="text-left">Historical Outcomes:</h3>
                    </div>


                </Form>
            </div>
            </div>
            </div>
        );
    }
}

export default SwrSliders;