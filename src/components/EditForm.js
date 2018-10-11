import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateReservation } from '../redux/actions';

class EditForm extends Component {

  state = {
    email: '',
    party_name: '',
    quantity: 0,
    date: '',
    time_start: '',
    time_end: '',
  }


render(){

    return (
  <div class="container card">

    <h5 class="card-header info-color white-text text-center py-4 mb-5">
      <strong>Edit Reservation</strong>
    </h5>

    <div class="card-body px-lg-5 pt-0">

      <form class="text-center row" onSubmit={(e)=> {
        e.preventDefault()
        this.props.updateReservation(this.state)
        }}>
      <div class="col-md-6">
      <label>Email</label>
      <div class="md-form row">
          <input type="email" onChange={e => this.setState({email: e.target.value})} name="email" id="materialLoginFormEmail" class="form-control w-80 col"/>
        </div><br/>
        
        <div class="row">
          <label class="col-sm-9">Group Name</label>
          <label class="col-sm-3">Quantity</label>
        </div>
        <div class="md-form row">
          <input type="text" onChange={e => this.setState({party_name: e.target.value})} name="party_name" id="materialLoginFormPassword" class="form-control w-80 col-sm-9"/>
          <input type="number" onChange={e => this.setState({quantity: e.target.value})} name="quantity" id="materialLoginFormPassword" class="form-control w-80 col-sm-3"/>
        </div><br/>
      </div>


        <div class="col-md-6">
          <div class="row">
            <label class="col-sm-6">Date</label>
          </div>

          <div class=" row">
            <input class="md-form form-control w-80 col" onChange={e => this.setState({date: e.target.value})} name="date" type="date"/>
          </div><br/>
          <div class="row">
            <label class="col-sm-6">Start Time</label>
            <label class="col-sm-6">End Time</label>
          </div>

          <div class="row">
            <input class="md-form form-control w-80 col" onChange={e => this.setState({time_start: e.target.value})} name="time_start" type="time"/>
            <input class="md-form form-control w-80 col" onChange={e => this.setState({time_end: e.target.value})} name="time_end" type="time"/>        
          </div>
        </div>

        


        <button class="btn btn-outline-dark btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Update</button>
        </form>
        </div>
        </div>
    )
}

}

const mapStateToProps = state => ({
    reservation: state.reservation
  })

const mapDispatchToProps = dispatch => bindActionCreators({
  updateReservation
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
