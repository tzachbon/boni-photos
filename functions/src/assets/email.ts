export const emailTemplate = `
<!DOCTYPE html>
<html lang="he">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans:300,400|Roboto&display=swap"
      rel="stylesheet"
    />
    <title>welcome user</title>
    <style>
      * {
        direction: rtl;
        clear: both;
        box-sizing: border-box;
      }

      a {
        text-decoration: none;
        color: inherit;
      }

      .template-container {
        position: relative;
        min-width: 359px;
        margin: auto;
        max-width: 677px;
        min-height: 583px;
        border-radius: 8px;
        background-color: #f7fbfe;
        border: solid 1px #e6e6e6;
        font-family: 'Open Sans', sans-serif;
        padding-bottom: 1rem;
      }

      .img {
        border-radius: 8px 8px 0 0;
        width: 100%;
        height: 145px;
        background-image: url('https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
        background-size: cover;
        background-repeat: no-repeat;
        /* box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.23); */
      }

      .content {
        padding: 5% 35px 5% 35px;
        color: #000000;
      }

      .title {
        font-size: 22px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 0.64;
        letter-spacing: normal;
        color: #000000;
        margin-bottom: 2rem;
      }

      .body {
        font-family: 'Open Sans', sans-serif;
        font-size: 16px;
        font-weight: 300;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.44;
        letter-spacing: normal;
        color: #000000;
        margin-bottom: 1rem;
        word-wrap: break-word;
      }

      .button-container {
        width: 100%;
        height: auto;
        text-align: center;
        padding-top: 2rem;
      }

      .button {
        display: block;
        margin: 0 auto;
        background: #202c40;
        padding: 12px 35px;
        color: white !important;
        border: none;
        font-size: 16px;
        cursor: pointer;
        text-decoration: none;
        display: inline-block;
        width: 10rem;
        padding: 0.4rem;
        text-align: center;
        object-fit: contain;
        border-radius: 186.5px;
        background-color: #32e6dd;
        transition: all 0.2s ease-in-out;
        box-shadow: 0 0.2rem 0.5rem #eee;
      }

      .button:hover {
        box-shadow: 0 0.4rem 1rem #eee;
      }

      .link-container {
        width: 359px;
        text-align: center;
        margin: auto;
        /* padding: 1rem 0; */
        display: block;
      }

      .link-container svg {
        margin: 0 0.3rem;
      }

      .link-text {
        text-align: center;
        margin: auto;
        cursor: pointer;
        font-size: 13px;
        font-weight: 300;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.62;
        letter-spacing: normal;
        text-align: center;
        color: #298cff;
        border-bottom: 0.2px solid #298cff;
      }

      .user {
        width: 90%;
        min-height: 3.5rem;
        border-radius: 2px;
        box-shadow: 0 2px 1px 0 rgba(178, 178, 178, 0.5);
        border: solid 1px #e9eaea;
        background-color: #ffffff;
        padding: 0 1rem 0 1rem;
        transition: all 0.2s ease-in-out;
        margin: 1rem auto;
        display: block;
      }

      .user:hover {
        box-shadow: 0 4px 4px 0 rgba(178, 178, 178, 0.4);
      }

      .clear {
      }

      .users-container {
        min-height: 200px;
      }

      .user .titles > * {
        margin: 0.3rem 0;
      }

      .flag {
        text-align: center;
        display: inline-block;
        padding-left: 0.5rem;
        min-width: 90px;
      }

      .flag .text {
        margin: auto;
        display: block;
      }

      .user .flags {
        padding-top: 0.3rem;
        margin-top: 0.4rem;
        border-left: 1px solid #f3f3f3;
        float: right;
        font-size: 12px;
      }

      .user .titles,
      .user .flags {
        vertical-align: middle;
        display: inline-block;
        height: 100%;
      }

      .user .titles .avatar {
        border-radius: 50%;
        vertical-align: middle;
        height: 3rem;
        width: 3rem;
        object-fit: cover;
      }

      .user .titles .title {
        font-size: 17px;
        font-weight: 300;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.35;
        letter-spacing: normal;
        color: #000000;
        margin: 0 1rem;
        /* white-space: pre-line; */
      }

      .user .titles .sub-title {
        font-size: 12px;
        font-weight: 300;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.92;
        letter-spacing: normal;
        color: #8c9098;
      }

      hr {
        margin: 1rem 2rem;
        opacity: 0.3;
      }

      @media screen and (max-width: 550px) {
        .user .titles {
          padding: 0.5rem 0;
          float: none;
          margin: auto 0;
          border: none;
          width: 100%;
          /* page-break-inside: auto; */
          /* white-space: pre-line; */
        }

        .user .titles .sub-title {
          display: block;
          text-align: center;
          width: 100%;
        }
      }
    </style>
  </head>

  <body>
    <div class="template-container">
      <div class="img"></div>
      <div class="content">
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
        </div>
      </div>
      <hr />
      <div class="link-container">
        <img
          src="https://intelligo-local-images.s3.amazonaws.com/emails/email_icon.jpg"
          alt="email icon"
        />
        <a href="mailto:tzachbonfil@gmail.com" class="link-text">
          לכל בעיה שהיא אפשר לפנות אלי במייל
        </a>
      </div>
    </div>
  </body>
</html>

`
