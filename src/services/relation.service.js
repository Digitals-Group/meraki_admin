import { useQueries } from "react-query";
import { requestUnion } from "./http-client";

const relationService = {
  getRelations: (tab_name) =>
    requestUnion.get(`/${tab_name}`, { params: { limit: 100, offset: 0 } }),
};

export const UseGetRelations = ({ list }) => {
  return useQueries(
    list?.map((item) => {
      return {
        queryKey: ["GET_RELATIONS", item],
        queryFn: async () => {
          return await relationService
            .getRelations(item.tab_name)
            .then((res) => {
              res.inputName = item.inputName;
              res.isMulti = item.isMulti;
              res.tab_name = item.tab_name;
              return res;
            });
        },
        keepPreviousData: true,
        enabled: !!list?.length,
      };
    })
  );
};
