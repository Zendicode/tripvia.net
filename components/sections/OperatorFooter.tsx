/**
 * Legal operator identity line shown at the bottom of every legal page.
 * Kept verbatim: the app is operated by Weblio s. r. o. and info@weblioapp.com
 * is the contact of record (distinct from the site's general contact address).
 */
export function OperatorFooter() {
  return (
    <p>
      Weblio s.&nbsp;r.&nbsp;o., Jilemnického 1142/12, 040 01 Košice, Slovakia
      {' · '}
      IČO 57 696 497
      {' · '}
      <a
        className="font-medium text-primary-700 underline"
        href="mailto:info@weblioapp.com"
      >
        info@weblioapp.com
      </a>
    </p>
  );
}
