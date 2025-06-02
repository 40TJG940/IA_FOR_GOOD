import React from 'react'

function Challenge() {
  return (
    <div id="challenge" className="bg-gray-50 overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <svg className="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4" width="404" height="784" fill="none" viewBox="0 0 404 784">
          <defs>
            <pattern id="8b1b5f72-e944-4457-af67-0c6d15a99f38" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)" />
        </svg>

        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              The Digital Carbon Challenge
            </h2>
          </div>
          <div className="mt-10 sm:mt-0 lg:col-span-2">
            <div className="prose prose-green prose-lg text-gray-500">
              <p>
                The internet accounts for about 3.7% of global greenhouse gas emissions, 
                similar to the airline industry. This is expected to double by 2025.
              </p>
              <ul>
                <li>One email produces about 4g of CO2</li>
                <li>A single Google search emits approximately 0.2g of CO2</li>
                <li>Streaming HD video for an hour produces up to 1.6 kg of CO2</li>
                <li>Cloud storage of 100GB results in 0.2 tons of CO2 per year</li>
              </ul>
              <p>
                As our dependence on digital technology grows, so does our digital carbon footprint.
                Unlike physical pollution, digital pollution is invisible, making it easy to ignore.
              </p>
              <p>
                Our challenge is to make this invisible impact visible and provide actionable steps to reduce it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Challenge