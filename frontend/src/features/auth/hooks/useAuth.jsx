import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { currentLoggedEmployee, loginEmployee } from "../state/auth/authAction";
import { addEmplyee } from "../state/auth/authSlice";

export const useAuth = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onRegisterSubmit = (data) => {
    console.log(data);
  };

  const onLoginSubmit = (data) => {
    dispatch(loginEmployee(data));
  };



  return {
    register,
    handleSubmit,
    errors,
    onRegisterSubmit,
    onLoginSubmit,
    navigate,
  };
};
