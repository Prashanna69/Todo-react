import { Heading, Text } from "@chakra-ui/react";

export default function DateInfo() {
  const date = new Date();
  const day = date.getDay();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const todayDay = days[day];

  const month = date.getMonth();

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const todayMonth = months[month];

  const todayDate = date.getDate();

  const todayYear = date.getFullYear();

  return (
    <>
      <Heading>{todayDay}</Heading>
      <Text fontSize="lg">
        {todayMonth}
        {todayDate}, {todayYear}
      </Text>
    </>
  );
}
