import { UserIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const author = defineType({
  name: "author", // name of schema
  title: "Author", // capitalize version of title of schema
  type: "document", // type of schema
  icon: UserIcon,
  fields: [
    // defineField is the field of author
    defineField({
      name: "id",
      type: "number",
    }),
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "username", // pick from github
      type: "string",
    }),
    defineField({
      name: "email", // pick from github
      type: "string",
    }),
    defineField({
      name: "image", // pick from github
      type: "url",
    }),
    defineField({
      name: "bio", // pick from github
      type: "text",
    }),
  ], // fields of each author
  preview: {
    select: {
      title: "name", // select with name and preview
    },
  },
});
