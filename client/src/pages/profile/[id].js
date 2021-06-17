import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadIcon from "../../images/loading.gif";
import Info from "../../components/profile/Info";
import { getProfileUsers } from "../../redux/actions/profileAction";
import { useParams } from "react-router-dom";


function Profile() {
  const { profile, auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  const { id } = useParams();

//   useEffect(() => {
//     if (profile.ids.every((item) => item !== id)) {
//       dispatch(getProfileUsers({ id, auth }));
//     }
//   }, [id, auth, dispatch, profile.ids]);

  return (
    <div className="profile">
      {profile.loading ? <img src={LoadIcon} alt="" /> : <Info />}
    </div>
  );
}

export default Profile;
