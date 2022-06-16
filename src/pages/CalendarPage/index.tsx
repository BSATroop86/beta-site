import { Page } from "../../components/Page";
import { useT86Title } from "../../hooks/useT86Title";
import Calendar from "./calendar.json";

export const CalendarPage = () => {
  useT86Title("Calendar");

  return (
    <Page>
      <a href="./content/Calendar.pdf">Download</a>
      {Calendar.map((year) => (
        <div>
          <h1>{year.year}</h1>
          {year.months.map((month) => (
            <>
              <h2>{month.month}</h2>
              <ul>
                {month.events.map((event) => (
                  <li>
                    {event.day}: {event.event}
                  </li>
                ))}
              </ul>
            </>
          ))}
        </div>
      ))}
    </Page>
  );
};
