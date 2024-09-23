const daySelect = document.getElementById('day');
const timeInput = document.getElementById('time');
const activitySelect = document.getElementById('activity');
const setReminderBtn = document.getElementById('setReminder');
const chimeAudio = document.getElementById('chime');
let reminders = [];
setReminderBtn.addEventListener('click', () => {
    const day = daySelect.value;
    const time = timeInput.value;
    const activity = activitySelect.value;

    if (day && time && activity) {
        reminders.push({ day, time, activity });
        alert(`Reminder set for ${activity} on ${day} at ${time}`);
    } else {
        alert("Please fill in all fields.");
    }
});
setInterval(() => {
    const currentDate = new Date();
    const currentDay = currentDate.toLocaleString('en-US', { weekday: 'long' });
    const currentTime = currentDate.toTimeString().slice(0, 5);
    reminders.forEach(reminder => {
        if (reminder.day === currentDay && reminder.time === currentTime) {
            //alert(`Reminder: ${reminder.activity}`);
            chimeAudio.play();
        }
    });
}, 60000);
