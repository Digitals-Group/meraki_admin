export const relationFields = (tab_name) => {
 switch (tab_name) {
  case "users":
   return [
    {
     tab_name: "roles",
     inputName: "role_id",
     isMulti: false,
    },
   ];

  default:
   return [];
 }
};
