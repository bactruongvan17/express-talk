import { BCryptHashService } from "./service/bcrypt-hash.service";

export const getHashService = () => {
  return new BCryptHashService();
};
