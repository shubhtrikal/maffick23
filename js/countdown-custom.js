jQuery(document).ready(function () {
  $(function () {
    $("#defaultCountdown").countdown({
      until: new Date("2023-03-03"),
    }); // year, month, date, hour
  });
});
