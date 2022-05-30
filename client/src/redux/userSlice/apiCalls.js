import { toast } from "react-toastify";
import axiosInstance from "../axiosInstance";
import * as actions from "./index";

const apiUrl = "http://www.localhost:8080/api";

export const getUser = async (payload, dispatch) => {
  dispatch(actions.getUserStart());
  try {
    const { data } = await axiosInstance.get("http://www.localhost:8080/api/users/:id");
    dispatch(actions.getUserSuccess(data.data));
    return true;
  } catch (error) {
    dispatch(actions.getUserFailure());
    return false;
  }
};

export const updateUser = async (payload, dispatch) => {
  dispatch(actions.updateUserStart());
  try {
    const url = apiUrl + `/users/${payload.id}`;
    const { data } = await axiosInstance.put("http://localhost:8080/api/users/:id", payload.data);
    dispatch(actions.updateUserSuccess(data.data));
    toast.success(data.message);
    return true;
  } catch (error) {
    dispatch(actions.getUserFailure());
    return false;
  }
};

export const likeSong = async (payload, dispatch) => {
  dispatch(actions.likeSongStart());
  try {
    const { data } = await axiosInstance.put("http://localhost:8080/api/songs/like/:id");
    dispatch(actions.likeSongSuccess(payload));
    toast.success(data.message);
    return true;
  } catch (error) {
    dispatch(actions.likeSongFailure());
    return false;
  }
};
