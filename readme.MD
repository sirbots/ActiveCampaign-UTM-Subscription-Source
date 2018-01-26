
# Synopsis

Version 0.1

This is a simple JavaScript plugin for ActiveCampaign users that want to see the traffic source (UTM parameters) that were used when a contact subscribed to their list. 

The UTM parameters are stored in a cookie when the visitor first arrives at the site. Then, hidden fields in the ActiveCampaign form are populated with the UTM values. When the form is submitted, those values are sent to ActiveCampaign and stored in custom fields.

## Installation and Setup

1. Create custom *hidden* fields in ActiveCampaign. You can name them whatever you want, but it's easiest if you give them descriptive names and create them in *this* order:

- UTM Subscription Medium
- UTM Subscription Source
- UTM Subscription Campaign
- UTM Subscription Content
- UTM Subscription Term

2. Update your list subscription form by adding the hidden fields to the bottom of your form, in the order that you created them.

3. If you use the Full Embed option for embedding your form, you will have to update the form code on your website. If you use the Simple Embed method, then no change to your form code is necessary.

4. Before installing ac-cookie.js, you will have to modify it slightly. Look at your hidden form `<input>` fields and see what number they are, for example: `[name="field[30]"`. Go to the bottom of ac-cookie.js and edit the field numbers in the jQuery code so they match the field numbers on your form.

5. If you don't have jQuery on your site, install it by adding this between the `<head>` tags of your site: `<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>`

6. Upload the ac-cookie.js file to your server and add it betwween the `<head>` tags of your site: `<script type="text/javascript" src="/ac-cookie.js"></script>`


## Testing

Test it out by visiting your site with test UTM parameters (example.com/?utm_source=test-source&utm_medium=test-medium&utm_term=the-term&utm_content=some-content&utm_campaign=the_big_campaign). 

Visit a few pages, then subscribe to your list with a test email. Check the new contact record that was just created and confirm that the fields were populated correctly.


## Notes

* This should work whether you are using a Simple Embed or a Full Embed of the ActiveCampaign form.
* With a Simple Embed, you will have to open up the embedded JS file to find the hidden field numbers (e.g. "field[33]")

## Future Updates

* Solution for referral and organic traffc.
* Support for initial visit UTMs in addition to subscribe event session UTMs.

## License

Distributed under the MIT license.