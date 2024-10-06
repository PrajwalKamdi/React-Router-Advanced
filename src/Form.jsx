import React from "react";
import { Form } from "react-router-dom";
function Form_Com() {
  return (
    <Form action={"/values"} method="POST" className="border py-5 px-5 my-10 grid grid-cols-2 gap-5 bg-green-400">
      <input type="text" name="firstName" className="border p-2 rounded-md" placeholder="First Name" required/>
      <input type="text" name="lastName" className="border p-2 rounded-md" placeholder="Last Name" required/>
      <input type="text" name="phoneNuumber" className="border p-2 rounded-md" placeholder="Phone Number" required/>
      <input type="text" name="email" className="border p-2 rounded-md" placeholder="Email" required/>
      <input type="text" name="address" className="border p-2 rounded-md" placeholder="Address" required/>
      <input type="text" name="password" className="border p-2 rounded-md" placeholder="Password" required/>
      <button type="submit" className="w-full border p-2 rounded-e-md col-span-2 bg-green-600">Submit</button>
    </Form>
  );
}

export default Form_Com;
