<template>
  <DxScheduler
    :data-source="dataSource"
    :current-date="currentDate"
    :views="views"
    :height="500"
    :editing="false"
    :show-all-day-panel="false"
    :start-day-hour="7"
    start-date-expr="start.dateTime"
    end-date-expr="end.dateTime"
    text-expr="summary"
    time-zone="Europe/Berlin"
    current-view="month"
  />

  <link
    rel="stylesheet"
    type="text/css"
    href="https://cdn3.devexpress.com/jslib/21.1.4/css/dx.light.css"
  />
</template>
<script>
import "whatwg-fetch";
import DxScheduler from "devextreme-vue/scheduler";
import CustomStore from "devextreme/data/custom_store";
/* import "devexpress-gantt/dist/dx-gantt.css";
import "devextreme/dist/css/dx.light.css";
 */
export default {
  components: {
    DxScheduler,
  },
  data() {
    return {
      views: ["day", "workWeek", "month"],
      currentDate: new Date(),
      dataSource: new CustomStore({
        load: (options) => this.getData(options, { showDeleted: false }),
      }),
    };
  },
  methods: {
    getData(_, requestOptions) {
      const PUBLIC_KEY = "AIzaSyCni75cMHQXGVLY3lD5DzJDqzkovn0hVB0",
        CALENDAR_ID = "a1qqgvonfmvj63bu488glj5r7s@group.calendar.google.com";
      const dataUrl = [
        "https://www.googleapis.com/calendar/v3/calendars/",
        CALENDAR_ID,
        "/events?key=",
        PUBLIC_KEY,
      ].join("");

      return fetch(dataUrl, requestOptions)
        .then((response) => response.json())
        .then((data) => data.items);
    },
  },
};
</script>
<style scoped>
/* @import "calender.css";
 */
</style>


