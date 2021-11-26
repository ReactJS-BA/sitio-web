import { useQuery } from "react-query";

const reactBAMeetupId = "";
const meetupApiKey = "";

const meetupApiURL = `https://api.meetup.com/2/events?group_id=${reactBAMeetupId}&status=upcoming&order=time&limited_events=False&desc=false&offset=0&format=json&page=50&fields=&sign=true&key=${meetupApiKey}`;

const fetchMeetupData = async () => {
  const response = await fetch(meetupApiURL);

  if (!response.ok) {
    throw new Error("Unable to fetch data");
  }

  return response.json();
};

const useFetch = () => {
  const query = useQuery("meetup", fetchMeetupData);

  return { ...query };
};

export default useFetch;
