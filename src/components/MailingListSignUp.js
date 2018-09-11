import { h } from 'hyperapp';

export default () => (
  <div>
    {"Sign up to hear updates on what I'm working on:"}
    <div id="mc_embed_signup">
      <form
        action="https://ryankubik.us17.list-manage.com/subscribe/post?u=9b8c018898653292cbe3711f0&amp;id=57cdfbb895"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        novalidate
      >
        <div id="mc_embed_signup_scroll">
          <input
            type="email"
            value=""
            name="EMAIL"
            className="email"
            id="mce-EMAIL"
            placeholder="email address"
            required
          />
          {/* real people should not fill this in and expect good things
          - do not remove this or risk form bot signups */}
          <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
            <input
              type="text"
              name="b_9b8c018898653292cbe3711f0_57cdfbb895"
              tabindex="-1"
              value=""
            />
          </div>
          <div className="clear">
            <input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
);
