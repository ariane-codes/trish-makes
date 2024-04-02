import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'general',
  title: 'General',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Website Title',
      type: 'string',
    }),
    defineField({
      name: 'websiteSubtitle',
      title: 'Website Subtitle',
      type: 'string',
    }),
    defineField({
        name: 'email',
        title: 'Email',
        type: 'string',
      }),
    defineField({
    name: 'instagram',
    title: 'Instagram',
    type: 'object',
    fields: [
        defineField({
            name: 'username',
            title: 'Username',
            type: 'string',
        }),
        defineField({
            name: 'url',
            title: 'URL',
            type: 'url',
        }),
    ]
    }),
  ]
})
