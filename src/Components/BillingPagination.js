import { useState } from "react";
import BillingRow from "./BillingRow";

function Items({ currentItems, editingBillings, deleteBilling }) {
  return (
    <>
      <table className="table w-full table-compact ">
        <thead>
          <tr>
            <th>Billing ID</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th width="150">Paid Amount</th>
            <th width="80">Edit</th>
            <th width="80">Delete</th>
          </tr>
        </thead>
        <tbody>
          {currentItems &&
            currentItems.map((item) => (
              <BillingRow
                key={item._id}
                {...item}
                editingBilling={editingBillings}
                deleteBilling={deleteBilling}
              />
            ))}
        </tbody>
      </table>
    </>
  );
}

export default function PaginatedItems({
  searchedBillings,
  editingBillings,
  deleteBilling,
  total,
  setPage
}) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(searchedBillings);
  const pages = Math.ceil(parseInt(total) / 10);
  return (
    <>
      <Items
        currentItems={currentItems}
        editingBillings={editingBillings}
        deleteBilling={deleteBilling}
      />

        <div className="flex justify-center items-center mt-4">
            <div className="flex gap-2">
                <button className="font-bold">{"-->"}</button>
                  {
                        [...Array(pages).keys()].map(i=>
                            <button key={i} onClick={()=>setPage(i)}>{i}</button>
                            )
                        
                  }
                <button className="font-bold">{"<--"}</button>
            </div>
        </div>
    </>
  );
}
