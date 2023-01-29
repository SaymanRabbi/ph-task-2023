import axios from 'axios';
import React from 'react';
import toast from "react-hot-toast";
import { useSelector } from 'react-redux';
const Modal = ({isUpdateForm, oldData,refetch}) => {
    const {user,token} = useSelector(state=>({...state.user}));
    const handleBilling = async (event) => {
        event.preventDefault();
        /* selections */
        const name = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const paidAmount = event.target.paid_amount.value;
          /* Error Handling */
    if (!name) return toast.error(`Name Field is required.`);

    if (!email) return toast.error(`Email field is required.`);

    if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email) === false)
      return toast.error(`Please enter a valid email address.`);

    if (!phone) return toast.error(`Phone field is required.`);

    if (phone.length < 11) return toast.error(`Phone field must be 11 digits.`);

    if (/^(?:(?:\+|00)88|01)?\d{11}$/.test(phone) === false)
      return toast.error(
        `Please enter a valid phone number. ex- +8801215454445`
      );

    if (!paidAmount) return toast.error(`Paid Amount field is required.`);
     const billingData = {
        name: name,
        email: email,
        phone: phone,
        paidamount: parseInt(paidAmount),
      };
        await axios.post("http://localhost:5000/api/add-billing", billingData,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((res) => {
            if(res.data.success){
                toast.success("Billing Information Added Successfully");
                event.target.reset();
                refetch()
            }
        }).catch(err=>{
            toast.error("Something went wrong");
        })
    }
    const handleUpdateBilling = async (event) => {
        event.preventDefault();
        /* selections */
        const name = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const paidAmount = event.target.paid_amount.value;
    
        /* Error Handling */
        if (!name) return toast.error(`Name Field is required.`);
    
        if (!email) return toast.error(`Email field is required.`);
    
        if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email) === false)
          return toast.error(`Please enter a valid email address.`);
    
        if (!phone) return toast.error(`Phone field is required.`);
    
        if (phone.length < 11) return toast.error(`Phone field must be 11 digits.`);
    
        if (/^(?:(?:\+|00)88|01)?\d{11}$/.test(phone) === false)
          return toast.error(
            `Please enter a valid phone number. ex- +8801215454445`
          );
    
        if (!paidAmount) return toast.error(`Paid Amount field is required.`);
        /* calling api to save data  */
        const billingData = {
          name: name,
          email: email,
          phone: phone,
          paidAmount: parseInt(paidAmount),
        };
        await axios.patch("http://localhost:5000/api/update-billing", billingData,{},{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(res=>{
            if(res.data.success){
                toast.success("Billing Information Updated Successfully");
                // window.location.reload();
                event.target.reset();
                refetch()
            }
        }).catch(err=>{
            toast.error("Something went wrong");
        })
    }
    return (
        <form
        action=""
        onSubmit={isUpdateForm ? handleUpdateBilling : handleBilling}
      >
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal font-poppins">
          <div className="modal-box relative">
            <label
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold">
              {isUpdateForm
                ? "Update Billing Information"
                : "Add New Billing Information"}
            </h3>
            <p className="py-4">
              Fill out all the fields attentively to add new billing information.
            </p>
            <div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">What is your name?</span>
                </label>
                <input
                  type="text"
                  placeholder="Name here"
                  className="input input-bordered "
                  name="name"
                  defaultValue={isUpdateForm ? oldData.name : ""}
                />
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email here"
                  className="input input-bordered "
                  name="email"
                  defaultValue={isUpdateForm ? oldData.email : ""}
                />
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="text"
                  placeholder="Phone No here"
                  className="input input-bordered "
                  name="phone"
                  defaultValue={isUpdateForm ? oldData.phone : ""}
                />
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Paid Amount</span>
                </label>
                <input
                  type="number"
                  placeholder="Paid Amount"
                  className="input input-bordered "
                  name="paid_amount"
                  defaultValue={isUpdateForm ? oldData.paid_amount : ""}
                />
              </div>
              <div className="my-5">
                <button className="btn btn-primary">
                  {isUpdateForm ? "Update Billing" : "Save Billing"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
};

export default Modal;