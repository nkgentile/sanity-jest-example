export default {
    name: 'article',
    type: 'document',
    fields: [
        { name: 'title', type: 'string', validation: Rule => Rule.required() },
        {
            name: 'body', type: 'array', of: [
                { type: 'block' }
            ]
        }
    ]
};