import Phone from "Components/Fields/Phone/Phone";

export const columns = (tab_name) => {
 switch (tab_name) {
  case "users":
   return [
    {
     accessorFn: (row) => row.first_name,
     header: "First name",
    },
    {
     accessorFn: (row) => row.last_name,
     header: "Last name",
    },
    {
     accessorFn: (row) => <Phone phone={row.phone_number} />,
     header: "Phone number",
    },
    {
     accessorFn: (row) => row.username,
     header: "User name",
    },
    {
     accessorFn: (row) => row.roles?.name,
     header: "Role name",
    },
   ];

  default:
   return [];
 }
};
