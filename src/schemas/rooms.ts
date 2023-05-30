import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'room',
  title: 'Room',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'type',
      title: 'Type',
      initialValue: 'medium',
      type: 'string',
      options: {
        list: [
          { title: 'single', value: 'single' },
          { title: 'double', value: 'family' },
          { title: 'presidencial', value: 'presidencial' },
        ],
      },
    }),

    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),
    defineField({
      name: 'capacity',
      title: 'Capacity',
      type: 'number',
    }),

    defineField({
      name: 'pet',
      title: 'Pets',
      type: 'boolean',
    }),
    defineField({
      name: 'breakfast',
      title: 'Breakfast',
      type: 'boolean',
    }),
    defineField({
      name: 'featured',
      title: 'featured',
      type: 'boolean',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),

    defineField({
      name: 'size',
      title: 'Size',
      type: 'string',
      initialValue: 'medium',
      options: {
        list: [
          { title: 'small', value: 'small' },
          { title: 'medium', value: 'medium' },
          { title: 'large', value: 'large' },
        ],
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',

      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),
    defineField({
      name: 'extras',
      title: 'Extras',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'extra',
          fields: [{ type: 'string', name: 'extra' }],
        }),
      ],
    }),
    defineField({
      type: 'array',
      name: 'images',
      title: 'Gallery Image',
      of: [{ type: 'image' }],
      options: {
        layout: 'grid',
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    },
  },
})
