import { defineField, defineType } from "sanity";
export const playlist = defineType({
  name: "playlist",
  title: "Playlist",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "select", // array of different references to type startup
      type: "array",
      of: [{ type: "reference", to: [{ type: "startup" }] }], // each playlists will refer to multiple startups
    }),
  ],
});
