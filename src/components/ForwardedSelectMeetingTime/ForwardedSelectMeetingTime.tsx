import { forwardRef } from "react";
import SelectMeetingTime from "../SelectMeetingTime/SelectMeetingTime.tsx";

const ForwardedSelectMeetingTime = forwardRef((props, ref) => {
  return <SelectMeetingTime {...props} forwardedRef={ref} />;
});

export default ForwardedSelectMeetingTime;
