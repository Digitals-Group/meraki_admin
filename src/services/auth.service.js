import { useMutation } from "react-query";
import { requestUnion } from "./http-client";

const authService = {
  register: (data) => requestUnion.post(`/login`, data),
};

export const UseAuth = (mutationSettings) => {
  return useMutation((data) => authService.register(data), mutationSettings);
};
