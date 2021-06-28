import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadIcon from "../../images/loading.gif";
import Info from "../../components/profile/Info";
import { getProfileUsers } from "../../redux/actions/profileAction";
import { useParams } from "react-router-dom";
import Posts from "../../components/profile/Posts";

function Profile() {
  const { profile, auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    if (profile.ids.every((item) => item !== id)) {
      dispatch(getProfileUsers({ id, auth }));
    }
  }, [id, auth, dispatch, profile.ids]);

  return (
    <div className="profile">
      {profile.loading ? (
        <img className="d-block mx-auto my-4" src={LoadIcon} alt="loading" />
      ) : (
        <Info auth={auth} profile={profile} dispatch={dispatch} id={id} />
      )}

      <Posts auth={auth} profile={profile} dispatch={dispatch} id={id} />
    </div>
  );
}

export default Profile;
