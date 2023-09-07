import { useQuery } from "react-query";
import { requestUnion } from "./http-client";

const userService = {
  getUsers: (queryParams) =>
    requestUnion.get("/user", {
      params: queryParams,
    }),
};

export const UseGetUsers = ({ queryParams }) => {
  return useQuery(["GET_USERS", queryParams], async () => {
    return await userService.getUsers(queryParams).then((res) => res);
  });
};
