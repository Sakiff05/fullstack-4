import React from "react";
import { Helmet } from "react-helmet-async";

export default function NotFound() {
  return (
    <div className="py-80">
      <Helmet>
        <title>Not Found</title>
        <meta name="description" content="Not Found" />
      </Helmet>
      <p className="text-5xl text-center">Page not found!</p>
    </div>
  );
}
