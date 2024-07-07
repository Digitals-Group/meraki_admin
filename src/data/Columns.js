import Image from "Components/Fields/Image/Image";
import Phone from "Components/Fields/Phone/Phone";
import Status from "Components/Fields/Status/Status";
import Video from "Components/Fields/Video/Video";

export const tableColumns = (tab_name) => {
 switch (tab_name) {
  case "role":
   return [
    {
     accessorFn: (row) => row.name,
     header: "Name",
    },
   ];

  case "user":
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
     accessorFn: (row) => row.username,
     header: "User name",
    },
    {
     accessorFn: (row) => <Phone phone={row.phone_number} />,
     header: "Phone number",
    },
    {
     accessorFn: (row) => row.roles?.name,
     header: "Role name",
    },
   ];

  case "blog":
   return [
    {
     accessorFn: (row) => row.title_uz,
     header: "Title uz",
    },
    {
     accessorFn: (row) => row.title_en,
     header: "Title en",
    },
    {
     accessorFn: (row) => row.title_ru,
     header: "Title ru",
    },
    {
     accessorFn: (row) => row.description_uz,
     header: "Description uz",
    },
    {
     accessorFn: (row) => row.description_en,
     header: "Description en",
    },
    {
     accessorFn: (row) => row.description_ru,
     header: "Description ru",
    },
    {
     accessorFn: (row) => <Image url={row.image} />,
     header: "Image",
    },
   ];

  case "partner":
   return [
    {
     accessorFn: (row) => <Image url={row.image} />,
     header: "Image",
    },
   ];

  case "award":
   return [
    {
     accessorFn: (row) => row.title_uz,
     header: "Title uz",
    },
    {
     accessorFn: (row) => row.title_en,
     header: "Title en",
    },
    {
     accessorFn: (row) => row.title_ru,
     header: "Title ru",
    },
    {
     accessorFn: (row) => row.description_uz,
     header: "Description uz",
    },
    {
     accessorFn: (row) => row.description_en,
     header: "Description en",
    },
    {
     accessorFn: (row) => row.description_ru,
     header: "Description ru",
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
     accessorFn: (row) => row.name_uz,
     header: "Name uz",
    },
    {
     accessorFn: (row) => row.name_en,
     header: "Name en",
    },
    {
     accessorFn: (row) => row.name_ru,
     header: "Name ru",
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
     accessorFn: (row) => row.question_uz,
     header: "Question uz",
    },
    {
     accessorFn: (row) => row.question_en,
     header: "Question en",
    },
    {
     accessorFn: (row) => row.question_ru,
     header: "Question ru",
    },
    {
     accessorFn: (row) => row.answer_uz,
     header: "Answer uz",
    },
    {
     accessorFn: (row) => row.answer_en,
     header: "Answer en",
    },
    {
     accessorFn: (row) => row.answer_ru,
     header: "Answer ru",
    },
   ];

  case "career":
   return [
    {
     accessorFn: (row) => row.name_uz,
     header: "Name_uz",
    },
    {
     accessorFn: (row) => row.name_en,
     header: "Name_en",
    },
    {
     accessorFn: (row) => row.name_ru,
     header: "Name_ru",
    },
    {
     accessorFn: (row) => row.description_uz,
     header: "Description uz",
    },
    {
     accessorFn: (row) => row.description_en,
     header: "Description en",
    },
    {
     accessorFn: (row) => row.description_ru,
     header: "Description ru",
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
    {
     accessorFn: (row) => row.career?.name,
     header: "Career name",
    },
   ];

  default:
   return [];
 }
};
