import React from "react";
import Link from "next/link";
import { Button } from "@nextui-org/react";

const AboutPage = () => {
  return (
    <div>
      <h1>About Folder</h1>
      <Link href="/">Home</Link>
      <Button color="primary">Button</Button>
    </div>
  );
};

export default AboutPage;
