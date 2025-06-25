import type { User } from "../../dummyApi/types";
import { Button } from "../Button";
import styles from "./UserActions.module.css";

export interface UserActionsProps {
  user: User;
}

export const UserActions = ({ user }: UserActionsProps) => {
  return (
    <div className={styles["actions"]}>
      <div className={styles["payment-details"]}>
        <h2 className={styles["cost"]}>${user.hourlyRate} USD<p>per hour</p></h2>
      </div>
      <div className={styles["actions__buttons"]}>
        <Button variant="secondary" text="Invite to bid" fullWidth/>
        <Button variant="primary" text="Contact" fullWidth/>
      </div>
    </div>
  );
};
