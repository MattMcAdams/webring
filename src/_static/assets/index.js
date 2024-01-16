/* =================================================================
/* SECTION Read URL Params
================================================================= */

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const action = urlParams.get("a");
const ref = urlParams.get("ref");

/* !SECTION Read URL Params */
/* =================================================================
/* SECTION Internal Functions
================================================================= */

// Returns the index of the site in the sites array
const findSite = (sites, url) => {
  const site = sites.findIndex(function (item) {
    return item.url.includes(url);
  });
  return site;
};

const isFirst = (siteId) => {
  return siteId === 0 ? true : false;
};

const isLast = (sites, siteId) => {
  return siteId === sites.length - 1 ? true : false;
};

/* !SECTION Internal Functions */
/* =================================================================
/* SECTION Previous
================================================================= */

async function previousHandler() {
  const resp = await fetch("/sites.json");
  const data = await resp.json();

  const previousSite = isFirst(findSite(data, ref))
    ? `${data[data.length - 1].url}`
    : `${data[findSite(data, ref) - 1].url}`;

  window.location.replace(previousSite);
}

/* !SECTION Previous */
/* =================================================================
/* SECTION Next
================================================================= */

async function nextHandler() {
  const resp = await fetch("/sites.json");
  const data = await resp.json();

  const nextSite = isLast(data, findSite(data, ref))
    ? `${data[0].url}`
    : `${data[findSite(data, ref) + 1].url}`;

  window.location.replace(nextSite);
}

/* !SECTION Next */

if (ref) {
  if (action === "prev" || action === "previous") {
    previousHandler();
  }
  if (action === "next") {
    nextHandler();
  }
}
