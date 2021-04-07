function render(data) {
  console.log(data);
    return [
      {
        type: 'custom',
        module: 'custom-component',
        component: 'CustomMultiSelect',
        text: data.text,
        choices: data.choices,
        data: data
      }
    ]
  }
  
  function renderElement(data, channel) {
    if (channel === 'web' || channel === 'api') {
      return render(data)
    }
  
    return [] // TODO
  }
  
  module.exports = {
    id: 'custom_multi-select',
    group: 'Custom Component',
    title: 'Multi Select',
    jsonSchema: {
      description: 'Multi Select',
      type: 'object',
      required: [],
      properties: {
        text: {
          type: 'string',
          title: 'message'
        },
        choices: {
          type: 'array',
          title: 'Choice',
          minItems: 1,
          maxItems: 10,
          items: {
            type: 'object',
            required: ['title', 'value'],
            properties: {
              title: {
                description: 'Title',
                type: 'string',
                title: 'Message'
              },
              value: {
                description: 'Value',
                type: 'string',
                title: 'Value'
              }
            }
          }
        }
      }
    },
    uiSchema: {
        text: {
          'ui:field': 'i18n_field'
        },
        choices: {
          'ui:field': 'i18n_array'
        }
      },
      computePreviewText: formData =>
        formData.choices && formData.text && `Choices (${formData.choices.length}) ${formData.text}`,
      renderElement: renderElement,
      hidden: true
  }