import React, { Fragment, useEffect } from "react";
// import { useSelector,useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import { Link } from "react-router-dom";
import "./Profile.css";
// import { clearErrors, deleteProfile } from "../../actions/userAction";
// import { useAlert } from "react-alert";
// import { DELETE_PROFILE_SUCCESS } from "../../constants/userConstants";

const Profile = ({ history,params }) => {
  const {  user, loading, isAuthenticated } = useSelector((state) => state.user);
  // const { error, user, loading, isAuthenticated ,home} = useSelector((state) => state.user);
  useEffect(() => {
    if (isAuthenticated === false) {
      history.push("/login");
    }
  }, [history, isAuthenticated]); 
  
  

  //Profile delete code
  // const dispatch = useDispatch();
  // const alert = useAlert(); 
  //   const {
  //     error: deleteError,
  //     isDeleted,
  //     message,
  //   } = useSelector((state) => state.profile);
  
  //   const deleteUserHandler = (id) => {
  //     dispatch(deleteProfile(id));
  //   };
  
  //   useEffect(() => {
  //     if (error) {
  //       alert.error(error);
  //       dispatch(clearErrors());
  //     }
  
  //     if (deleteError) {
  //       alert.error(deleteError);
  //       dispatch(clearErrors());
  //     }
  
  //     if (isDeleted) {
  //       alert.success(message);
  //       // history.push("/admin/users");
  //       dispatch({ type: DELETE_PROFILE_SUCCESS });
  //     }
  
  //     dispatch();
  //   }, [dispatch, alert, error, deleteError, history, isDeleted, message]);
  

 

 
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`${user.name}'s Profile`} />
          <div className="profileContainer">
            <div>
              <h1>My Profile</h1>
              <img src={user.avatar.url} alt={user.name} />
              <Link to="/me/update">Edit Profile</Link>
              {/* <Link to="/" onClick={() => deleteUserHandler(user.id) }>Delete Profile</Link> */}
            </div>
            <div>
              <div>
                <h4>Full Name</h4>
                <p>{user.name}</p>
              </div>

              <div>
                <h4>Mobile</h4>
                <p>{user.mobile}</p>
              </div>
              <div>
                <h4>Email</h4>
                <p>{user.email}</p>
              </div>
              <div>
                <h4>Joined On</h4>
                <p>{String(user.createdAt).substr(0, 10)}</p>
              </div>

              <div>
                <Link to="/orders">My Orders</Link>
                <Link to="/password/update">Change Password</Link>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
 }
export default Profile;
