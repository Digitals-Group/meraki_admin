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
} from "@mui/icons-material";

export const sidebarData = [
 {
  name: "Users",
  icon: <Person sx={{ color: "#fff" }} />,
  eventKey: "users",
 },
 {
  name: "Roles",
  icon: <AppRegistration sx={{ color: "#fff" }} />,
  eventKey: "roles",
 },
 {
  name: "Blogs",
  icon: <AutoAwesomeMosaic sx={{ color: "#fff" }} />,
  eventKey: "blog",
 },
 {
  name: "Partners",
  icon: <GroupWork sx={{ color: "#fff" }} />,
  eventKey: "partners",
 },
 {
  name: "Awards",
  icon: <EmojiEvents sx={{ color: "#fff" }} />,
  eventKey: "awards",
 },
 {
  name: "Reviews",
  icon: <Reviews sx={{ color: "#fff" }} />,
  eventKey: "review",
 },
 {
  name: "Contacts",
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
];
