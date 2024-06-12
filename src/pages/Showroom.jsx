import video from "../assets/showroom.mp4";
import { Header } from "../ultilities/ultFunctions";
import { MapSection } from "../ultilities/Map.jsx";
export const Showroom = () => {
  const openingTime = 9; // 9:00 AM
  const closingTime = 18; // 6:00 PM

  const now = new Date(2024, 5, 6, 11, 30);
  const currentHour = now.getHours();

  // Check if the store is open
  if (currentHour >= openingTime && currentHour < closingTime) {
    console.log("The store is open.");
  } else {
    console.log("Sorry, the store is closed.");
  }

  return (
    <>
      <video
        className="max-w-[1920px] mx-auto  w-full rounded-b-3xl"
        controls
        autoPlay
        muted
      >
        <source src={video} type="video/mp4" />
      </video>

      <MapSection />
    </>
  );
};
