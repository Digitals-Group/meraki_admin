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
];
