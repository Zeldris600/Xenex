import React from 'react'

const Loaders = () => {
  return (
    <div>
        <div class="mx-auto my-10 flex flex-wrap gap-4 px-4">
  <div>
    <p class="mb-2 text-sm font-medium text-gray-500">Spinner with text</p>
    <button class="flex items-center gap-x-4 rounded-xl bg-blue-600 px-8 py-3 font-medium text-white">
      <svg class="h-5 w-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      <span>Loading...</span>
    </button>
  </div>

  <div>
    <p class="mb-2 text-sm font-medium text-gray-500">Ellipsis</p>
    <button class="flex items-center gap-x-4 rounded-xl bg-blue-600 px-8 py-3 font-medium text-white">
      <svg class="h-6 w-6 animate-pulse" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    </button>
  </div>

  <div>
    <p class="mb-2 text-sm font-medium text-gray-500">Spinner</p>
    <button class="flex items-center gap-x-4 rounded-xl bg-blue-600 px-8 py-3 font-medium text-white">
      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <circle cx="50" cy="50" fill="none" stroke="currentColor" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138">
          <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
        </circle>
      </svg>
    </button>
  </div>

  <div>
    <p class="mb-2 text-sm font-medium text-gray-500">Reloader</p>
    <div class="py-2 text-blue-600">
      <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <g>
          <path d="M50 15A35 35 0 1 0 74.74873734152916 25.251262658470843" fill="none" stroke="currentColor" stroke-width="12"></path>
          <path d="M49 3L49 27L61 15L49 3" fill="currentColor"></path>
          <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
        </g>
      </svg>
    </div>
  </div>

  <div>
    <p class="mb-2 text-sm font-medium text-gray-500">Intercom</p>
    <div class="py-2 text-blue-600">
      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <rect x="10" y="0" width="12" fill="currentColor">
          <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0; 0.15; 1" values="20;100;20;" keySplines="0 0.5 0.5 1;0 0.5 0.25 1" begin="-0.2s"></animate>
        </rect>
        <rect x="45" y="0" width="12" fill="currentColor">
          <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0; 0.15; 1" values="20;100;20;" keySplines="0 0.5 0.5 1;0 0.5 0.25 1" begin="-0.1s"></animate>
        </rect>
        <rect x="80" y="0" width="12" fill="currentColor">
          <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0; 0.15; 1" values="20;100;20;" keySplines="0 0.5 0.5 1;0 0.5 0.25 1"></animate>
        </rect>
      </svg>
    </div>
  </div>

  <div>
    <p class="mb-2 text-sm font-medium text-gray-500">Spinner with dot</p>
    <div class="py-2 text-blue-600">
      <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <g transform="translate(50,50)">
          <g transform="scale(0.7)">
            <circle cx="0" cy="0" r="50" fill="currentColor"></circle>
            <circle cx="0" cy="-28" r="15" fill="white">
              <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 0 0;360 0 0"></animateTransform>
            </circle>
          </g>
        </g>
      </svg>
    </div>
  </div>
</div>

    </div>
  )
}

export default Loaders