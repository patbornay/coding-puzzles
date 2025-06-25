import React from "react";
import type { User } from "../../dummyApi/types";
import { useGetSkills } from "../../dummyApi/useGetSkills";
import styles from "./UserDetails.module.css";

export interface UserDetailsProps {
  user: User;
}

export const UserDetails = ({ user }: UserDetailsProps) => {
  const { skills, loading, error } = useGetSkills({ ids: user.skills });

  return (
    <div className={styles["details"]}>
      <div className={styles["details__row"]}>
        <h2 className={styles["display-name"]}>{user.displayName}</h2>
        <h2 className={styles["username"]}>@{user.username}</h2>
      </div>
      <div className={styles["details__row"]}>
        <StarRating stars={Math.ceil(user.rating)} />
        <div className={styles["country"]}>{user.country.code}</div>
      </div>
      <div className={styles["tagline"]}>
        <b>{user.tagline}</b>
      </div>
      <div className={styles["description"]}>{user.description}</div>
      <div className={styles["skills"]}>
        {skills &&
          skills.map((skill, index) => (
            <React.Fragment key={`skill-${skill.id}`}>
              {skill.name} {index === skills.length - 1 ? "" : "- "}
            </React.Fragment>
          ))}
      </div>
    </div>
  );
};

function StarRating({ stars }: { stars: number }) {
  return (
    <div className={styles["rating"]}>
      {Array.from({ length: stars }, (_, index) => (
        <img
          key={index}
          className={styles["star"]}
          src={"/src/assets/star.svg"}
        />
      ))}
      {stars}
    </div>
  );
}
