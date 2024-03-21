function superbowlWin(records) { 
    const winRecord = records.find(record => record.result === "W");
    if (winRecord) {
        return winRecord.year;
    }
}
console.log(records);