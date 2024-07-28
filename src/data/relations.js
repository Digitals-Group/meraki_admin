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

    case "project-solution":
      return [
        {
          tab_name: "project",
          inputName: "projectId",
          isMulti: false,
        },
      ];

    case "project":
      return [
        {
          tab_name: "project-category",
          inputName: "projectCategoryId",
          isMulti: false,
        },
      ];

    case "service-image":
      return [
        {
          tab_name: "service",
          inputName: "serviceId",
          isMulti: false,
        },
      ];

    case "service-step":
      return [
        {
          tab_name: "service",
          inputName: "serviceId",
          isMulti: false,
        },
      ];

    case "service":
      return [
        {
          tab_name: "service-category",
          inputName: "serviceCategoryId",
          isMulti: false,
        },
      ];

    default:
      return [];
  }
};
