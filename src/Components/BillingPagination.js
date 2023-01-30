import Items from "./Item";
export default function PaginatedItems({
  searchedBillings,
  editingBillings,
  deleteBilling,
  total,
  setPage
}) {
  const pages = Math.ceil(parseInt(total) / 10);
  return (
    <>
      <Items
        currentItems={searchedBillings}
        editingBillings={editingBillings}
        deleteBilling={deleteBilling}
      />

        <div className="flex justify-center items-center mt-4">
            <div className="flex gap-2">
                <button className="font-bold">{"-->"}</button>
                  {
                        [...Array(pages).keys()].map((num,i)=>
                            <button key={i} onClick={()=>setPage(num+1)}>{num+1}</button>
                            )
                        
                  }
                <button className="font-bold">{"<--"}</button>
            </div>
        </div>
    </>
  );
}
