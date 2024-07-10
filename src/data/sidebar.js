import {
 AppRegistration,
 AutoAwesomeMosaic,
 GroupWork,
 EmojiEvents,
 Person,
 Reviews,
 Contacts,
 Quiz,
 AssignmentTurnedIn,
 Approval,
 Article,
 Category,
 EmojiObjects,
 AdsClick,
 Dashboard,
 Feed,
 ImageSearch,
 ContentPasteGo,
 ElectricalServices,
} from "@mui/icons-material";

export const sidebarData = [
 {
  name: "User",
  icon: <Person sx={{ color: "#fff" }} />,
  eventKey: "user",
 },
 {
  name: "Role",
  icon: <AppRegistration sx={{ color: "#fff" }} />,
  eventKey: "role",
 },
 {
  name: "Blog",
  icon: <AutoAwesomeMosaic sx={{ color: "#fff" }} />,
  eventKey: "blog",
 },
 {
  name: "Partner",
  icon: <GroupWork sx={{ color: "#fff" }} />,
  eventKey: "partner",
 },
 {
  name: "Award",
  icon: <EmojiEvents sx={{ color: "#fff" }} />,
  eventKey: "award",
 },
 {
  name: "Review",
  icon: <Reviews sx={{ color: "#fff" }} />,
  eventKey: "review",
 },
 {
  name: "Contact",
  icon: <Contacts sx={{ color: "#fff" }} />,
  eventKey: "contact",
 },
 {
  name: "Faq",
  icon: <Quiz sx={{ color: "#fff" }} />,
  eventKey: "faq",
 },
 {
  name: "Career",
  icon: <AssignmentTurnedIn sx={{ color: "#fff" }} />,
  eventKey: "career",
 },
 {
  name: "Career Apply",
  icon: <Approval sx={{ color: "#fff" }} />,
  eventKey: "career-apply",
 },
 {
  name: "Article",
  icon: <Article sx={{ color: "#fff" }} />,
  eventKey: "article",
 },
 {
  name: "Project Category",
  icon: <Category sx={{ color: "#fff" }} />,
  eventKey: "project-category",
 },
 {
  name: "Project Solution",
  icon: <EmojiObjects sx={{ color: "#fff" }} />,
  eventKey: "project-solution",
 },
 {
  name: "Project Result",
  icon: <AdsClick sx={{ color: "#fff" }} />,
  eventKey: "project-result",
 },
 {
  name: "Project",
  icon: <Dashboard sx={{ color: "#fff" }} />,
  eventKey: "project",
 },
 {
  name: "Service Category",
  icon: <Feed sx={{ color: "#fff" }} />,
  eventKey: "service-category",
 },
 {
  name: "Service Image",
  icon: <ImageSearch sx={{ color: "#fff" }} />,
  eventKey: "service-image",
 },
 {
  name: "Service Step",
  icon: <ContentPasteGo sx={{ color: "#fff" }} />,
  eventKey: "service-step",
 },
 {
  name: "Service",
  icon: <ElectricalServices sx={{ color: "#fff" }} />,
  eventKey: "service",
 },
];
