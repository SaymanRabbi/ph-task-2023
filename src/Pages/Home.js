import React, { useEffect, useState } from 'react';
import { useQuery } from "react-query";
import { useSelector } from 'react-redux';
import Modal from '../Components/Modal';
const Home = () => {
    const {user,token} = useSelector(state=>({...state.user}));
    const [billings, setBillings] = useState([]);
    const [searchedBillings, setSearchedBillings] = useState([]);
    console.log(searchedBillings);
    const [isUpdateForm, setIsUpdateForm] = useState(false);
    const [oldData, setOldData] = useState({});
const { isLoading, error, data,refetch } = useQuery("data", () => fetch('http://localhost:5000/api/billing-list', {
    method: "GET",
    headers: {
        'authorization': `Barer ${token}`
    }
}).then(res => res.json()))
useEffect(() => {
    setBillings(data?.data);
    setSearchedBillings(data?.data);
    /* Paid Total */
    const paidTotal = data?.data.reduce(
      (acc, item) => acc + item.paidamount,
      0
    );
    // setPaidTotal(paidTotal);
  }, [data]);
   /* SEARCH BILLING USING FULL NAME, EMAIL, PHONE NUMBER */
   const handleSearch = async (event) => {
    const searchValue = event.target.value.toLowerCase();
    const filteredBilling = billings.filter(
      (item) =>
        item.name.toLowerCase().includes(searchValue) ||
        item.email.toLowerCase().includes(searchValue) ||
        item.phone.toLowerCase().includes(searchValue)
    );
    setSearchedBillings(filteredBilling);
  };
    return (
        <section id="billing" className="p-10 h-screen">
      <div className="container mx-auto font-poppins shadow p-5 rounded">
        <div className="title text-center mb-5">
          <h3 className="text-3xl font-poppins font-semibold">Billing Lists</h3>
          <span>Here you will get all the billing list.</span>
        </div>
        {/* Billing Header  */}
        <div className="header bg-base-300 rounded-md">
          <div className="flex-wrap gap-4 navbar">
            <div className="sm:flex-1 flex-col sm:flex-row w-full">
              <a href="/" className="btn btn-ghost normal-case text-xl mr-3">
                Billing List
              </a>
              <div className="form-control ">
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered "
                  onChange={handleSearch}
                />
              </div>
            </div>
            <div className="flex-none gap-2 justify-center items-center w-full sm:justify-start sm:items-start sm:w-auto">
              <label
                // onClick={() => setIsUpdateForm(false)}
                htmlFor="my-modal-3"
                className="btn btn-primary rounded-md"
              >
                Add New Billing +
              </label>
            </div>
          </div>
        </div>
        {/* Billing Header end */}
        <div className="overflow-x-auto my-6 overflow-y-hidden">
           
            <div className="text-center py-10">
              <h3 className="text-2xl">No Billings Found yet.</h3>
              <label
                htmlFor="my-modal-3"
                className="btn btn-primary rounded-md mt-7"
              >
                Add New Billing +
              </label>
            </div>
         
        </div>
      </div>
      <Modal refetch={refetch}/>
    </section>
    );
};

export default Home;