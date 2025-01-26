import {Rule} from "sanity"

export const Blogs= {
    name: 'blog',
    title: 'Blog',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Blog Title',
        type: 'string',
        validation: (Rule:Rule) => Rule.required().min(5).max(100), // Blog name length validation
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name', // Automatically generates slug from the blog name
          maxLength: 96, // Limits the slug length
        },
        validation: (Rule:Rule) => Rule.required(),
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true, // Allows cropping and focal point adjustment
        },
        validation: (Rule:Rule) => Rule.required(), // Ensures the blog must have an image
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: (Rule:Rule) => Rule.required().min(50).max(2000), // Minimum 50, maximum 2000 characters
      },
      {
        name: 'author',
        title: 'Author',
        type: 'string',
        validation: (Rule:Rule) => Rule.required().min(3).max(50), // Ensures the author's name is between 3 and 50 characters
      },
      {
        name: 'date',
        title: 'Publish Date',
        type: 'datetime',
        validation: (Rule:Rule) => Rule.required(), // Ensures the blog must have a publish date
      },
    ],
  };
  