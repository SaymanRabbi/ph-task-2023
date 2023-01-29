import React from 'react';

const Modal = () => {
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