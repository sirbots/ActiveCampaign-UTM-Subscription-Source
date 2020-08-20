
# Synopsis

Version 0.4

This is a simple JavaScript plugin for [ActiveCampaign](https://www.activecampaign.com/?_r=LM8RMH2L) users that want to see a visitor's initial landing page or traffic source (UTM parameters) when a form is submitted. 

Visit data are stored in a cookie when the visitor first arrives at the site. Then, hidden fields in the ActiveCampaign form are populated with the UTM values. When the form is submitted, those values are sent to ActiveCampaign and stored in custom fields.

If no UTM parameters are included in the URL, then the script will consider referrals from Google, Yahoo, Bing, DuckDuckGo, or Baidu as organic traffic. 

Referrals from other domains will be counted as normal referral traffic and the source will be set to wherever the visitor came from. 

Direct traffic will default all UTM values to `none`.


## Installation and Setup

1. Create custom *hidden* fields in ActiveCampaign:

To track the initial landing page:

- `initial landing page`

To track the UTMs:

- `utm medium`
- `utm source`
- `utm campaign`
- `utm content`
- `utm term`

2. Update your list subscription form by adding the hidden fields to the bottom of your site forms.

3. If you use the Full Embed option for embedding your form, you will have to update the form code on your website. If you use the Simple Embed method, then no change to your form code is necessary.

4. Upload the ac-utm-cookie.js and/or ac-initial-lp.js files to your server and add it betwween the `<head>` tags of your site: `<script type="text/javascript" src="/ac-utm-cookie.js"></script>`

*NB:* The scripts are separated for the two different use cases but you can combine them if you want (requires a bit of JS noodling).


## Testing

Test it out by visiting your site with test UTM parameters (example.com/?utm_source=test-source&utm_medium=test-medium&utm_term=the-term&utm_content=some-content&utm_campaign=the_big_campaign). 

Visit a few pages, then subscribe to your list with a test email. Check the new contact record that was just created and confirm that the UTM and/or initial landing page fields were populated correctly.

## Help with implementation

* Want help or a custom implementation? You can contact me via my website (listed on my [GitHub profile page](https://github.com/sirbots).)

## License

Distributed under the MIT license.