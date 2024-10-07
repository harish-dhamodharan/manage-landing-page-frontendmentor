import IUserCard from "../../molecules/UserCard/UserCard.interface";
import anishaLiPhoto from "./../../assets/avatar-anisha.png";
import aliBravoPhoto from "./../../assets/avatar-ali.png";
import richardWattsPhoto from "./../../assets/avatar-richard.png";
import shanaiGoughPhoto from "./../../assets/avatar-shanai.png";

const HEADING = "What they’ve said";
const GET_STARTED = "Get Started";
const TESTIMONIALS: IUserCard[] = [
  {
    photo: anishaLiPhoto,
    name: "Anisha Li",
    testimonial: `“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”`,
  },
  {
    photo: aliBravoPhoto,
    name: "Ali Bravo",
    testimonial: `“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”`,
  },
  {
    photo: richardWattsPhoto,
    name: "Richard Watts",
    testimonial: `“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”`,
  },
  {
    photo: shanaiGoughPhoto,
    name: "Shanai Gough",
    testimonial: `“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”`,
  },
];

export { TESTIMONIALS, HEADING, GET_STARTED };
