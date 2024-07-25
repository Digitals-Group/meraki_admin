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

    case "career":
      return [
        {
          index: 0,
          label: "Main",
          value: tab_name,
        },
        {
          index: 1,
          label: "Career Apply",
          value: "career-apply",
          relation_name: "career_id",
        },
      ];

    case "project":
      return [
        {
          index: 0,
          label: "Main",
          value: tab_name,
        },
        {
          index: 1,
          label: "Project Solution",
          value: "project-solution",
          relation_name: "projectId",
        },
      ];

    case "project-category":
      return [
        {
          index: 0,
          label: "Main",
          value: tab_name,
        },
        {
          index: 1,
          label: "Project",
          value: "project",
          relation_name: "projectCategoryId",
        },
      ];

    case "service":
      return [
        {
          index: 0,
          label: "Main",
          value: tab_name,
        },
        {
          index: 1,
          label: "Service Image",
          value: "service-image",
          relation_name: "serviceId",
        },
        {
          index: 2,
          label: "Service Step",
          value: "service-step",
          relation_name: "serviceId",
        },
      ];

    case "service-category":
      return [
        {
          index: 0,
          label: "Main",
          value: tab_name,
        },
        {
          index: 1,
          label: "Service",
          value: "service",
          relation_name: "serviceCategoryId",
        },
      ];

    case "contact":
      return [
        {
          index: 0,
          label: "Main",
          value: tab_name,
        },
        {
          index: 1,
          label: "Service",
          value: "service",
          relation_name: "contactId",
        },
      ];

    default:
      return [];
  }
};
