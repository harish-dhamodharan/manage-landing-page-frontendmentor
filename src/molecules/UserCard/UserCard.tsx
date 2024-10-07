import { FC } from "react";
import IUserCard from "./UserCard.interface";
import "./UserCard.css";

const UserCard: FC<IUserCard> = ({ photo, name, testimonial }) => {
  return (
    <article>
      <div className="card">
        <div className="image-container">
          <img
            height="100px"
            width="100px"
            src={photo}
            alt={`${name}'s photo`}
          />
        </div>
        <h2 className="Hero-card">{name}</h2>
        <p>{testimonial}</p>
      </div>
    </article>
  );
};

export default UserCard;
