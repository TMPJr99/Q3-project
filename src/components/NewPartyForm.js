import React from 'react';

const NewPartyForm = () => {


    return (
<div class="card ml-3 mt-5">

  <h5 class="card-header info-color white-text text-center py-4 mb-5">
    <strong>Reserve Table</strong>
  </h5>

  <div class="card-body px-lg-5 pt-0">

    <form class="text-center">

      <div class="md-form">
        <label for="materialLoginFormEmail">E-mail</label>
        <input type="email" id="materialLoginFormEmail" class="form-control"/>
      </div>

      <div class="md-form">
        <label for="materialLoginFormPassword">Password</label>
        <select type="password" id="materialLoginFormPassword" class="form-control"/>
      </div>


      <button class="btn btn-outline-dark btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Reserve</button>
      </form>
      </div>
      </div>
    )
}

export default NewPartyForm;