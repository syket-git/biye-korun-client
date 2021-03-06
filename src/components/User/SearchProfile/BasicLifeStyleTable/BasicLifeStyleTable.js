import React from 'react';
import { useSelector } from 'react-redux';

const BasicLifeStyleTable = () => {
  const profileData = useSelector((state) => state.getProfileById);

  return (
    <div>
      <div className="shadow px-3 pb-3 mt-5">
        <div className="row d-flex justify-content-between mt-3 pt-3 mx-2 pb-3 table-header-row">
          <h3>Basic & LifeStyle</h3>
        </div>
        <div className="row d-flex justify-content-between mt-2 mx-2 table-row">
          <p>Interests</p>
          <p>Pool, Card, Swimming</p>
        </div>
        <div className="row d-flex justify-content-between mt-2 mx-2 table-row">
          <p>Smoking</p>
          <p>Never</p>
        </div>
        <div className="row d-flex justify-content-between mt-2 mx-2 table-row">
          <p>Language</p>
          <p>
            {profileData?.getProfileById?.user_profile[0]?.language_id.name}
          </p>
        </div>
        <div className="row d-flex justify-content-between mt-2 mx-2 table-row">
          <p>Grew Up In</p>
          <p>Bangladesh</p>
        </div>
        <div className="row d-flex justify-content-between mb-4 mt-2 mx-2 table-row">
          <p>Name</p>
          <p>{profileData?.getProfileById?.user_profile[0]?.profile_name}</p>
        </div>
      </div>
    </div>
  );
};

export default BasicLifeStyleTable;
