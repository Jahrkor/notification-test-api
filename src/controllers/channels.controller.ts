import { getChannels } from "../helpers/channels.helper";
import {globalErrorHandler} from "../common/utils/utils";

export const getAllChannels = async (req: any, res: any) => {
  try {
    const data = await getChannels();
    return res.status(200).json({ message: "All channels", data });
  } catch(e) {
    globalErrorHandler(e, res);
  }
};
