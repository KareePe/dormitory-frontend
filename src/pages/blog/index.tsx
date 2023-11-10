import React from "react";
import Link from "next/link";
import { Button } from "@nextui-org/react";

const Blog = () => {
  return (
    <>
      <Link href="/blog/1">blog1</Link>
      <Link href="/blog/2">blog2</Link>
      <Link href="/blog/3">blog2</Link>
    </>
  );
};

export default Blog;
