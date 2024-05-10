import { format } from "date-fns";

export const datetimePtBr = (date: Date) => {
  return format(new Date(date), "dd/MM/yyyy");
};
