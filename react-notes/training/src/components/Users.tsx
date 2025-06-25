import type { User } from "../dummyApi/types";
import styles from "./Users.module.css";
import { UserActions } from "./users/UserActions";
import { UserDetails } from "./users/UserDetails";
export interface UsersProps {
  users: User[];
}

export const Users = ({ users }: UsersProps) => {
  return (
    <div className={styles["users"]}>
      <div className={styles["users-filters"]}>
        <div className={styles["users-pagination"]}>
        <p><b>Top results: </b></p><p> 1-20 of 1M results</p>
        </div>
        <div className={styles["users-sort"]}>
          <p>Sort by: </p>
          <input />
        </div>
      </div>
      <div className={styles["users-container"]}>
        {users.map((user) => {
          return (
            <div key={user.id} className={styles["user"]}>
              <div className={styles["pfp-container"]}>
                <img
                  className={styles["pfp"]}
                  src={`/src/assets/avatars/pfp-${user.id}.png`}
                  alt={`User ${user.id} pfp`}
                />
                {/* <Image /> possible solution when deploying? */}
              </div>
              <UserDetails user={user} />
              <UserActions user={user} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
