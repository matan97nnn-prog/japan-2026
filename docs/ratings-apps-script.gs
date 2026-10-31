/**
 * Japan 2026 ratings → Google Sheet.
 * Paste into the sheet: Extensions → Apps Script, then
 * Deploy → New deployment → Web app → Execute as: Me, Who has access: Anyone.
 * Put the web-app URL in src/lib/ratings.ts (RATINGS_ENDPOINT).
 *
 * Each rating has a stable id (who|day|stop): re-rating updates the same row.
 */
const COLS = ["sent_at", "rated_at", "who", "day", "date", "kind", "stop", "stars", "tags", "note", "id"];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const sheet = SpreadsheetApp.getActive().getSheetByName("Ratings");
    const rows = JSON.parse(e.postData.contents).rows || [];
    const last = sheet.getLastRow();
    const ids = last > 1 ? sheet.getRange(2, COLS.length, last - 1, 1).getValues().map((r) => r[0]) : [];
    const now = new Date().toISOString();
    rows.forEach((r) => {
      if (!r || !r.id) return;
      const values = [now, r.rated_at, r.who, r.day, r.date, r.kind, r.stop, r.stars, (r.tags || []).join(", "), r.note || "", r.id];
      const i = ids.indexOf(r.id);
      if (i >= 0) sheet.getRange(i + 2, 1, 1, COLS.length).setValues([values]);
      else {
        sheet.appendRow(values);
        ids.push(r.id);
      }
    });
    return ContentService.createTextOutput("ok");
  } finally {
    lock.releaseLock();
  }
}
