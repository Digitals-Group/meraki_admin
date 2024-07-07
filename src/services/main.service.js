import { useMutation, useQuery } from "react-query";
import { requestUnion } from "./http-client";

const mainService = {
 getMain: (queryParams, tab_name) =>
  requestUnion.post(`/${tab_name}/list`, queryParams),
 getMainById: (queryParams, tab_name) =>
  requestUnion.post(`/${tab_name}/read`, queryParams),
 postMain: (data, tab_name) => requestUnion.post(`/${tab_name}`, data),
 patchMain: ({ tab_name, data }) =>
  requestUnion.patch(`/${tab_name}/update`, data),
 putMain: ({ id, tab_name, apiData }) =>
  requestUnion.put(`/${tab_name}/${id}`, apiData),
 deleteMain: ({ id, tab_name }) => requestUnion.delete(`/${tab_name}/${id}`),
};

export const UseGetMain = ({ tab_name, queryParams }) => {
 return useQuery(["GET_MAIN", queryParams, tab_name], async () => {
  return await mainService.getMain(queryParams, tab_name).then((res) => res);
 });
};

export const UseGetMainById = ({ tab_name, queryParams, querySettings }) => {
 return useQuery(
  ["GET_MAIN_BY_ID", tab_name, queryParams],
  async () => {
   return await mainService
    .getMainById(queryParams, tab_name)
    .then((res) => res);
  },
  querySettings
 );
};

export const UsePostMain = (mutationSettings) => {
 return useMutation(({ data, tab_name }) => {
  mainService.postMain(data, tab_name);
 }, mutationSettings);
};

export const UsePatchMain = (mutationSettings) => {
 return useMutation(
  ({ tab_name, data }) =>
   mainService?.patchMain({
    tab_name,
    data,
   }),
  mutationSettings
 );
};

export const UseDeleteMain = (mutationSettings) => {
 return useMutation(
  ({ id, tab_name }) => mainService.deleteMain({ id, tab_name }),
  mutationSettings
 );
};
