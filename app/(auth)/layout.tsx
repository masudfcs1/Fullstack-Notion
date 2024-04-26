import { Button } from "@/components/ui/button";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" p-4 bg-black">
      <Button variant={"purple"}>Clicked</Button> {children}{" "}
    </div>
  );
};

export default RootLayout;
