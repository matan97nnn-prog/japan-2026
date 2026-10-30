import { Star } from "lucide-react";
import { googleMapsPlaceUrl } from "../lib/nav";
import { useLang } from "../lib/i18n";

/* The one button people want from a map pin: open the place in Google Maps
 * for reviews, photos and hours. Pass `href` when we already have the
 * exact place link (e.g. a Google cid). */
export default function GoogleReviewsLink({
  name,
  coords,
  address,
  href
}: {
  name?: string;
  coords?: [number, number];
  address?: string;
  href?: string;
}) {
  const { lang } = useLang();
  const url = href ?? (name && coords ? googleMapsPlaceUrl({ name, coords, address }) : "#");
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-[#1a73e8] !text-white px-3 py-1.5 text-[12.5px] font-semibold no-underline"
    >
      <Star size={13} fill="currentColor" />
      {lang === "he" ? "ביקורות ותמונות בגוגל" : "Reviews & photos on Google"}
    </a>
  );
}
