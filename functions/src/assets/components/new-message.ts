export const newMessage = `
<div class="title">
היי רוני!
</div>
<div class="body">
קיבלת הודעה דרך האתר. הינה תוכן ההודעה:
</div>
<div class="body">נכון לתאריך: {{ date }}</div>
<ul class="users-container">
<li class="fullName">שם מלא: {{ fullName }}</li>
<li class="number">מספר נייד: {{ phone }}</li>
<li class="email">כתובת אימייל: {{ email }}</li>
<span style="margin-top: 5rem;" class="message-title">
  תוכן ההודעה:
</span>
<p class="message">{{ message }}</p>
</ul>
<div class="button-container">
<a class="button" href="mailto:{{ email }}">
  שלח לו מייל!
</a>
</div>`
