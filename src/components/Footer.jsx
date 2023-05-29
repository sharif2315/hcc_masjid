import React from 'react'

const Footer = () => {
    // create a function to get the current year for the Copyrite
    return (
        <footer aria-label="Site Footer" class="bg-gray-50">
            <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <div class="flex justify-center text-2xl text-blue-900 sm:justify-start">
                        Hedgecock Islamic Centre
                    </div>

                    <p class="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
                        Copyright &copy; 2023. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer