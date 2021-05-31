import React from "react";
import validate from "./validateInfoGetService";
import useForm from "./useFormGetService";
import "./FormGetService.css";
import { NavLink } from "react-router-dom";

const GetService = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto mb-2">
            <div className="formgs-content-right">
              <form onSubmit={handleSubmit} className="formgs" noValidate>
                <h1 className="firsth1">Patient & disease details</h1>

                <div className="formgs-inputs">
                  <div className="row">
                    <div className="col-md-9">
                      <label className="formgs-label">Patient name</label>
                      <input
                        className="formgs-input"
                        type="patientnamne"
                        name="patientnamne"
                        placeholder="Enter your Full name"
                        value={values.patientnamne}
                        onChange={handleChange}
                      />
                      {errors.patientnamne && <p>{errors.patientnamne}</p>}
                    </div>
                    <div className="mb-3 col-md-3">
                      <label className="formgs-label">Age</label>
                      <input
                        className="formgs-input"
                        rows="1"
                        type="number"
                        name="age"
                        placeholder='in years'
                        value={values.age}
                        onChange={handleChange}
                      />
                      {errors.age && <p>{errors.age}</p>}
                    </div>
                  </div>
                </div>
                <div className="formgs-inputs mt-1">
                  <legend class="formgs-label pt-0">Gender</legend>
                  <div>
                    <div class="formgs-check form-check-inline">
                      <input
                        class="formgs-check-input"
                        type="radio"
                        name="gender"
                        value="male"
                        id="inlineCheckbox1"
                        onChange={handleChange}
                      />
                      <label
                        class="formgs-check-label pt-1"
                        for="inlineCheckbox1"
                      >
                        &nbsp;&nbsp;Male
                      </label>
                    </div>
                    <div class="formgs-check form-check-inline">
                      <input
                        class="formgs-check-input"
                        type="radio"
                        name="gender"
                        value="female"
                        id="inlineCheckbox1"
                        onChange={handleChange}
                      />
                      <label
                        class="formgs-check-label pt-1"
                        for="inlineCheckbox2"
                      >
                        &nbsp;&nbsp;Female
                      </label>
                    </div>
                    {errors.gender && <p>{errors.gender}</p>}
                  </div>
                </div>
                <div className="formgs-inputs mt-2">
                  <div className="col-md-12">
                    <label className="formgs-label">Disease Details / Pregnacy Details</label>
                    <textarea
                      className="formgs-input"
                      type="diseasedetails"
                      name="diseasedetails"
                      placeholder="Diagnosed disease with patient condition"
                      value={values.diseasedetails}
                      onChange={handleChange}
                    />
                    {errors.diseasedetails && <p>{errors.diseasedetails}</p>}
                  </div>
                  </div>
                  
                <div className="formgs-inputs mt-2">
                <div className='row'>
                  <div class="input-group" className="mb-3 col-md-4">
                    <label class="formgs-label" className="formgs-label">
                      Latest Prescription
                    </label>
                    <input
                      type="file"
                      class="formgs-control"
                      className="formgs-label"
                      id="inputGroupFile04"
                      aria-describedby="inputGroupFileAddon04"
                      aria-label="Upload"
                      name="prescription"
                      value={values.prescription}
                      onChange={handleChange}
                    />
                    {errors.prescription && <p>{errors.prescription}</p>}
                  </div>
                  <div class="input-group" className="mb-3 mx-5 col-md-4">
                    <label class="formgs-label" className="formgs-label">
                    Aadhar Card</label>
                    <input
                      type="file"
                      class="formgs-control"
                      className="formgs-label"
                      id="inputGroupFile04"
                      aria-describedby="inputGroupFileAddon04"
                      aria-label="Upload"
                      name="aadharcard"
                      value={values.aadharcard}
                      onChange={handleChange}
                    />
                    {errors.aadharcard && <p>{errors.aadharcard}</p>}
                  </div>
                </div>
                </div>
               
                <div className="formgs-inputs mt-2">
                  <div className="col-md-12">
                    <label className="formgs-label">Address (Location where service is needed)</label>
                    <textarea
                      className="formgs-input"
                      type="address"
                      name="address"
                      placeholder="Plot no,society,street"
                      value={values.address}
                      onChange={handleChange}
                    />
                    {errors.address && <p>{errors.address}</p>}
                  </div>
                </div>
                <div className="formgs-inputs mt-2">
                <div className='row'>
                    <div className='mb-3 col-md-4'>
                        <label class='formgs-label' className='formgs-label'>
                            City
                        </label>
                        <input
                        class='formgs-control'
                        className='formgs-input'
                        id='exampleFormContrlTextarea1'
                        rows='1'
                        name="city"
                        onChange={handleChange}
                        value={values.city}/>
                        {errors.city && <p>{errors.city}</p>}
                    </div>
                    <div className='mb-3 col-md-4'>
                        <label class='formgs-label' className='formgs-label'>
                           State
                        </label>
                        <input
                        class='formgs-control'
                        className='formgs-input'
                        id='exampleFormContrlTextarea1'
                        rows='1'
                        name="state"
                        onChange={handleChange}
                        value={values.state}/>
                        {errors.state && <p>{errors.state}</p>}
                    </div>
                    <div className='mb-3 col-md-4'>
                        <label class='formgs-label' className='formgs-label'>
                           Pincode
                        </label>
                        <input
                        class='formgs-control'
                        className='formgs-input'
                        id='exampleFormContrlTextarea1'
                        rows='1'
                        name="zip"
                        onChange={handleChange}
                        value={values.zip}/>
                        {errors.zip && <p>{errors.zip}</p>}
                    </div>
                </div>
                <div className='row mt-2'>
                <div className="col-md-4 mb-3">
                      <label class='formgs-label' className="formgs-label">Contact Number</label>
                      <input
                      class='form-control'
                        className="formgs-input"
                        type="contactnumber"
                        rows='1'                                                                                                                                                                                                                                                                                                                                                                                                           
                         name="contactnumber"
                        
                        value={values.contactnumber}
                        onChange={handleChange}
                      />
                      {errors.contactnumber && <p>{errors.contactnumber}</p>}
                    </div> 
                    <div className="col-md-4 mb-3">
                      <label class='formgs-label' className="formgs-label">Contact Number 2</label>
                      <input
                      class='form-control'
                        className="formgs-input"
                        type="contactnumber2"
                        rows='1'                                                                                                                                                                                                                                                                                                                                                                                                           
                         name="contactnumber2"
                        placeholder=""
                        value={values.contactnumber2}
                        onChange={handleChange}
                      />
                      {errors.contactnumber2 && <p>{errors.contactnumber2}</p>}
                    </div>  
                </div>
                </div>
        
                 <div className="formgs-inputs">
                 <div className='col-12 my-4'>
                     <div class='form-check'>
                         <input class='form-check-input' type='checkbox' id='gridcheck'
                         name='agreebox'
                         onChange={handleChange}
                         value='agreebox'/>
                         <label
                         className='agreebox'
                         class='form-check-label'
                         for='gridCheck'>I agree to the <a className='scsrrtlink' href='terms and conditions'>Terms & Conditions.</a>
                         </label>{errors.agreebox && <p>{errors.agreebox}</p>}
                     </div>
                 </div>
                 </div>
                 <div class='col-12 mb-200 text-center'>
                     <button
                     className='formgs-input-btn'
                     type='submit'
                     onClick={handleSubmit}>
                     Submit Details
                     </button>
                 </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetService;
