import { getUsers } from "../helpers/users.helper";
import {globalErrorHandler} from "../common/utils/utils";

export const getAllUsers = async (req: any, res: any) => {
  try {
    const data = await getUsers();
    return res.status(200).json({ message: "All Users", data });
  } catch (e) {
    globalErrorHandler(e, res);
  }
};
