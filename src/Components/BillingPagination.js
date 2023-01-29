import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
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
  itemsPerPage,
  searchedBillings,
  editingBillings,
  deleteBilling,
}) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(searchedBillings);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(searchedBillings.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(searchedBillings.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, searchedBillings]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % searchedBillings.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items
        currentItems={currentItems}
        editingBillings={editingBillings}
        deleteBilling={deleteBilling}
      />
      <ReactPaginate
        breakLabel="...."
        nextLabel="→"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="←"
        renderOnZeroPageCount={null}
        disabledClassName="pointer-events-none opacity-60"
        containerClassName="pagination flex justify-center items-center mt-6 gap-3"
        pageLinkClassName="pagination-link  w-8 h-8 grid place-items-center bg-base-300  "
        nextLinkClassName="pagination-link text-3xl"
        previousLinkClassName="pagination-link text-3xl"
        activeLinkClassName="pagination-link active bg-primary text-white"
      />
    </>
  );
}
