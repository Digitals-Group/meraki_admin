export const relationTabs = (tab_name) => {
 switch (tab_name) {
  case "roles":
   return [
    {
     index: 0,
     label: "Main",
     value: tab_name,
    },
    {
     index: 1,
     label: "Users",
     value: "users",
     relation_name: "role_id",
    },
   ];

  default:
   return [];
 }
};
