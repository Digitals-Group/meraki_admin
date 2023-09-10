import { useMutation, useQuery } from "react-query";
import { requestUnion } from "./http-client";

const userService = {
  getUsers: (queryParams) =>
    requestUnion.get("/user", {
      params: queryParams,
    }),
  getUsersById: (id) => requestUnion.get(`/user/${id}`),
  postUser: (data) => requestUnion.post("/user", data),
  putUser: ({ id, apiData }) => requestUnion.put(`/user/${id}`, apiData),
  deleteUser: (id) => requestUnion.delete(`/user/${id}`),
};

export const UseGetUsers = ({ queryParams }) => {
  return useQuery(["GET_USERS", queryParams], async () => {
    return await userService.getUsers(queryParams).then((res) => res);
  });
};

export const UseGetUsersById = ({ id, querySettings }) => {
  return useQuery(
    ["GET_USERS_BY_ID", id],
    async () => {
      return await userService.getUsersById(id).then((res) => res);
    },
    querySettings
  );
};

export const UsePostUsers = (mutationSettings) => {
  return useMutation((data) => userService.postUser(data), mutationSettings);
};

export const UsePutUsers = (mutationSettings) => {
  return useMutation(
    ({ id, apiData }) => userService.putUser({ id, apiData }),
    mutationSettings
  );
};

export const UseDeleteUsers = (mutationSettings) => {
  return useMutation((id) => userService.deleteUser(id), mutationSettings);
};
