export const relationFields = (tab_name) => {
 switch (tab_name) {
  case "user":
   return [
    {
     tab_name: "role",
     inputName: "role_id",
     isMulti: false,
    },
   ];

  case "career-apply":
   return [
    {
     tab_name: "career",
     inputName: "career_id",
     isMulti: false,
    },
   ];

  default:
   return [];
 }
};
