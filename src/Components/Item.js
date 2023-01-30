import React from 'react';
import BillingRow from './BillingRow';

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

export default Items;