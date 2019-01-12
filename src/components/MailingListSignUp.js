import { h } from "hyperapp";

export default () => (
  <div>
    <h3>Mailing List</h3>
    <div id="mc_embed_signup">
      <form
        action="https://buttondown.email/api/emails/embed-subscribe/rmkubik"
        method="post"
        target="popupwindow"
        onsubmit="window.open('https://buttondown.email/rmkubik', 'popupwindow')"
        class="embeddable-buttondown-form"
      >
        {/* <label for="bd-email" class="label">
          Enter your email
        </label> */}
        <input
          type="email"
          name="email"
          id="bd-email"
          class="email"
          placeholder="email address"
        />
        <input type="hidden" value="1" name="embed" />
        <input type="submit" value="Subscribe" class="button" />
      </form>
      {"Sign up to hear updates on what I'm working on!"}
    </div>
  </div>
);
