export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ec7d2f3ce8130c932610c74',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-xkr2dq8k',
                  apiId: 'e8810b44-cbb5-4517-aeed-4058e40f89a1'
                },
                {
                  buildHookId: '5ec7d2f357f7e84ef2d6545c',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-dm7xnfop',
                  apiId: '081e895d-6ea2-4115-ba76-b9dbc8683187'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rajkishor09/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-dm7xnfop.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
