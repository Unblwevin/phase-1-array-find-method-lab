const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ]

  function superbowlWin(records) {
    for (let i = 0; i < records.length; i++) {
      if (records[i].result === "W") {
        return records[i].year;
      }
    }
}