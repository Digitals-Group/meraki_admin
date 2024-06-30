import Image from "Components/Fields/Image/Image";
import Phone from "Components/Fields/Phone/Phone";
import Status from "Components/Fields/Status/Status";
import Video from "Components/Fields/Video/Video";

export const tableColumns = (tab_name) => {
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

  case "roles":
   return [
    {
     accessorFn: (row) => row.name,
     header: "Name",
    },
   ];

  case "blog":
   return [
    {
     accessorFn: (row) => row.title,
     header: "Title",
    },
    {
     accessorFn: (row) => row.description,
     header: "Description",
    },
    {
     accessorFn: (row) => <Image url={row.image} />,
     header: "Image",
    },
   ];

  case "partners":
   return [
    {
     accessorFn: (row) => <Image url={row.image} />,
     header: "Image",
    },
   ];

  case "awards":
   return [
    {
     accessorFn: (row) => row.title,
     header: "Title",
    },
    {
     accessorFn: (row) => row.description,
     header: "Description",
    },
    {
     accessorFn: (row) => <Image url={row.image} />,
     header: "Image",
    },
   ];

  case "review":
   return [
    {
     accessorFn: (row) => <Video url={row.video} />,
     header: "Video",
    },
    {
     accessorFn: (row) => <Image url={row.image} />,
     header: "Image",
    },
    {
     accessorFn: (row) => row.name,
     header: "Name",
    },
    {
     accessorFn: (row) => row.company_name,
     header: "Company Name",
    },
    {
     accessorFn: (row) => row.position,
     header: "Position",
    },
    {
     accessorFn: (row) => row.review_text,
     header: "Review Text",
    },
   ];

  case "contact":
   return [
    {
     accessorFn: (row) => row.name,
     header: "Name",
    },
    {
     accessorFn: (row) => row.company_name,
     header: "Company Name",
    },
    {
     accessorFn: (row) => row.email,
     header: "Email",
    },
    {
     accessorFn: (row) => <Phone phone={row.phone_number} />,
     header: "Phone number",
    },
    {
     accessorFn: (row) => row.service,
     header: "Service",
    },
    {
     accessorFn: (row) => row.description,
     header: "Description",
    },
    {
     accessorFn: (row) => row.take_info,
     header: "Take Info",
    },
    {
     accessorFn: (row) => <Status status={row.is_Called} />,
     header: "Is Called",
    },
   ];

  case "faq":
   return [
    {
     accessorFn: (row) => row.question,
     header: "Question",
    },
    {
     accessorFn: (row) => row.answer,
     header: "Answer",
    },
   ];

  case "career":
   return [
    {
     accessorFn: (row) => row.name,
     header: "Name",
    },
    {
     accessorFn: (row) => row.description,
     header: "Description",
    },
   ];

  case "career-apply":
   return [
    {
     accessorFn: (row) => row.first_name,
     header: "First Name",
    },
    {
     accessorFn: (row) => row.last_name,
     header: "Last Name",
    },
    {
     accessorFn: (row) => <Phone phone={row.phone_number} />,
     header: "Phone number",
    },
    {
     accessorFn: (row) => row.email,
     header: "Email",
    },
    {
     accessorFn: (row) => row.resume,
     header: "Resume",
    },
    {
     accessorFn: (row) => row.cover_letter,
     header: "Cover Letter",
    },
    {
     accessorFn: (row) => <Status status={row.is_Called} />,
     header: "Is Called",
    },
   ];

  default:
   return [];
 }
};
