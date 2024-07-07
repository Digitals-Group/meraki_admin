export const relationTabs = (tab_name) => {
 switch (tab_name) {
  case "role":
   return [
    {
     index: 0,
     label: "Main",
     value: tab_name,
    },
    {
     index: 1,
     label: "User",
     value: "user",
     relation_name: "role_id",
    },
   ];

  default:
   return [];
 }
};
