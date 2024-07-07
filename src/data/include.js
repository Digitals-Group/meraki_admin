export const include = (tab_name) => {
 switch (tab_name) {
  case "user":
   return {
    role: true,
   };

  case "career-apply":
   return {
    career: true,
   };

  default:
   return {};
 }
};
