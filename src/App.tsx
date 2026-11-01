import { useCallback, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import HomeHero from "./components/HomeHero";
import DayCarousel from "./components/DayCarousel";
import TodayStrip, { HomeShortcuts } from "./components/TodayStrip";
import QuickBookings from "./components/QuickBookings";
import RouteWeather from "./components/RouteWeather";
import PlanOverview from "./components/PlanOverview";
import YenConverter from "./components/YenConverter";
import TransitSection from "./components/TransitSection";
import OnsenSection from "./components/OnsenSection";
import UpdatesSection from "./components/UpdatesSection";
import Phrasebook from "./components/Phrasebook";
import NotesSection from "./components/NotesSection";
import MapView from "./components/MapView";
import SavedPlacesSection from "./components/SavedPlacesSection";
import AttractionsGrid from "./components/AttractionsGrid";
import StaysSection from "./components/StaysSection";
import ServicesSection from "./components/ServicesSection";
import FoodAndWineSection from "./components/FoodAndWineSection";
import ChecklistSection from "./components/ChecklistSection";
import TipsSection from "./components/TipsSection";
import EmergencySection from "./components/EmergencySection";
import Footer from "./components/Footer";
import MobileBottomNav from "./components/MobileBottomNav";
import ChapterDetailPage from "./components/ChapterDetailPage";
import InstallPrompt from "./components/InstallPrompt";
import { MapFocusContext } from "./lib/mapContext";
import { navigatePage, useHashRoute, type Page } from "./lib/route";

/* Home is short: hero, weather, the plan, bookings, hotels, shortcuts.
 * Everything else lives on its own tab page. */
function PageBody({ page, registerFocus }: { page: Page; registerFocus: (fn: (id: string) => void) => void }) {
  switch (page) {
    case "plan":
      return <PlanOverview />;
    case "transit":
      return <TransitSection />;
    case "map":
      return (
        <>
          <MapView registerFocus={registerFocus} />
          <SavedPlacesSection />
        </>
      );
    case "food":
      return (
        <>
          <FoodAndWineSection />
          <ServicesSection />
        </>
      );
    case "places":
      return <AttractionsGrid />;
    case "stays":
      return <StaysSection />;
    case "onsen":
      return <OnsenSection />;
    case "updates":
      return <UpdatesSection />;
    case "phrases":
      return <Phrasebook />;
    case "info":
      return (
        <>
          <NotesSection />
          <TipsSection />
          <ChecklistSection />
          <EmergencySection />
        </>
      );
  }
}

export default function App() {
  const focusFnRef = useRef<((id: string) => void) | null>(null);
  const pendingFocus = useRef<string | null>(null);
  const route = useHashRoute();

  // "Show on map" from any tab: jump to the Maps tab, then fly to the pin
  // once the map has mounted and registered itself.
  const focusOn = useCallback((id: string) => {
    if (focusFnRef.current && window.location.hash === "#/map") {
      focusFnRef.current(id);
    } else {
      pendingFocus.current = id;
      navigatePage("map");
    }
  }, []);

  const registerFocus = useCallback((fn: (id: string) => void) => {
    focusFnRef.current = fn;
    if (pendingFocus.current) {
      const id = pendingFocus.current;
      pendingFocus.current = null;
      setTimeout(() => fn(id), 300);
    }
  }, []);

  useEffect(() => {
    if (route.kind !== "page" || route.page !== "map") focusFnRef.current = null;
  }, [route]);

  // Every tab opens at its top.
  const routeKey = route.kind === "page" ? route.page : route.kind === "chapter" ? `d${route.day}` : "home";
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [routeKey]);

  if (route.kind === "chapter") {
    return (
      <>
        <ChapterDetailPage dayNumber={route.day} />
        <InstallPrompt />
      </>
    );
  }

  return (
    <MapFocusContext.Provider value={{ focusOn }}>
      <Navbar />
      {route.kind === "home" ? (
        <>
          <HomeHero />
          <DayCarousel />
          <HomeShortcuts />
          <TodayStrip />
          <YenConverter />
          <QuickBookings />
          <RouteWeather />
          <div className="h-8" />
        </>
      ) : (
        <main className="pt-16 sm:pt-20">
          <PageBody page={route.page} registerFocus={registerFocus} />
        </main>
      )}

      <Footer />

      {/* Spacer so content above the bottom nav isn't hidden on mobile */}
      <div className="h-20 md:hidden" aria-hidden />

      <MobileBottomNav />
      <InstallPrompt />
    </MapFocusContext.Provider>
  );
}
