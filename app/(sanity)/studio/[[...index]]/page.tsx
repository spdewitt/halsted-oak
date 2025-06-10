export const metadata = {
  title: "Sanity Studio",
  description: "Content management for your site"
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1
};

// Import the client component
import StudioPage from "./StudioPage";

export default function Studio() {
  return <StudioPage />;
}
