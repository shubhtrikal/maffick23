jQuery(document).ready(function () {
  $(function () {
    $("#defaultCountdown").countdown({
      until: new Date("2023-03-04"),
    }); // year, month, date, hour
  });
});
