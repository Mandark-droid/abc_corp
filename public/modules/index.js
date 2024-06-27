import {
    debounce,
    displaySearchSuggestions
} from './helpers.js';

import {
    fetchSearchTermSuggestions,
} from './api.js';

import { init as initApm } from '@elastic/apm-rum'
var apm = initApm({
  serviceName: 'abc_corp_rum',
  serverUrl: 'http://localhost:8200',
  serviceVersion: '',
  environment: 'my-local-dev-env'
})

const inputElement = document.getElementById("search-text");

inputElement.addEventListener(
    'keyup',
    debounce(async () => {
        const searchString = inputElement.value;
        if (searchString) {
            const response = await fetchSearchTermSuggestions(searchString);
            displaySearchSuggestions(response.suggestions);
        }
    })
);
