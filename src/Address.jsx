import React from "react";
function Address(props) {
  console.log(props);
  return (
    <div className="m-3 border border-2 p-3 bg-light rounded">
      <fieldset>
        <legend>Address:</legend>
        <label for="fname">Place:</label>
        <input type="text" id="fname" name="fname" ref={props.ref} />
        <br />
        <br />
        <label for="lname">City:</label>
        <input type="text" id="lname" name="lname" />
        <br />
      </fieldset>
    </div>
  );
}

export default Address;
