function saveEntry() {
  const entry = document.getElementById('journalEntry').value;
  if (entry.trim() === "") {
    alert("Write something before saving!");
    return;
  }
  const date = new Date().toLocaleDateString();
  const savedEntries = JSON.parse(localStorage.getItem('entries') || "[]");
  savedEntries.push({date, entry});
  localStorage.setItem('entries', JSON.stringify(savedEntries));
  alert('Entry saved successfully!');
  document.getElementById('journalEntry').value = '';
}
