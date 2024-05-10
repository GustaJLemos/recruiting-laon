import { format } from "date-fns";

export const datetimePtBr = (date: Date) => {
  return format(new Date(date), "dd/MM/yyyy");
};

export const datetimeEnUs = (date: Date) => {
  return format(new Date(date), "MM/dd/yyyy");
};
