# Webring

A simple [webring](https://en.wikipedia.org/wiki/Webring) service / website template. Built with [11ty](https://www.11ty.dev/).

## Rules & Criteria

Put the criteria for joining your webring here.

## Join the webring

To join this webring, you must include a link to the index as well as a pervious and next link on your site. These links must be accessible from your homepage at minimum, but the footer is the best place to put them.

You may use the code below, or some adaptation of it:

```html
<p>Part of the <a href="https://example.com">example</a> webring.
  <a href="https://example.com?a=prev&ref=YOUR_URL">Previous</a>
  &nbsp;&middot;&nbsp;
  <a href="https://example.com?a=next&ref=YOUR_URL">Next</a>
</p>
```

## For developers

### Getting Started

Local development of this project requires npm.

Create a new repository using this as a template, or fork this repository. Clone and install project dependencies with `npm install`.

To open the site locally, run `npm run dev`. To build the website for production, run `npm run build`, the site will be built in the "dist" folder.

### Adding / Removing sites

To add, remove, or change the order of sites, edit `_data/sites.json`. The structure should match the following:

```json
[
  {
    "title": "Name",
    "url": "https://example.com"
  }
]
```

If you wish to add to this structure, you'll also need to edit `src/sites.liquid`.
