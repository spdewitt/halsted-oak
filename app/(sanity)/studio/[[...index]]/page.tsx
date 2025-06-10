"use client";

// Instead of importing metadata and viewport from next-sanity,
// we'll define them directly here
export const metadata = {
  title: "Sanity Studio",
  description: "Content management for your site"
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1
};

// We only need the basic NextStudio component from next-sanity
import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
