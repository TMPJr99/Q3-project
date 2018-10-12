import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { newReservation } from '../redux/actions';

class NewPartyForm extends Component {

  state = {
    email: 'toddporter99@gmail.com',
    quantity: 4,
    date: '2018-10-27',
    time_start: '10:30',
    time_end: '11:30',
  }


render(){

    return (
  <div class="container card">

    <h5 class="card-header info-color white-text text-center py-4 mb-5">
      <strong>Reserve Table</strong>
    </h5>

    <div class="card-body px-lg-5 pt-0">

      <form class="text-center row" onSubmit={(e)=> {
        e.preventDefault()
        this.props.newReservation(this.state)
        this.props.changeToForm();
        }}>
      <div class="col-md-6">
        <div class="row">
          <label class="col-sm-9">Email</label>
          <label class="col-sm-3">Quantity</label>
        <div class="md-form row">
          <input type="email" value="toddporter99@gmail.com" onChange={e => this.setState({email: e.target.value})} name="email" id="materialLoginFormEmail" class="form-control w-80 col-md-9"/>
          <input type="number" value="4" onChange={e => this.setState({quantity: e.target.value})} name="quantity" id="materialLoginFormPassword" class="form-control w-80 col-sm-3"/>
        </div>
      </div><br/>

          <div class="row">
            <label class="col">Start Time</label>
          </div>

          <div class="row">
            <input class="md-form form-control w-80 col" value="10:30" onChange={e => this.setState({time_start: e.target.value})} name="time_start" type="time"/>
          </div>
          </div>


        <div class="col-md-6">
          <div class="row">
            <label class="col-sm-6">Date</label>
          </div>

          <div class=" row">
            <input class="md-form form-control w-80 col" value="2018-10-27" onChange={e => this.setState({date: e.target.value})} name="date" type="date"/>
          </div><br/>
          <div class="row">
            <label class="col">End Time</label>
          </div>

          <div class="row">
            <input class="md-form form-control w-80 col" value="11:30" onChange={e => this.setState({time_end: e.target.value})} name="time_end" type="time"/>        
          </div>
        </div>

        


        <button class="btn btn-outline-dark btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Reserve</button>
        </form>
        </div>
        </div>
    )
}

}

const mapDispatchToProps = dispatch => bindActionCreators({
  newReservation
}, dispatch)

export default connect(null, mapDispatchToProps)(NewPartyForm);
