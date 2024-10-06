import React from "react";
import { useActionData } from "react-router-dom";

function PrintValue() {
  const data = useActionData();
  return (
    <div>
      PrintValue
      <div className="border p-2 font-semibold">
        <p>{data.firstName}</p>
        <p>{data.lastName}</p>
        <p>{data.phone}</p>
        <p>{data.email}</p>
        <p>{data.address}</p>
        <p>{data.password}</p>
      </div>
    </div>
  );
}
export async function formData(data) {
  const all = await data.request.formData();
  const getFromData = Object.fromEntries(all);
  console.log(getFromData);
  return getFromData;
}
export default PrintValue;
