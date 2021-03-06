import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteReservation } from '../redux/actions';

class EmailInputForm extends Component {

  state = {
    email: 'toddporter99@gmail.com',
  }


render(){

    return (
  <div class="container card">

    <h5 class="card-header info-color white-text text-center py-4 mb-5">
      <strong>Edit Reservation</strong>
    </h5>

    <h6>Provide the email the reservation is under.</h6><hr/><br/>

    <div class="card-body px-lg-5 pt-0">

      <form class="text-center row" onSubmit={(e)=> {
        e.preventDefault()
        this.props.changeToFinalForm();
        }}>
      <div class="col">
      <label>Email</label>
      <div class="md-form row">
          <input type="email" onChange={e => this.setState({email: e.target.value})} name="email" id="materialLoginFormEmail" class="form-control w-80 col"/>
        </div><br/>
        </div>

        
        <button class="btn btn-outline-dark btn-rounded my-4 waves-effect z-depth-0" type="submit">Update Reservation</button>
        </form>
        <form class="text-center row" onSubmit={(e)=> {
        e.preventDefault()
        this.props.changeToEditForm();
        }}>
          <button class="btn btn-outline-info btn-rounded my-4 waves-effect z-depth-0" type="submit">Delete Reservation</button>
        </form>
        </div>
        </div>
    )
}

}

const mapDispatchToProps = dispatch => bindActionCreators({
    deleteReservation
  }, dispatch)
  
  export default connect(mapDispatchToProps)(EmailInputForm);