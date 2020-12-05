import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
// import { fetchCountries } from '../../../redux/actions/fetchCountriesActions';
// import { connect } from 'react-redux';

const Lifestyle = ({ countries, fetchCountries, addUserDetail }) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const history = useHistory();

  // useEffect(() => {
  //     fetchCountries();
  // }, []);

  const onSubmit = (data) => {
    addUserDetail(data);
    history.push(`/membership/bankDetails`);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <div>
            <label className="brand-text" htmlFor="">
              Family Type
            </label>
            <select
              ref={register({ required: true })}
              name="country"
              className="form-control"
            >
              {/* {
                  countries.map(country => <option key={country.name} value={country.name}>{country.name}</option> )
              }                              */}
            </select>
          </div>
        </div>
        <div className="form-group">
          <div>
            <label className="brand-text" htmlFor="">
              Father's Occupation
            </label>
            <select
              ref={register({ required: true })}
              name="country"
              className="form-control"
            ></select>
          </div>
        </div>
        <div className="form-group">
          <div>
            <label className="brand-text" htmlFor="">
              Mother's Occupation
            </label>
            <select
              ref={register({ required: true })}
              name="country"
              className="form-control"
            ></select>
          </div>
        </div>
        <div className="form-group">
          <div>
            <label className="brand-text" htmlFor="">
              Brother
            </label>
            <select
              ref={register({ required: true })}
              name="country"
              className="form-control"
            ></select>
          </div>
        </div>
        <div className="form-group">
          <div>
            <label className="brand-text" htmlFor="">
              Sister
            </label>
            <select
              ref={register({ required: true })}
              name="country"
              className="form-control"
            ></select>
          </div>
        </div>
        <div className="form-group">
          <div>
            <label className="brand-text" htmlFor="">
              Family Living In
            </label>
            <select
              ref={register({ required: true })}
              name="country"
              className="form-control"
            ></select>
          </div>
        </div>
        <div className="form-group">
          <div>
            <label className="brand-text" htmlFor="">
              Contact Address
            </label>
            <input
              ref={register({ required: true })}
              type="text"
              name="contactAddress"
              className="form-control"
            />
            {errors.firstName && (
              <span className="text-danger">Contact Address is required</span>
            )}
          </div>
        </div>

        <div className="form-group">
          <div>
            <label className="brand-text" htmlFor="">
              About My Family
            </label>
            <input
              ref={register({ required: true })}
              type="text"
              name="explain"
              className="form-control"
              style={{
                width: 500,
                paddingBottom: 100,
                paddingTop: 10,
                marginBottom: 30,
                boxShadow: 40,
                borderRadius: 5,
              }}
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-md-6 ">
            <input
              className="main-btn"
              type="submit"
              value="About My Profile"
            />
          </div>
          <div className="col-md-6 ">
            <p style={{ color: "#8e8be6", paddingTop: 10 }}>
              I will add this later
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Lifestyle;
