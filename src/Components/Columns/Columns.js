import Image from "Components/Fields/Image/Image";
import Phone from "Components/Fields/Phone/Phone";

export const columns = (tab_name) => {
  switch (tab_name) {
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
          accessorFn: (row) => <Phone phone={row.phone_number} />,
          header: "Phone number",
        },
        {
          accessorFn: (row) => row.username,
          header: "User name",
        },
        {
          accessorFn: (row) => row.role_data?.name,
          header: "Role name",
        },
      ];
    case "application":
      return [
        {
          accessorFn: (row) => row.full_name,
          header: "Full name",
        },
        {
          accessorFn: (row) => <Phone phone={row.phone_number} />,
          header: "Phone number",
        },
        {
          accessorFn: (row) => row.description,
          header: "Description",
        },
      ];
    case "banner":
      return [
        {
          accessorFn: (row) => <Image url={row.image_url} />,
          header: "Image",
        },
      ];
    case "category":
      return [
        {
          accessorFn: (row) => row.name,
          header: "Category name",
        },
        {
          accessorFn: (row) => <Image url={row.image_url} />,
          header: "Category image",
        },
      ];
    case "product":
      return [
        {
          accessorFn: (row) => row.title,
          header: "Name",
        },
        {
          accessorFn: (row) => <Image url={row.image_url} />,
          header: "Product image",
        },
        {
          accessorFn: (row) => row.subtitle,
          header: "Subtitle",
        },
        {
          accessorFn: (row) => row.description,
          header: "Description",
        },
        {
          accessorFn: (row) => row.price,
          header: "Price",
        },
        {
          accessorFn: (row) => row.rating,
          header: "Rating",
        },
        {
          accessorFn: (row) => row.category.name,
          header: "Category",
        },
        {
          accessorFn: (row) => row.university.title,
          header: "University",
        },
        {
          accessorFn: (row) => row.sizes?.map((elem) => elem?.code + "/"),
          header: "Sizes",
        },
      ];
    case "size":
      return [
        {
          accessorFn: (row) => row.code,
          header: "Size",
        },
      ];
    case "university":
      return [
        {
          accessorFn: (row) => row.title,
          header: "Name",
        },
        {
          accessorFn: (row) => <Image url={row.image_url} />,
          header: "Image",
        },
        {
          accessorFn: (row) => row.description,
          header: "Description",
        },
      ];
    case "product_image":
      return [
        {
          accessorFn: (row) => row.product_data?.title,
          header: "Product name",
        },
        {
          accessorFn: (row) => row.rgb,
          header: "Color",
        },
        {
          accessorFn: (row) => row.image_urls,
          header: "Images",
        },
      ];

    default:
      return [];
  }
};
