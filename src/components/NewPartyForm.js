import React from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { newReservation } from '../redux/actions';

const NewPartyForm = (props) => {


    return (
  <div class="container card">

    <h5 class="card-header info-color white-text text-center py-4 mb-5">
      <strong>Reserve Table</strong>
    </h5>

    <div class="card-body px-lg-5 pt-0">

      <form class="text-center row" onSubmit={()=> props.newReservation()}>
      <div class="col-md-6">
      <label>Email</label>
      <div class="md-form row">
          <input type="email" name="email" id="materialLoginFormEmail" class="form-control w-80 col"/>
        </div><br/>
        
        <div class="row">
          <label class="col-sm-9">Group Name</label>
          <label class="col-sm-3">Quantity</label>
        </div>
        <div class="md-form row">
          <input type="text" name="party_name" id="materialLoginFormPassword" class="form-control w-80 col-sm-9"/>
          <input type="number" name="quantity" id="materialLoginFormPassword" class="form-control w-80 col-sm-3"/>
        </div><br/>
      </div>


        <div class="col-md-6">
          <div class="row">
            <label class="col-sm-6">Date</label>
            <label class="col-sm-6">Time</label>
          </div>

          <div class=" row">
            <input class="md-form form-control w-80 col" name="date" type="date"></input>
            <input class="md-form form-control w-80 col" name="time_slot" type="time"></input>
          </div>
        </div>

        


        <button class="btn btn-outline-dark btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Reserve</button>
        </form>
        </div>
        </div>
    )
}

// const mapDispatchToProps = dispatch => bindActionCreators({
//   newReservation
// }, dispatch)

// export default connect(null, mapDispatchToProps)(NewPartyForm);

export default NewPartyForm;