import React from "react";
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from "mdb-react-ui-kit";

const Searchbar = ({ handleSubmit, label }) => {
  return (
    <div className="d-flex justify-content-center">
      <form onSubmit={handleSubmit}>
        <MDBInputGroup>
          <MDBInput label={label} type="search" name="recipeQuery" />
          <MDBBtn color="danger" rippleColor="dark" type="submit">
            <MDBIcon icon="search" />
          </MDBBtn>
        </MDBInputGroup>
      </form>
    </div>
  );
};

export default Searchbar;
